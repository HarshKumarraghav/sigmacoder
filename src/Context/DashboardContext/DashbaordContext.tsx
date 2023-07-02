import { useState, createContext, useContext, useEffect } from "react";

const DashboardContext = createContext<any>(null);
const DashboardProvider = ({ children }: any) => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [selectedList, setSelectedList] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  /**
   * The handleListChange function updates the selectedList state with the provided value.
   * @param {any} value - The `value` parameter is the new value that is selected in the list.
   */
  const handleListChange = (value: any) => {
    setSelectedList(value);
  };

  /**
   * The function `handleDifficultyChange` updates the selected difficulty value.
   * @param {any} value - The `value` parameter is the new difficulty value that is selected by the user.
   */
  const handleDifficultyChange = (value: any) => {
    setSelectedDifficulty(value);
  };
  /**
   * The function `handleStatusChange` updates the selected status value.
   * @param {any} value - The value parameter is the new status value that is selected or changed.
   */

  const handleStatusChange = (value: any) => {
    setSelectedStatus(value);
  };

  /**
   * The function `handleSearchChange` updates the search query based on the value of an input field.
   * @param {any} event - The `event` parameter is an object that represents the event that triggered the
   * function. In this case, it is an event object that is generated when the value of an input field
   * changes.
   */
  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };
  /**
   * The function `AllQuestionsHandler` makes a GET request to a specific API endpoint, retrieves the
   * response data, and sets it to the state variable `AllQuestions`.
   */
  const AllQuestionsHandler = async () => {
    const token = localStorage.getItem("access_token");
    const RequestOption = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(
      `${import.meta.env.VITE_SIGMACODER_URI}all/allquestions`,
      RequestOption
    );
    try {
      if (response.ok) {
        const data = await response.json();
        console.log("data", data);
        setAllQuestions(data);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };
  /* The `useEffect` hook is used to perform side effects in a functional component. In this case, it is
used to call the `AllQuestionsHandler` function when the component is mounted (i.e., when it is
first rendered). The empty array `[]` passed as the second argument to `useEffect` ensures that the
effect is only run once, when the component is mounted, and not on subsequent re-renders. */
  useEffect(() => {
    AllQuestionsHandler();
  }, []);
  return (
    <DashboardContext.Provider
      value={{
        allQuestions,
        selectedList,
        handleListChange,
        selectedDifficulty,
        handleDifficultyChange,
        selectedStatus,
        handleStatusChange,
        searchQuery,
        handleSearchChange,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

const useDashboard = () => {
  const context = useContext(DashboardContext);
  return context;
};

export { DashboardProvider, DashboardContext, useDashboard };
