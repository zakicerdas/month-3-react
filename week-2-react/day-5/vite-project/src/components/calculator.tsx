import React, { useState } from "react";

function TemperatureInput({ temperature, onTemperatureChange, scale }) {
  const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
  };

  return (
    <div className="flex flex-col items-start bg-white shadow-lg rounded-2xl p-4 m-3 w-64">
      <label className="font-semibold text-indigo-600 mb-2 text-lg">
        {scaleNames[scale]}
      </label>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value, scale)}
        placeholder={`Masukkan suhu (${scaleNames[scale]})`}
        className="border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 rounded-lg p-2 w-full text-gray-800 transition duration-200"
      />
    </div>
  );
}


function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// 🔹 Fungsi utilitas konversi
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) return "";
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}


function Calculator() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCelsiusChange = (temp) => {
    setTemperature(temp);
    setScale("c");
  };

  const handleFahrenheitChange = (temp) => {
    setTemperature(temp);
    setScale("f");
  };

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200 p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">
          Kalkulator Suhu
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center">
          <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={handleCelsiusChange}
          />
          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={handleFahrenheitChange}
          />
        </div>

        <div className="mt-6 bg-indigo-50 p-4 rounded-2xl shadow-inner">
          <p className="text-lg text-gray-700 font-medium">
            Suhu dalam <span className="font-bold">Celsius:</span> {celsius}
          </p>
          <p className="text-lg text-gray-700 font-medium mt-1">
            Suhu dalam <span className="font-bold">Fahrenheit:</span>{" "}
            {fahrenheit}
          </p>
        </div>

        <p className="mt-5 text-sm text-gray-500 italic">
        </p>
      </div>
    </div>
  );
}

export default Calculator;