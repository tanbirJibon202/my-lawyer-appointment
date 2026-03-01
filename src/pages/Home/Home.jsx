import React from "react";
import Banner from "../../components/Banner/Banner";
import Lawyers from "../Lawyers/Lawyers";
import { useLoaderData } from "react-router";
import AchievementSection from "../../components/AchievementSection/AchievementSection";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="w-full">
      <Banner></Banner>
      <Lawyers data={data}></Lawyers>
      <AchievementSection></AchievementSection>
    </div>
  );
};

export default Home;
