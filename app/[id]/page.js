import React from "react";

const TitleId = (props) => {
  //   const param1 = useRouter();
  console.log(props);

  return <div>{props.params.id}</div>;
};

export default TitleId;
