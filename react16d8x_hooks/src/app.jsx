import React, { useState } from "react";

function PersonalInfoComponent() {
  // 集中定义变量
  let name, age, career, setName, setCareer;

  // 获取姓名状态
  [name, setName] = useState("修言");

  // 获取年龄状态
  [age] = useState("99");

  // 获取职业状态
  [career, setCareer] = useState("我是一个前端，爱吃小熊饼干");

  // 输出职业信息
  console.log("career", career);

  // 编写 UI 逻辑
  return (
    <div className="personalInfo">
      <p>姓名：{name}</p>
      <p>年龄：{age}</p>
      <p>职业：{career}</p>
      <button
        onClick={() => {
          setName("秀妍");
        }}
      >
        修改姓名
      </button>
    </div>
  );
}

export default PersonalInfoComponent;
