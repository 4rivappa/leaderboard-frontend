import { useState, useEffect } from "react";
import icon from '../assets/user-regular.svg';
import Skele from './Skele';
import NavBar from './NavBar';
import { useParams } from "react-router-dom";
import Table from "./Table";
import Notfound from "./Notfound";


export default function Profile() {
  const { id } = useParams();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const backendUrl = "https://leaderboard-backend.vercel.app";
        fetch(`https://api.monkeytype.com/users/${id}/profile`, {
          method: 'GET',
          mode: 'cors'
        })
          .then(res => res.json())
          .then(res => {
            if (res.message === 'Profile retrieved') {
              var new_profile_data = {}
              new_profile_data.name = res.data.name;
              new_profile_data.dId = res.data.discordId;
              new_profile_data.avatar = res.data.discordAvatar;

              const user_id = res.data.uid;
              fetch(`${backendUrl}/profile/${user_id}`, {
                method: 'GET',
                mode: 'cors'
              })
                .then(res => res.json())
                .then(res => {
                  if (res.message === 'success') {
                    new_profile_data.fifteen = res.body.fifteen;
                    new_profile_data.sixty = res.body.sixty;

                    setProfile(new_profile_data);
                  }
                  else {
                    setProfile({name: ""});
                  }
                })
            }
            else {
              setProfile({name: ""});
            }
          })
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      {profile && profile.name ?
        (<>
          <div className="m-2 flex justify-center items-center">
            <div className="m-10 w-4/5 text-text-color bg-sub-alt-color flex flex-col ssm:flex-row">
              <div className="max-auto w-auto pt-4 ssm:pt-0 ssm:w-1/2 flex justify-center ssm:justify-end items-center">
                {profile.dId ?
                  (<img className="rounded-full h-3/5 w-3/5 ssm:w-auto" src={`https://cdn.discordapp.com/avatars/${profile.dId}/${profile.avatar}.png?size=256`} alt="Profile Image"></img>)
                  : (<img src={icon} alt="Profile Image" className="h-3/5 w-3/5 ssm:w-auto max-w-[40%]"></img>)
                }
              </div>
              <div className="max-auto w-full ssm:w-1/2 px-5 py-5 ssm:py-10 flex items-center justify-center ssm:justify-start">
                <div className="font-bold text-xl">{profile.name}</div>
              </div>
            </div>
          </div>

          <div id="ranks-table" className="m-4 md:px-10 lg:px-20 xl:px-40 grid grid-cols-2 gap-2 md:gap-4 justify-center items-center opacity-100">
             <Table profile={profile} time={15} rowsArray={profile.fifteen}/>
             <Table profile={profile} time={60} rowsArray={profile.sixty}/>
          </div>
        </>)
        : profile && profile.name == "" ? 
           (<Notfound />)
            :(<Skele />)
      }
    </>
  )
}