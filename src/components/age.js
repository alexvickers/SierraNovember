import React, { useState, useEffect } from "react";

const Age = () => {
  const [age, setAge] = useState(null);

  useEffect(() => {
    const birthDate = new Date("1983-05-14");
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();

    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  }, []);

  return <span>{age !== null ? age : "..."}</span>;
};

export default Age;
