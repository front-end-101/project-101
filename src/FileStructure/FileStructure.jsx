import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { CiFileOn } from "react-icons/ci";

const FileStructure = () => {
  const data = [
    {
      name: "Folder",
      children: [],
    },
    {
      name: "file",
    },
    {
      name: "Folder",
      children: [
        {
          name: "Child1",
          children: [
            {
              name: "Child2",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="p-10">
      <h2>File Structure</h2>
      {data.map((item, indx) => {
        return <Folder key={indx} item={item} />;
      })}
    </div>
  );
};

const Folder = ({ item }) => {
  const [expand, setExpand] = useState(false);
  return (
    <div>
      {item.children?.length > 0 ? (
        <div className="border-l-2 border-slate-500 ">
          <span className="hover:bg-slate-400 cursor-pointer flex items-center" onClick={() => setExpand(prev => !prev)}>
            {expand ? <CiSquareMinus size={30}/> : <CiSquarePlus size={30} />} {item.name}
          </span>
          {expand && (
            <div className="pl-4 ">
              {item?.children?.map((child, indx) => {
                return <Folder key={indx} item={child} />;
              })}
            </div>
          )}
        </div>
      ) : (
        <div className="hover:bg-slate-400 cursor-pointer flex items-center gap-2"><CiFileOn size={30}/>{item.name}</div>
      )}
    </div>
  );
};

export default FileStructure;
