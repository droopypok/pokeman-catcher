import React, { useEffect, useState } from "react";

const ProfileInfo = () => {
  const [name, setName] = useState();
  const [pic, setPic] = useState();
  const [region, setRegion] = useState();
  const [type, setType] = useState();
  const [profile, setProfile] = useState();

  // const getProfileInfo = async () => {
  //   try {
  //     const res = await fetch(
  //       "https://api.airtable.com/v0/appilxsJRs69yeTn9/Table%201",
  //       {
  //         method: "GET",
  //         headers: {
  //           Authorization:
  //             "Bearer patxD0v1jlSvjLqBV.f5a593a9bcdb6d61fb435b81e34641d5d7c5b1b73f10c0ab0054a00606e44fe0",
  //         },
  //       }
  //     );
  //     if (res.ok) {
  //       const data = await res.json();
  //       setProfile(data);
  //       setName(data.fields.name);
  //       setPic(data.fields.pic);
  //       setRegion(data.fields.region);
  //       setType(data.fields.type);
  //     }
  //   } catch (error) {
  //     if (error.name !== "AbortError") {
  //       console.log(error.message);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   getProfileInfo();
  // }, []);

  return (
    <div>
      <img src={pic} alt="" height="200px" />
      <h2>{name}</h2>
      <h2>{region}</h2>
      <h2>{type}</h2>
    </div>
  );
};

export default ProfileInfo;
