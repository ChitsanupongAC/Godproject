"use client";

import React, { useMemo, useState } from "react";
import {
  ArrowRightLeft,
  BarChart3,
  Bolt,
  Bookmark,
  Calculator,
  Car,
  CheckCircle2,
  CircleAlert,
  Download,
  FileText,
  Gauge,
  Info,
  Landmark,
  RefreshCcw,
  Settings,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  Zap,
  BookOpen,
} from "lucide-react";

const vehicleLibrary = [
  {
    id: 1,
    name: "Tesla Model 3",
    category: "Battery Electric Sedan",
    drive: "Rear-Wheel Drive",
    battery: "Lithium-ion battery pack",
    systemVoltage: 400,
    sampleCurrent: 16,
    powerFactor: 0.93,
    efficiency: 94,
    estimatedMotorClass: "180–220 kW class",
    use: "Mainstream EV sedan reference",
    note: "Popular EV sedan for general comparison.",
    source: "Add official manufacturer reference",
  },
  {
    id: 2,
    name: "Tesla Model Y",
    category: "Battery Electric SUV",
    drive: "All-Wheel Drive",
    battery: "Lithium-ion battery pack",
    systemVoltage: 400,
    sampleCurrent: 18,
    powerFactor: 0.93,
    efficiency: 94,
    estimatedMotorClass: "200–260 kW class",
    use: "Family EV SUV reference",
    note: "Useful for comparing EV SUV output.",
    source: "Add official manufacturer reference",
  },
  {
    id: 3,
    name: "Tesla Model S",
    category: "Battery Electric Sedan",
    drive: "All-Wheel Drive",
    battery: "Lithium-ion battery pack",
    systemVoltage: 400,
    sampleCurrent: 22,
    powerFactor: 0.94,
    efficiency: 94,
    estimatedMotorClass: "300–500 kW class",
    use: "Premium high-performance EV sedan",
    note: "Good example of higher-output EV performance.",
    source: "Add official manufacturer reference",
  },
  {
    id: 4,
    name: "Tesla Model X",
    category: "Battery Electric SUV",
    drive: "All-Wheel Drive",
    battery: "Lithium-ion battery pack",
    systemVoltage: 400,
    sampleCurrent: 23,
    powerFactor: 0.94,
    efficiency: 94,
    estimatedMotorClass: "300–500 kW class",
    use: "Large luxury EV SUV reference",
    note: "Useful for high-power SUV comparison.",
    source: "Add official manufacturer reference",
  },
  {
    id: 5,
    name: "BYD Dolphin",
    category: "Battery Electric Hatchback",
    drive: "Front-Wheel Drive",
    battery: "Blade battery",
    systemVoltage: 350,
    sampleCurrent: 12,
    powerFactor: 0.91,
    efficiency: 93,
    estimatedMotorClass: "70–130 kW class",
    use: "Compact EV city car reference",
    note: "Good entry-level EV model for demos.",
    source: "Add official manufacturer reference",
  },
  {
    id: 6,
    name: "BYD Atto 3",
    category: "Battery Electric SUV",
    drive: "Front-Wheel Drive",
    battery: "Blade battery",
    systemVoltage: 400,
    sampleCurrent: 15,
    powerFactor: 0.92,
    efficiency: 93,
    estimatedMotorClass: "140–170 kW class",
    use: "Mainstream EV SUV reference",
    note: "Useful for EV SUV comparison.",
    source: "Add official manufacturer reference",
  },
  {
    id: 7,
    name: "BYD Seal",
    category: "Battery Electric Sedan",
    drive: "Rear-Wheel Drive",
    battery: "Blade battery",
    systemVoltage: 400,
    sampleCurrent: 17,
    powerFactor: 0.93,
    efficiency: 94,
    estimatedMotorClass: "170–230 kW class",
    use: "Mid-size EV sedan reference",
    note: "Useful for comparing modern EV sedans.",
    source: "Add official manufacturer reference",
  },
  {
    id: 8,
    name: "BYD Sealion 7",
    category: "Battery Electric SUV",
    drive: "All-Wheel Drive",
    battery: "Blade battery",
    systemVoltage: 400,
    sampleCurrent: 18,
    powerFactor: 0.93,
    efficiency: 94,
    estimatedMotorClass: "220–280 kW class",
    use: "Performance EV SUV reference",
    note: "Good for larger EV SUV analysis.",
    source: "Add official manufacturer reference",
  },
  {
    id: 9,
    name: "MG4 Electric",
    category: "Battery Electric Hatchback",
    drive: "Rear-Wheel Drive",
    battery: "Lithium-ion battery",
    systemVoltage: 400,
    sampleCurrent: 14,
    powerFactor: 0.92,
    efficiency: 93,
    estimatedMotorClass: "125–180 kW class",
    use: "Affordable EV hatchback reference",
    note: "Good budget EV comparison model.",
    source: "Add official manufacturer reference",
  },
  {
    id: 10,
    name: "MG ZS EV",
    category: "Battery Electric SUV",
    drive: "Front-Wheel Drive",
    battery: "Lithium-ion battery",
    systemVoltage: 350,
    sampleCurrent: 13,
    powerFactor: 0.91,
    efficiency: 93,
    estimatedMotorClass: "100–130 kW class",
    use: "Compact EV SUV reference",
    note: "Useful for entry SUV EV comparison.",
    source: "Add official manufacturer reference",
  },
  {
    id: 11,
    name: "MG Cyberster",
    category: "Battery Electric Sports Car",
    drive: "All-Wheel Drive",
    battery: "Lithium-ion battery",
    systemVoltage: 400,
    sampleCurrent: 21,
    powerFactor: 0.94,
    efficiency: 94,
    estimatedMotorClass: "250–400 kW class",
    use: "EV sports performance reference",
    note: "Useful for sporty EV case study.",
    source: "Add official manufacturer reference",
  },
  {
    id: 12,
    name: "Hyundai Kona Electric",
    category: "Battery Electric Crossover",
    drive: "Front-Wheel Drive",
    battery: "Lithium-ion battery pack",
    systemVoltage: 400,
    sampleCurrent: 14,
    powerFactor: 0.92,
    efficiency: 93,
    estimatedMotorClass: "100–150 kW class",
    use: "Compact crossover EV reference",
    note: "Useful for crossover class analysis.",
    source: "Add official manufacturer reference",
  },
  {
    id: 13,
    name: "Hyundai IONIQ 5",
    category: "Battery Electric Vehicle",
    drive: "All-Wheel Drive",
    battery: "E-GMP battery platform",
    systemVoltage: 700,
    sampleCurrent: 16,
    powerFactor: 0.94,
    efficiency: 94,
    estimatedMotorClass: "160–240 kW class",
    use: "Advanced high-voltage EV reference",
    note: "Good example of 800V-class style architecture.",
    source: "Add official manufacturer reference",
  },
  {
    id: 14,
    name: "Hyundai IONIQ 6",
    category: "Battery Electric Sedan",
    drive: "All-Wheel Drive",
    battery: "E-GMP battery platform",
    systemVoltage: 700,
    sampleCurrent: 16,
    powerFactor: 0.94,
    efficiency: 94,
    estimatedMotorClass: "150–240 kW class",
    use: "Aerodynamic EV sedan reference",
    note: "Useful for efficiency-focused EV study.",
    source: "Add official manufacturer reference",
  },
  {
    id: 15,
    name: "Kia EV6",
    category: "Battery Electric Vehicle",
    drive: "All-Wheel Drive",
    battery: "E-GMP battery platform",
    systemVoltage: 700,
    sampleCurrent: 17,
    powerFactor: 0.94,
    efficiency: 94,
    estimatedMotorClass: "170–250 kW class",
    use: "Sporty EV reference",
    note: "Useful for performance EV comparison.",
    source: "Add official manufacturer reference",
  },
  {
    id: 16,
    name: "Kia EV9",
    category: "Battery Electric SUV",
    drive: "All-Wheel Drive",
    battery: "Large lithium-ion battery pack",
    systemVoltage: 700,
    sampleCurrent: 19,
    powerFactor: 0.94,
    efficiency: 94,
    estimatedMotorClass: "250–300 kW class",
    use: "Large family EV SUV reference",
    note: "Useful for bigger EV platform discussion.",
    source: "Add official manufacturer reference",
  },
  {
    id: 17,
    name: "BMW i4",
    category: "Battery Electric Gran Coupe",
    drive: "Rear-Wheel Drive",
    battery: "High-voltage battery pack",
    systemVoltage: 400,
    sampleCurrent: 17,
    powerFactor: 0.93,
    efficiency: 94,
    estimatedMotorClass: "210–250 kW class",
    use: "Premium EV sedan reference",
    note: "Good premium EV case for analysis.",
    source: "Add official manufacturer reference",
  },
  {
    id: 18,
    name: "BMW i5",
    category: "Battery Electric Executive Sedan",
    drive: "All-Wheel Drive",
    battery: "High-voltage battery pack",
    systemVoltage: 400,
    sampleCurrent: 18,
    powerFactor: 0.93,
    efficiency: 94,
    estimatedMotorClass: "250–300 kW class",
    use: "Executive EV sedan reference",
    note: "Useful for luxury sedan comparison.",
    source: "Add official manufacturer reference",
  },
  {
    id: 19,
    name: "BMW i7",
    category: "Battery Electric Luxury Sedan",
    drive: "All-Wheel Drive",
    battery: "High-voltage battery pack",
    systemVoltage: 400,
    sampleCurrent: 21,
    powerFactor: 0.93,
    efficiency: 94,
    estimatedMotorClass: "300–400 kW class",
    use: "Luxury EV sedan reference",
    note: "Good for high-end EV discussion.",
    source: "Add official manufacturer reference",
  },
  {
    id: 20,
    name: "BMW iX",
    category: "Battery Electric Luxury SUV",
    drive: "All-Wheel Drive",
    battery: "High-voltage battery pack",
    systemVoltage: 400,
    sampleCurrent: 20,
    powerFactor: 0.93,
    efficiency: 94,
    estimatedMotorClass: "240–320 kW class",
    use: "Large EV SUV with higher power demand",
    note: "Useful for larger EV system analysis.",
    source: "Add official manufacturer reference",
  },
  {
    id: 21,
    name: "Mercedes-Benz EQA",
    category: "Battery Electric Compact SUV",
    drive: "Front-Wheel Drive",
    battery: "High-voltage battery pack",
    systemVoltage: 400,
    sampleCurrent: 14,
    powerFactor: 0.92,
    efficiency: 93,
    estimatedMotorClass: "140–160 kW class",
    use: "Compact premium EV reference",
    note: "Good for entry premium EV SUV analysis.",
    source: "Add official manufacturer reference",
  },
  {
    id: 22,
    name: "Mercedes-Benz EQB",
    category: "Battery Electric SUV",
    drive: "All-Wheel Drive",
    battery: "High-voltage battery pack",
    systemVoltage: 400,
    sampleCurrent: 15,
    powerFactor: 0.92,
    efficiency: 93,
    estimatedMotorClass: "160–220 kW class",
    use: "Premium electric family SUV reference",
    note: "Useful for premium SUV comparison.",
    source: "Add official manufacturer reference",
  },
  {
    id: 23,
    name: "Mercedes-Benz EQE",
    category: "Battery Electric Executive Sedan",
    drive: "Rear-Wheel Drive",
    battery: "High-voltage battery pack",
    systemVoltage: 400,
    sampleCurrent: 18,
    powerFactor: 0.93,
    efficiency: 94,
    estimatedMotorClass: "180–250 kW class",
    use: "Executive EV comfort reference",
    note: "Good example of a premium electric sedan.",
    source: "Add official manufacturer reference",
  },
  {
    id: 24,
    name: "Mercedes-Benz EQS",
    category: "Battery Electric Luxury Sedan",
    drive: "All-Wheel Drive",
    battery: "High-voltage battery pack",
    systemVoltage: 400,
    sampleCurrent: 20,
    powerFactor: 0.93,
    efficiency: 94,
    estimatedMotorClass: "250–385 kW class",
    use: "Flagship luxury EV reference",
    note: "Useful for top-tier EV analysis.",
    source: "Add official manufacturer reference",
  },
  {
    id: 25,
    name: "Audi Q4 e-tron",
    category: "Battery Electric SUV",
    drive: "All-Wheel Drive",
    battery: "High-voltage battery pack",
    systemVoltage: 400,
    sampleCurrent: 16,
    powerFactor: 0.92,
    efficiency: 93,
    estimatedMotorClass: "150–220 kW class",
    use: "Premium EV SUV comparison",
    note: "Useful for premium SUV EV platforms.",
    source: "Add official manufacturer reference",
  },
  {
    id: 26,
    name: "Audi Q8 e-tron",
    category: "Battery Electric Luxury SUV",
    drive: "All-Wheel Drive",
    battery: "High-voltage battery pack",
    systemVoltage: 400,
    sampleCurrent: 19,
    powerFactor: 0.93,
    efficiency: 94,
    estimatedMotorClass: "250–300 kW class",
    use: "Large premium EV SUV reference",
    note: "Good for larger EV SUV case studies.",
    source: "Add official manufacturer reference",
  },
  {
    id: 27,
    name: "Audi e-tron GT",
    category: "Battery Electric Sports Sedan",
    drive: "All-Wheel Drive",
    battery: "Performance battery pack",
    systemVoltage: 700,
    sampleCurrent: 20,
    powerFactor: 0.95,
    efficiency: 94,
    estimatedMotorClass: "350–450 kW class",
    use: "Performance EV sedan reference",
    note: "Useful for sporty premium EV comparison.",
    source: "Add official manufacturer reference",
  },
  {
    id: 28,
    name: "Porsche Taycan",
    category: "Battery Electric Sports Sedan",
    drive: "All-Wheel Drive",
    battery: "High-performance battery pack",
    systemVoltage: 700,
    sampleCurrent: 20,
    powerFactor: 0.95,
    efficiency: 94,
    estimatedMotorClass: "300–500 kW class",
    use: "High-performance EV case study",
    note: "Strong example for advanced EV power discussion.",
    source: "Add official manufacturer reference",
  },
  {
    id: 29,
    name: "Porsche Macan Electric",
    category: "Battery Electric SUV",
    drive: "All-Wheel Drive",
    battery: "Performance battery pack",
    systemVoltage: 700,
    sampleCurrent: 19,
    powerFactor: 0.94,
    efficiency: 94,
    estimatedMotorClass: "250–350 kW class",
    use: "Premium sporty EV SUV reference",
    note: "Useful for performance SUV analysis.",
    source: "Add official manufacturer reference",
  },
  {
    id: 30,
    name: "Volvo EX30",
    category: "Battery Electric Compact SUV",
    drive: "Rear-Wheel Drive",
    battery: "Lithium-ion battery pack",
    systemVoltage: 400,
    sampleCurrent: 15,
    powerFactor: 0.92,
    efficiency: 93,
    estimatedMotorClass: "150–200 kW class",
    use: "Compact premium EV reference",
    note: "Modern compact EV for current market analysis.",
    source: "Add official manufacturer reference",
  },
  {
    id: 31,
    name: "Volvo EX40",
    category: "Battery Electric SUV",
    drive: "All-Wheel Drive",
    battery: "Lithium-ion battery pack",
    systemVoltage: 400,
    sampleCurrent: 17,
    powerFactor: 0.92,
    efficiency: 93,
    estimatedMotorClass: "180–300 kW class",
    use: "Premium EV SUV reference",
    note: "Useful for mid-size EV SUV comparison.",
    source: "Add official manufacturer reference",
  },
  {
    id: 32,
    name: "Volvo EC40",
    category: "Battery Electric Crossover Coupe",
    drive: "All-Wheel Drive",
    battery: "Lithium-ion battery pack",
    systemVoltage: 400,
    sampleCurrent: 17,
    powerFactor: 0.92,
    efficiency: 93,
    estimatedMotorClass: "180–300 kW class",
    use: "Stylish premium EV crossover reference",
    note: "Good for crossover EV comparison.",
    source: "Add official manufacturer reference",
  },
  {
    id: 33,
    name: "Polestar 2",
    category: "Battery Electric Fastback",
    drive: "All-Wheel Drive",
    battery: "Lithium-ion battery pack",
    systemVoltage: 400,
    sampleCurrent: 17,
    powerFactor: 0.93,
    efficiency: 94,
    estimatedMotorClass: "170–350 kW class",
    use: "Premium EV fastback reference",
    note: "Useful for sporty EV sedan comparisons.",
    source: "Add official manufacturer reference",
  },
  {
    id: 34,
    name: "Polestar 3",
    category: "Battery Electric SUV",
    drive: "All-Wheel Drive",
    battery: "High-voltage battery pack",
    systemVoltage: 400,
    sampleCurrent: 19,
    powerFactor: 0.93,
    efficiency: 94,
    estimatedMotorClass: "300–380 kW class",
    use: "Performance-oriented EV SUV reference",
    note: "Useful for premium high-power EV SUVs.",
    source: "Add official manufacturer reference",
  },
  {
    id: 35,
    name: "Polestar 4",
    category: "Battery Electric SUV Coupe",
    drive: "All-Wheel Drive",
    battery: "High-voltage battery pack",
    systemVoltage: 400,
    sampleCurrent: 18,
    powerFactor: 0.93,
    efficiency: 94,
    estimatedMotorClass: "200–400 kW class",
    use: "Modern performance EV crossover reference",
    note: "Good for sporty EV crossover discussion.",
    source: "Add official manufacturer reference",
  },
  {
    id: 36,
    name: "Nissan Leaf",
    category: "Battery Electric Hatchback",
    drive: "Front-Wheel Drive",
    battery: "Lithium-ion battery",
    systemVoltage: 350,
    sampleCurrent: 11,
    powerFactor: 0.90,
    efficiency: 92,
    estimatedMotorClass: "80–110 kW class",
    use: "Introductory EV learning model",
    note: "Simple and familiar EV model for beginner demos.",
    source: "Add official manufacturer reference",
  },
  {
    id: 37,
    name: "Chevrolet Bolt EV",
    category: "Battery Electric Hatchback",
    drive: "Front-Wheel Drive",
    battery: "Lithium-ion battery",
    systemVoltage: 350,
    sampleCurrent: 13,
    powerFactor: 0.91,
    efficiency: 93,
    estimatedMotorClass: "140–160 kW class",
    use: "Practical compact EV reference",
    note: "Good reference for practical EV performance.",
    source: "Add official manufacturer reference",
  },
  {
    id: 38,
    name: "Chevrolet Equinox EV",
    category: "Battery Electric SUV",
    drive: "Front-Wheel Drive",
    battery: "Ultium battery platform",
    systemVoltage: 400,
    sampleCurrent: 15,
    powerFactor: 0.92,
    efficiency: 93,
    estimatedMotorClass: "150–220 kW class",
    use: "Affordable EV SUV reference",
    note: "Useful for mainstream EV SUV comparison.",
    source: "Add official manufacturer reference",
  },
  {
    id: 39,
    name: "Chevrolet Blazer EV",
    category: "Battery Electric SUV",
    drive: "All-Wheel Drive",
    battery: "Ultium battery platform",
    systemVoltage: 400,
    sampleCurrent: 18,
    powerFactor: 0.93,
    efficiency: 94,
    estimatedMotorClass: "220–300 kW class",
    use: "Larger EV SUV reference",
    note: "Useful for comparing size and output in EV SUVs.",
    source: "Add official manufacturer reference",
  },
  {
    id: 40,
    name: "Ford Mustang Mach-E",
    category: "Battery Electric SUV",
    drive: "All-Wheel Drive",
    battery: "Lithium-ion battery pack",
    systemVoltage: 400,
    sampleCurrent: 18,
    powerFactor: 0.93,
    efficiency: 94,
    estimatedMotorClass: "200–370 kW class",
    use: "Performance EV SUV reference",
    note: "Popular EV SUV for sporty comparison.",
    source: "Add official manufacturer reference",
  },
  {
    id: 41,
    name: "Ford F-150 Lightning",
    category: "Battery Electric Pickup",
    drive: "All-Wheel Drive",
    battery: "Large lithium-ion battery pack",
    systemVoltage: 400,
    sampleCurrent: 22,
    powerFactor: 0.93,
    efficiency: 94,
    estimatedMotorClass: "330–430 kW class",
    use: "Electric pickup truck reference",
    note: "Useful for larger EV utility vehicle analysis.",
    source: "Add official manufacturer reference",
  },
  {
    id: 42,
    name: "Volkswagen ID.3",
    category: "Battery Electric Hatchback",
    drive: "Rear-Wheel Drive",
    battery: "MEB battery platform",
    systemVoltage: 400,
    sampleCurrent: 13,
    powerFactor: 0.92,
    efficiency: 93,
    estimatedMotorClass: "110–170 kW class",
    use: "Compact EV hatchback reference",
    note: "Useful for global compact EV comparison.",
    source: "Add official manufacturer reference",
  },
  {
    id: 43,
    name: "Volkswagen ID.4",
    category: "Battery Electric SUV",
    drive: "Rear-Wheel Drive",
    battery: "MEB battery platform",
    systemVoltage: 400,
    sampleCurrent: 15,
    powerFactor: 0.92,
    efficiency: 93,
    estimatedMotorClass: "150–220 kW class",
    use: "Mainstream EV SUV reference",
    note: "Good for family EV SUV analysis.",
    source: "Add official manufacturer reference",
  },
  {
    id: 44,
    name: "Volkswagen ID. Buzz",
    category: "Battery Electric Van",
    drive: "Rear-Wheel Drive",
    battery: "MEB battery platform",
    systemVoltage: 400,
    sampleCurrent: 16,
    powerFactor: 0.92,
    efficiency: 93,
    estimatedMotorClass: "150–210 kW class",
    use: "Electric MPV/van reference",
    note: "Useful for non-sedan EV body type discussion.",
    source: "Add official manufacturer reference",
  },
  {
    id: 45,
    name: "Lucid Air",
    category: "Battery Electric Luxury Sedan",
    drive: "All-Wheel Drive",
    battery: "High-voltage battery pack",
    systemVoltage: 900,
    sampleCurrent: 18,
    powerFactor: 0.95,
    efficiency: 94,
    estimatedMotorClass: "300–600 kW class",
    use: "High-end EV efficiency and performance reference",
    note: "Useful for high-voltage premium EV analysis.",
    source: "Add official manufacturer reference",
  },
  {
    id: 46,
    name: "Rivian R1T",
    category: "Battery Electric Pickup",
    drive: "All-Wheel Drive",
    battery: "Large battery pack",
    systemVoltage: 400,
    sampleCurrent: 23,
    powerFactor: 0.93,
    efficiency: 94,
    estimatedMotorClass: "300–600 kW class",
    use: "Electric pickup performance reference",
    note: "Useful for utility EV comparison.",
    source: "Add official manufacturer reference",
  },
  {
    id: 47,
    name: "Rivian R1S",
    category: "Battery Electric SUV",
    drive: "All-Wheel Drive",
    battery: "Large battery pack",
    systemVoltage: 400,
    sampleCurrent: 22,
    powerFactor: 0.93,
    efficiency: 94,
    estimatedMotorClass: "300–600 kW class",
    use: "Large EV SUV reference",
    note: "Useful for premium off-road EV discussion.",
    source: "Add official manufacturer reference",
  },
  {
    id: 48,
    name: "Lotus Eletre",
    category: "Battery Electric Performance SUV",
    drive: "All-Wheel Drive",
    battery: "Performance battery pack",
    systemVoltage: 800,
    sampleCurrent: 20,
    powerFactor: 0.95,
    efficiency: 94,
    estimatedMotorClass: "450–675 kW class",
    use: "High-performance EV SUV reference",
    note: "Good example of extreme-performance EV SUV.",
    source: "Add official manufacturer reference",
  },
  {
    id: 49,
    name: "Lotus Emeya",
    category: "Battery Electric Performance Sedan",
    drive: "All-Wheel Drive",
    battery: "Performance battery pack",
    systemVoltage: 800,
    sampleCurrent: 20,
    powerFactor: 0.95,
    efficiency: 94,
    estimatedMotorClass: "450–675 kW class",
    use: "High-performance EV sedan reference",
    note: "Useful for premium performance EV comparison.",
    source: "Add official manufacturer reference",
  },
  {
    id: 50,
    name: "Xpeng G6",
    category: "Battery Electric SUV",
    drive: "Rear-Wheel Drive",
    battery: "Lithium-ion battery pack",
    systemVoltage: 800,
    sampleCurrent: 16,
    powerFactor: 0.94,
    efficiency: 94,
    estimatedMotorClass: "190–220 kW class",
    use: "Modern EV SUV reference",
    note: "Useful for current-generation EV platform analysis.",
    source: "Add official manufacturer reference",
  },
];

function calculateVehicleOutput(vehicle) {
  const inputPower =
    vehicle.systemVoltage >= 300
      ? 1.732 * vehicle.systemVoltage * vehicle.sampleCurrent * vehicle.powerFactor
      : vehicle.systemVoltage * vehicle.sampleCurrent * vehicle.powerFactor;

  const outputPower = inputPower * (vehicle.efficiency / 100);

  return {
    inputW: inputPower,
    outputW: outputPower,
    outputKW: outputPower / 1000,
    outputHP: outputPower / 746,
  };
}

export default function MotorPowerProfessionalApp() {
  const [systemType, setSystemType] = useState("single");
  const [voltage, setVoltage] = useState("220");
  const [current, setCurrent] = useState("10");
  const [powerFactor, setPowerFactor] = useState("0.85");
  const [efficiency, setEfficiency] = useState("90");
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState(vehicleLibrary[0]);
  const [compareLeftId, setCompareLeftId] = useState(String(vehicleLibrary[0].id));
  const [compareRightId, setCompareRightId] = useState(String(vehicleLibrary[2].id));

  const parsedValues = useMemo(() => {
    return {
      voltage: parseFloat(voltage),
      current: parseFloat(current),
      powerFactor: parseFloat(powerFactor),
      efficiency: parseFloat(efficiency),
    };
  }, [voltage, current, powerFactor, efficiency]);

  const calculation = useMemo(() => {
    const V = Number.isFinite(parsedValues.voltage) ? parsedValues.voltage : 0;
    const I = Number.isFinite(parsedValues.current) ? parsedValues.current : 0;
    const pf = Number.isFinite(parsedValues.powerFactor)
      ? parsedValues.powerFactor
      : 0;
    const effPercent = Number.isFinite(parsedValues.efficiency)
      ? parsedValues.efficiency
      : 0;
    const eff = effPercent / 100;

    const inputPower =
      systemType === "single" ? V * I * pf : 1.732 * V * I * pf;

    const outputPower = inputPower * eff;

    return {
      inputW: inputPower,
      outputW: outputPower,
      outputKW: outputPower / 1000,
      outputHP: outputPower / 746,
      lossW: Math.max(inputPower - outputPower, 0),
      formula:
        systemType === "single"
          ? "P = V × I × PF"
          : "P = √3 × V × I × PF",
    };
  }, [parsedValues, systemType]);

  const selectedVehicleMetrics = useMemo(() => {
    return calculateVehicleOutput(selectedVehicle);
  }, [selectedVehicle]);

  const compareLeft = useMemo(() => {
    return vehicleLibrary.find((item) => String(item.id) === compareLeftId) ?? vehicleLibrary[0];
  }, [compareLeftId]);

  const compareRight = useMemo(() => {
    return vehicleLibrary.find((item) => String(item.id) === compareRightId) ?? vehicleLibrary[1];
  }, [compareRightId]);

  const compareLeftMetrics = useMemo(() => calculateVehicleOutput(compareLeft), [compareLeft]);
  const compareRightMetrics = useMemo(() => calculateVehicleOutput(compareRight), [compareRight]);

  const maxComparisonKW = Math.max(compareLeftMetrics.outputKW, compareRightMetrics.outputKW, 1);

  const handleCalculate = () => {
    const V = parsedValues.voltage;
    const I = parsedValues.current;
    const pf = parsedValues.powerFactor;
    const eff = parsedValues.efficiency;

    if (
      !Number.isFinite(V) ||
      !Number.isFinite(I) ||
      !Number.isFinite(pf) ||
      !Number.isFinite(eff)
    ) {
      setError("Please enter valid numeric values in all fields.");
      return;
    }

    if (V <= 0 || I <= 0) {
      setError("Voltage and current must be greater than 0.");
      return;
    }

    if (pf <= 0 || pf > 1) {
      setError("Power factor should be between 0 and 1.");
      return;
    }

    if (eff <= 0 || eff > 100) {
      setError("Efficiency should be between 0 and 100.");
      return;
    }

    setError("");

    const record = {
      id: Date.now(),
      time: new Date().toLocaleString(),
      systemType,
      voltage: V,
      current: I,
      powerFactor: pf,
      efficiency: eff,
      outputKW: calculation.outputKW,
      outputHP: calculation.outputHP,
      lossW: calculation.lossW,
    };

    setHistory((prev) => [record, ...prev].slice(0, 6));
  };

  const handleReset = () => {
    setVoltage("220");
    setCurrent("10");
    setPowerFactor("0.85");
    setEfficiency("90");
    setSystemType("single");
    setError("");
  };

  const applySample = (type) => {
    if (type === "single") {
      setSystemType("single");
      setVoltage("220");
      setCurrent("10");
      setPowerFactor("0.85");
      setEfficiency("90");
    } else {
      setSystemType("three");
      setVoltage("380");
      setCurrent("12");
      setPowerFactor("0.88");
      setEfficiency("92");
    }
    setError("");
  };

  const loadVehiclePreset = (vehicle) => {
    setSelectedVehicle(vehicle);
    const isThreePhase = vehicle.systemVoltage >= 300;
    setSystemType(isThreePhase ? "three" : "single");
    setVoltage(String(vehicle.systemVoltage));
    setCurrent(String(vehicle.sampleCurrent));
    setPowerFactor(String(vehicle.powerFactor));
    setEfficiency(String(vehicle.efficiency));
    setError("");
  };

 const handleExport = () => {
  const lines = [
    ["System Type", systemType === "single" ? "Single Phase" : "Three Phase"],
    ["Voltage (V)", voltage],
    ["Current (A)", current],
    ["Power Factor", powerFactor],
    ["Efficiency (%)", efficiency],
    ["Input Power (W)", calculation.inputW.toFixed(2)],
    ["Output Power (W)", calculation.outputW.toFixed(2)],
    ["Output Power (kW)", calculation.outputKW.toFixed(2)],
    ["Output Power (HP)", calculation.outputHP.toFixed(2)],
    ["Power Loss (W)", calculation.lossW.toFixed(2)],
  ];

  const csv = lines.map((row) => row.join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "motor-power-result.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_28%),linear-gradient(to_bottom,#020617,#0f172a)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-sky-400/20 bg-sky-400/10 p-2.5 text-sky-300">
              <Bolt className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-sky-300/80">
                Professional Prototype
              </p>
              <h1 className="text-lg font-semibold">Motor Power Analysis System</h1>
            </div>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            {[
              ["Overview", "overview"],
              ["Calculator", "calculator"],
              ["References", "references"],
              ["Comparison", "comparison"],
              ["Analysis", "analysis"],
              ["History", "history"],
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/75 transition hover:border-sky-400/40 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-10 md:pt-14">
        <section id="overview" className="grid items-center gap-8 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-300">
              <Sparkles className="h-4 w-4" /> Automotive Engineering Interface
            </div>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              A bigger and smarter
              <span className="text-sky-400"> motor power analysis platform</span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              This version is more than a calculator. It combines motor power estimation,
              vehicle reference data, model comparison, performance analysis, recent history,
              and export tools so the project looks closer to a real automotive web product.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#calculator"
                className="rounded-2xl bg-sky-500 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Open Calculator
              </a>
              <a
                href="#comparison"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Compare Vehicles
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <MiniStat title="Tool type" value="Analysis system" icon={BarChart3} />
              <MiniStat title="Vehicle data" value={`${vehicleLibrary.length} models`} icon={Car} />
              <MiniStat title="Export result" value="CSV ready" icon={Download} />
              <MiniStat title="Validation" value="Safer input" icon={ShieldCheck} />
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-sky-950/30">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-slate-400">System preview</p>
                  <h3 className="text-2xl font-semibold">Calculation Summary</h3>
                </div>
                <div className="rounded-2xl bg-sky-400/10 p-3 text-sky-300">
                  <Calculator className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <SummaryBox label="System" value={systemType === "single" ? "Single Phase" : "Three Phase"} />
                <SummaryBox label="Formula" value={calculation.formula} />
                <SummaryBox label="Voltage" value={`${Number.isFinite(parsedValues.voltage) ? parsedValues.voltage : 0} V`} />
                <SummaryBox label="Current" value={`${Number.isFinite(parsedValues.current) ? parsedValues.current : 0} A`} />
                <SummaryBox label="Power Factor" value={`${Number.isFinite(parsedValues.powerFactor) ? parsedValues.powerFactor : 0}`} />
                <SummaryBox label="Efficiency" value={`${Number.isFinite(parsedValues.efficiency) ? parsedValues.efficiency : 0}%`} />
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <ResultHighlight label="Input Power" value={`${calculation.inputW.toFixed(2)} W`} />
                <ResultHighlight label="Output Power" value={`${calculation.outputKW.toFixed(2)} kW`} />
                <ResultHighlight label="Horsepower" value={`${calculation.outputHP.toFixed(2)} HP`} />
              </div>
            </div>
          </div>
        </section>

        <section id="calculator" className="mt-20 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-sky-400/10 p-3 text-sky-300">
                <Settings className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-300/80">
                  Input Panel
                </p>
                <h3 className="text-3xl font-semibold">Enter system values</h3>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                onClick={() => setSystemType("single")}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  systemType === "single"
                    ? "bg-sky-500 text-slate-950"
                    : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Single Phase
              </button>
              <button
                onClick={() => setSystemType("three")}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  systemType === "three"
                    ? "bg-sky-500 text-slate-950"
                    : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Three Phase
              </button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <InputField label="Voltage (V)" value={voltage} onChange={setVoltage} placeholder="e.g. 220" />
              <InputField label="Current (A)" value={current} onChange={setCurrent} placeholder="e.g. 10" />
              <InputField label="Power Factor" value={powerFactor} onChange={setPowerFactor} placeholder="0 to 1" />
              <InputField label="Efficiency (%)" value={efficiency} onChange={setEfficiency} placeholder="0 to 100" />
            </div>

            {error ? (
              <div className="mt-5 rounded-2xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
                {error}
              </div>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={handleCalculate}
                className="rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Calculate
              </button>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <RefreshCcw className="h-4 w-4" /> Reset
              </button>
              <button
                onClick={handleExport}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Download className="h-4 w-4" /> Export CSV
              </button>
            </div>

            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-sm font-medium text-slate-300">Quick sample presets</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <button
                  onClick={() => applySample("single")}
                  className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-2 text-sm text-white transition hover:bg-slate-800"
                >
                  Sample: Single Phase
                </button>
                <button
                  onClick={() => applySample("three")}
                  className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-2 text-sm text-white transition hover:bg-slate-800"
                >
                  Sample: Three Phase
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-sky-400/10 p-3 text-sky-300">
                <Gauge className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-300/80">
                  Output Panel
                </p>
                <h3 className="text-3xl font-semibold">Calculated results</h3>
              </div>
            </div>

            <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <MetricCard label="System Type" value={systemType === "single" ? "Single Phase" : "Three Phase"} />
                <MetricCard label="Applied Formula" value={calculation.formula} />
                <MetricCard label="Input Power" value={`${calculation.inputW.toFixed(2)} W`} />
                <MetricCard label="Output Power" value={`${calculation.outputW.toFixed(2)} W`} />
                <MetricCard label="Power in kW" value={`${calculation.outputKW.toFixed(2)} kW`} />
                <MetricCard label="Power in HP" value={`${calculation.outputHP.toFixed(2)} HP`} />
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <FeatureStrip
                icon={BarChart3}
                title="Power Loss"
                value={`${calculation.lossW.toFixed(2)} W`}
                text="Difference between input power and useful output."
              />
              <FeatureStrip
                icon={ShieldCheck}
                title="Efficiency Rate"
                value={`${Number.isFinite(parsedValues.efficiency) ? parsedValues.efficiency : 0}%`}
                text="Useful for quick system health estimation."
              />
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-sky-400/20 bg-sky-400/10 p-5">
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-5 w-5 text-sky-300" />
                <div>
                  <p className="font-semibold text-white">Professional note</p>
                  <p className="mt-1 text-sm leading-7 text-slate-200/90">
                    This tool is suitable for educational use, project demonstration, and basic motor power checking. For industrial deployment, the next step would be adding live data, advanced motor parameters, authentication, and database storage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="references" className="mt-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">
                Vehicle reference library
              </p>
              <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
                Model-based technical references
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-300">
                This section makes the project look larger and more practical by storing model-based reference data. Users can also load each vehicle preset directly into the calculator.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-400/20 bg-sky-400/10 px-4 py-3 text-sm text-sky-100">
              Replace source notes with official manufacturer or academic references.
            </div>
          </div>

          <div className="mt-8 grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-1">
              {vehicleLibrary.map((vehicle) => (
                <button
                  key={vehicle.id}
                  onClick={() => loadVehiclePreset(vehicle)}
                  className={`rounded-[2rem] border p-6 text-left transition ${
                    selectedVehicle.id === vehicle.id
                      ? "border-sky-400/40 bg-sky-400/10"
                      : "border-white/10 bg-white/5 hover:border-sky-400/30 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300">
                        <Car className="h-3.5 w-3.5" /> {vehicle.category}
                      </div>
                      <h4 className="mt-4 text-2xl font-semibold text-white">{vehicle.name}</h4>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{vehicle.note}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs text-slate-300">
                      Load preset
                    </span>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <HistoryCell label="System voltage" value={`${vehicle.systemVoltage} V`} />
                    <HistoryCell label="Motor class" value={vehicle.estimatedMotorClass} />
                    <HistoryCell label="Sample current" value={`${vehicle.sampleCurrent} A`} />
                    <HistoryCell label="Efficiency" value={`${vehicle.efficiency}%`} />
                  </div>
                </button>
              ))}
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-sky-400/10 p-3 text-sky-300">
                  <Bookmark className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-sky-300/80">
                    Selected model details
                  </p>
                  <h3 className="text-3xl font-semibold">{selectedVehicle.name}</h3>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <MetricCard label="Category" value={selectedVehicle.category} />
                <MetricCard label="Drive" value={selectedVehicle.drive} />
                <MetricCard label="Battery system" value={selectedVehicle.battery} />
                <MetricCard label="Reference voltage" value={`${selectedVehicle.systemVoltage} V`} />
                <MetricCard label="Sample current" value={`${selectedVehicle.sampleCurrent} A`} />
                <MetricCard label="Power factor" value={String(selectedVehicle.powerFactor)} />
                <MetricCard label="Efficiency" value={`${selectedVehicle.efficiency}%`} />
                <MetricCard label="Estimated motor class" value={selectedVehicle.estimatedMotorClass} />
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Typical use</p>
                <p className="mt-2 leading-7 text-slate-200">{selectedVehicle.use}</p>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Estimated output</p>
                <p className="mt-2 text-2xl font-semibold text-white">{selectedVehicleMetrics.outputKW.toFixed(2)} kW</p>
                <p className="mt-1 text-sm leading-7 text-slate-300">Calculated from the reference preset for this vehicle model.</p>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Source note</p>
                <p className="mt-2 leading-7 text-slate-200">{selectedVehicle.source}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="comparison" className="mt-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Vehicle comparison</p>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">Compare two models side by side</h3>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Adding comparison makes the project look more advanced because it turns simple calculation into decision support and technical evaluation.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-sky-400/10 p-3 text-sky-300">
                  <ArrowRightLeft className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-sky-300/80">Select models</p>
                  <h3 className="text-3xl font-semibold">Comparison setup</h3>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <SelectField
                  label="Left model"
                  value={compareLeftId}
                  onChange={setCompareLeftId}
                  options={vehicleLibrary}
                />
                <SelectField
                  label="Right model"
                  value={compareRightId}
                  onChange={setCompareRightId}
                  options={vehicleLibrary}
                />
              </div>

              <div className="mt-6 grid gap-4">
                <ComparisonCard title={compareLeft.name} subtitle={compareLeft.category} metrics={compareLeftMetrics} vehicle={compareLeft} />
                <ComparisonCard title={compareRight.name} subtitle={compareRight.category} metrics={compareRightMetrics} vehicle={compareRight} />
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-sky-400/10 p-3 text-sky-300">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-sky-300/80">Comparison insight</p>
                  <h3 className="text-3xl font-semibold">Output power view</h3>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <PowerBar
                  label={compareLeft.name}
                  value={compareLeftMetrics.outputKW}
                  max={maxComparisonKW}
                />
                <PowerBar
                  label={compareRight.name}
                  value={compareRightMetrics.outputKW}
                  max={maxComparisonKW}
                />
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <MetricCard
                  label="Higher estimated output"
                  value={compareLeftMetrics.outputKW >= compareRightMetrics.outputKW ? compareLeft.name : compareRight.name}
                />
                <MetricCard
                  label="Higher efficiency"
                  value={compareLeft.efficiency >= compareRight.efficiency ? compareLeft.name : compareRight.name}
                />
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Interpretation</p>
                <p className="mt-2 leading-7 text-slate-200">
                  This section helps explain how different reference values change the estimated motor output. It makes the website feel more like an engineering evaluation dashboard instead of a one-page calculator.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="analysis" className="mt-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Analysis dashboard</p>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">Performance and project scope</h3>
            <p className="mt-4 text-base leading-8 text-slate-300">
              This layer makes the project feel bigger by adding decision-support style panels, use cases, and scope notes.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-5 md:grid-cols-2">
              <DashboardCard
                icon={Gauge}
                title="Current output"
                text="Estimated useful output from the latest input values."
                value={`${calculation.outputKW.toFixed(2)} kW`}
              />
              <DashboardCard
                icon={Zap}
                title="Power loss"
                text="Difference between input and output power."
                value={`${calculation.lossW.toFixed(2)} W`}
              />
              <DashboardCard
                icon={Wrench}
                title="Use case"
                text="Suitable for classroom demonstration and early-stage estimation."
                value="Education / Prototype"
              />
              <DashboardCard
                icon={Landmark}
                title="System scope"
                text="Reference-based analysis for hybrid and electric vehicle context."
                value="Automotive Focus"
              />
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-sky-400/10 p-3 text-sky-300">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-sky-300/80">Use cases and limits</p>
                  <h3 className="text-3xl font-semibold">Project framing</h3>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  "Use in presentations to explain electrical power equations for motors.",
                  "Use in classroom labs to show the effect of voltage, current, power factor, and efficiency.",
                  "Use as a lightweight prototype for an automotive analysis dashboard.",
                ].map((item, index) => (
                  <BulletCard key={index} icon={CheckCircle2} text={item} />
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-amber-400/20 bg-amber-400/10 p-5">
                <div className="flex items-start gap-3">
                  <CircleAlert className="mt-0.5 h-5 w-5 text-amber-300" />
                  <div>
                    <p className="font-semibold text-white">Limitation</p>
                    <p className="mt-1 text-sm leading-7 text-slate-100/90">
                      This website provides estimated values based on user input or stored reference presets. It does not replace manufacturer-certified performance data or industrial design calculations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mt-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Feature overview</p>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">Why this version feels more complete</h3>
            <p className="mt-4 text-base leading-8 text-slate-300">
              It expands the project from a basic calculator into a broader platform with references, comparison, analysis, export, and project framing.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <FeatureCard icon={Calculator} title="Structured calculator" text="A cleaner form layout makes the tool easier to use in a real workflow." />
            <FeatureCard icon={Car} title="Vehicle reference library" text="Model-based technical information makes the project look more like a product system." />
            <FeatureCard icon={ArrowRightLeft} title="Comparison module" text="Users can compare two vehicle presets side by side for clearer technical discussion." />
            <FeatureCard icon={FileText} title="History and export" text="Recent calculations can be reviewed on screen and exported for reporting." />
          </div>
        </section>

        <section id="history" className="mt-20 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">How it works</p>
            <h3 className="mt-3 text-3xl font-semibold">Simple operating flow</h3>

            <div className="mt-6 space-y-4">
              {[
                "Choose the system type or load a preset from the vehicle reference library.",
                "Enter voltage, current, power factor, and efficiency.",
                "Click calculate to view the motor power result instantly.",
                "Use comparison, analysis, history, and export for a fuller presentation.",
              ].map((item, index) => (
                <div key={index} className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500 font-semibold text-slate-950">
                    {index + 1}
                  </div>
                  <p className="leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Recent history</p>
                <h3 className="mt-3 text-3xl font-semibold">Latest calculations</h3>
              </div>
              <div className="rounded-2xl bg-sky-400/10 p-3 text-sky-300">
                <Users className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {history.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-white/10 bg-slate-900/60 p-6 text-sm leading-7 text-slate-400">
                  No calculations yet. Click <span className="font-semibold text-slate-200">Calculate</span> to add the latest result here.
                </div>
              ) : (
                history.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-semibold text-white">
                        {item.systemType === "single" ? "Single Phase" : "Three Phase"}
                      </p>
                      <span className="text-xs text-slate-400">{item.time}</span>
                    </div>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      <HistoryCell label="Voltage" value={`${item.voltage} V`} />
                      <HistoryCell label="Current" value={`${item.current} A`} />
                      <HistoryCell label="Power Factor" value={`${item.powerFactor}`} />
                      <HistoryCell label="Efficiency" value={`${item.efficiency}%`} />
                      <HistoryCell label="Output" value={`${item.outputKW.toFixed(2)} kW`} />
                      <HistoryCell label="Horsepower" value={`${item.outputHP.toFixed(2)} HP`} />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function MiniStat({ title, value, icon: Icon }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-4 text-sm text-slate-400">{title}</p>
      <p className="mt-1 text-lg font-semibold">{value}</p>
    </div>
  );
}

function SummaryBox({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-base font-semibold text-white">{value}</p>
    </div>
  );
}

function ResultHighlight({ label, value }) {
  return (
    <div className="rounded-2xl border border-sky-400/20 bg-sky-400/10 p-4">
      <p className="text-sm text-sky-200/80">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}

function InputField({ label, value, onChange, placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-slate-300">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-12 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/50"
      />
    </div>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-slate-300">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 text-white outline-none transition focus:border-sky-400/50"
      >
        {options.map((item) => (
          <option key={item.id} value={String(item.id)}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

function MetricCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-sky-400/30">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
        <Icon className="h-6 w-6" />
      </div>
      <h4 className="mt-5 text-xl font-semibold">{title}</h4>
      <p className="mt-3 leading-7 text-slate-300">{text}</p>
    </div>
  );
}

function HistoryCell({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-medium text-white">{value}</p>
    </div>
  );
}

function FeatureStrip({ icon: Icon, title, value, text }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <p className="text-lg font-semibold text-white">{value}</p>
        </div>
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
    </div>
  );
}

function ComparisonCard({ title, subtitle, metrics, vehicle }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5">
      <p className="text-sm uppercase tracking-[0.25em] text-sky-300/80">{subtitle}</p>
      <h4 className="mt-2 text-2xl font-semibold text-white">{title}</h4>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <HistoryCell label="Voltage" value={`${vehicle.systemVoltage} V`} />
        <HistoryCell label="Current" value={`${vehicle.sampleCurrent} A`} />
        <HistoryCell label="Power factor" value={String(vehicle.powerFactor)} />
        <HistoryCell label="Efficiency" value={`${vehicle.efficiency}%`} />
        <HistoryCell label="Output" value={`${metrics.outputKW.toFixed(2)} kW`} />
        <HistoryCell label="Horsepower" value={`${metrics.outputHP.toFixed(2)} HP`} />
      </div>
    </div>
  );
}

function PowerBar({ label, value, max }) {
  const width = `${(value / max) * 100}%`;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="font-medium text-white">{label}</p>
        <p className="text-sm text-slate-300">{value.toFixed(2)} kW</p>
      </div>
      <div className="h-4 overflow-hidden rounded-full bg-slate-800">
        <div className="h-full rounded-full bg-sky-400" style={{ width }} />
      </div>
    </div>
  );
}

function DashboardCard({ icon: Icon, title, text, value }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
        <Icon className="h-6 w-6" />
      </div>
      <h4 className="mt-5 text-xl font-semibold text-white">{title}</h4>
      <p className="mt-2 text-2xl font-semibold text-sky-300">{value}</p>
      <p className="mt-3 leading-7 text-slate-300">{text}</p>
    </div>
  );
}

function BulletCard({ icon: Icon, text }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
      <Icon className="mt-0.5 h-5 w-5 text-sky-300" />
      <p className="leading-7 text-slate-200">{text}</p>
    </div>
  );
}
