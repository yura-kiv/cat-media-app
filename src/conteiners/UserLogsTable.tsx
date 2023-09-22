import React from "react";
import MessageBlock from "../components/MessageBlock/MessageBlock";
import { getHoursMinutes } from "../helpers/pagesHelper";
import { useAppSelector } from "../hooks/store";
import { UserLogCategory } from "../store/slices/userLogsSlice";
import { ReactComponent as Smile } from "../assets/icons/like-color-20.svg";
import { ReactComponent as SadSmile } from "../assets/icons/dislike-color-20.svg";
import { ReactComponent as Heart } from "../assets/icons/fav-20.svg";

interface UserLogsTableProps {
  categories: UserLogCategory[];
}

const UserLogsTable: React.FC<UserLogsTableProps> = ({ categories }) => {
  const userLogs = useAppSelector((state) => state.userLogsSlice.logs);
  const filteredLogs = userLogs.filter((log) => categories?.includes(log.category));

  return (
    <div className="user-logs-wrapper">
      {filteredLogs.length !== 0 && (
        <span className="block text-gray-800 mt-3 ml-3 text-lg font-medium dark:text-gray-100">
          User logs:
        </span>
      )}
      <div className="flex flex-col gap-3 mt-3">
        {filteredLogs
          .map(({ category, status, time, imageId }) => {
            return (
              <MessageBlock
                key={imageId + time}
                color="gray"
                icon={
                  <span className="rounded-xl py-1 px-2.5 bg-white dark:bg-neutral-500 dark:text-gray-100">
                    {getHoursMinutes(time)}
                  </span>
                }
                innerContent={
                  <div className="flex justify-between items-center w-full">
                    <p className="block text-gray-700 mr-3 dark:text-gray-300">
                      Image ID:{" "}
                      <span className="font-medium text-black dark:text-gray-100">{imageId} </span>
                      {category === "dislike" || category === "like"
                        ? "was added to "
                        : status
                        ? "was added to "
                        : "was removed from "}
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </p>
                    {category === "like" ? (
                      <Smile />
                    ) : category === "dislike" ? (
                      <SadSmile />
                    ) : (
                      <Heart />
                    )}
                  </div>
                }
              />
            );
          })
          .reverse()}
      </div>
    </div>
  );
};

export default UserLogsTable;
