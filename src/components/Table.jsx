import React from 'react'

const Table = ({ profile, time, rowsArray }) => {

    const getDate = (ts) => {
        const date = new Date(ts);
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const year = date.getUTCFullYear();
        const month = monthNames[date.getUTCMonth()];
        const day = date.getUTCDate().toString().padStart(2, '0');
        return `${day} ${month} ${year}`;
    }

    const getTime = (ts) => {
        const date = new Date(ts);
        const hours = date.getUTCHours().toString().padStart(2, '0');
        const minutes = date.getUTCMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    return (
        <>
            <div id="fifteen-table" className="col-span-2 sm:col-span-1 shadow-md shadow-sub-alt-color sm:rounded-lg max-auto overflow-x-auto max-h-60 sm:max-h-96">
                <table className="w-full text-sm text-left">
                    <caption className="caption-top text-text-color text-left pl-2 pb-2 sticky top-0">
                        Time {time}
                    </caption>
                    <thead className="text-xs text-sub-color bg-bg-color">
                        <tr>
                            <th scope="col" className="px-2 py-1">date<br /><div className="opacity-40">utc time</div></th>
                            <th scope="col" className="px-2 py-1">rank</th>
                            <th scope="col" className="px-2 py-1 text-right">wpm<br /><div className="opacity-40">accuracy</div></th>
                            <th scope="col" className="px-2 py-1 text-right hidden ssm:block">raw<br /><div className="opacity-40">consistency</div></th>
                        </tr>
                    </thead>
                    <tbody>
                        {profile.fifteen && rowsArray.map((row, index) => (
                            <tr key={index} className="odd:bg-sub-alt-color even:bg-bg-color text-text-color">
                                <td className="px-2 py-1">{getDate(row.ts)}<br /><div className="opacity-40">{getTime(row.ts)}</div></td>
                                <td className="px-2 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">{row.r}</td>
                                <td className="px-2 py-1 text-right">{parseFloat(row.wpm).toFixed(2)}<br /><div className="opacity-40">{parseFloat(row.acc).toFixed(2)}</div></td>
                                <td className="px-2 py-1 text-right hidden ssm:block">{parseFloat(row.raw).toFixed(2)}<br /><div className="opacity-40">{parseFloat(row.con).toFixed(2)}</div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table