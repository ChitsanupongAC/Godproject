import tkinter as tk
from tkinter import ttk
from PIL import Image, ImageTk

# ข้อมูลรถแต่ละรุ่น
cars = {
    "Tesla Model 3": {
        "Brand": "Tesla",
        "Type": "EV",
        "Battery": "60 kWh",
        "Voltage": "350 V",
        "Max Power": "208 kW",
        "Top Speed": "201 km/h"
    },
    "Tesla Model Y": {
        "Brand": "Tesla",
        "Type": "EV",
        "Battery": "75 kWh",
        "Voltage": "400 V",
        "Max Power": "255 kW",
        "Top Speed": "217 km/h"
    },
    "Tesla Model S": {
        "Brand": "Tesla",
        "Type": "EV",
        "Battery": "100 kWh",
        "Voltage": "400 V",
        "Max Power": "500 kW",
        "Top Speed": "250 km/h"
    },
    "Tesla Model X": {
        "Brand": "Tesla",
        "Type": "EV",
        "Battery": "100 kWh",
        "Voltage": "400 V",
        "Max Power": "500 kW",
        "Top Speed": "250 km/h"
    },
    "BYD Dolphin": {
        "Brand": "BYD",
        "Type": "EV",
        "Battery": "44.9 kWh",
        "Voltage": "400 V",
        "Max Power": "70 kW",
        "Top Speed": "160 km/h"
    },
    "BYD Atto 3": {
        "Brand": "BYD",
        "Type": "EV",
        "Battery": "60.5 kWh",
        "Voltage": "400 V",
        "Max Power": "150 kW",
        "Top Speed": "160 km/h"
    },
    "BYD Seal": {
        "Brand": "BYD",
        "Type": "EV",
        "Battery": "82.5 kWh",
        "Voltage": "400 V",
        "Max Power": "230 kW",
        "Top Speed": "180 km/h"
    },
    "BYD Han EV": {
        "Brand": "BYD",
        "Type": "EV",
        "Battery": "85.4 kWh",
        "Voltage": "400 V",
        "Max Power": "380 kW",
        "Top Speed": "185 km/h"
    },
    "BYD Tang EV": {
        "Brand": "BYD",
        "Type": "EV",
        "Battery": "86.4 kWh",
        "Voltage": "400 V",
        "Max Power": "380 kW",
        "Top Speed": "180 km/h"
    },
    "MG4 EV": {
        "Brand": "MG",
        "Type": "EV",
        "Battery": "51 kWh",
        "Voltage": "400 V",
        "Max Power": "125 kW",
        "Top Speed": "160 km/h"
    },
    "MG ZS EV": {
        "Brand": "MG",
        "Type": "EV",
        "Battery": "51 kWh",
        "Voltage": "400 V",
        "Max Power": "130 kW",
        "Top Speed": "175 km/h"
    },
    "MG Marvel R": {
        "Brand": "MG",
        "Type": "EV",
        "Battery": "70 kWh",
        "Voltage": "400 V",
        "Max Power": "212 kW",
        "Top Speed": "200 km/h"
    },
    "Nissan Leaf": {
        "Brand": "Nissan",
        "Type": "EV",
        "Battery": "40 kWh",
        "Voltage": "350 V",
        "Max Power": "110 kW",
        "Top Speed": "144 km/h"
    },
    "Nissan Ariya": {
        "Brand": "Nissan",
        "Type": "EV",
        "Battery": "87 kWh",
        "Voltage": "400 V",
        "Max Power": "178 kW",
        "Top Speed": "160 km/h"
    },
    "ORA Good Cat": {
        "Brand": "GWM",
        "Type": "EV",
        "Battery": "47.8 kWh",
        "Voltage": "400 V",
        "Max Power": "105 kW",
        "Top Speed": "152 km/h"
    },
    "ORA 07": {
        "Brand": "GWM",
        "Type": "EV",
        "Battery": "83.5 kWh",
        "Voltage": "400 V",
        "Max Power": "150 kW",
        "Top Speed": "180 km/h"
    },
    "Hyundai Kona Electric": {
        "Brand": "Hyundai",
        "Type": "EV",
        "Battery": "64.8 kWh",
        "Voltage": "400 V",
        "Max Power": "150 kW",
        "Top Speed": "172 km/h"
    },
    "Hyundai Ioniq 5": {
        "Brand": "Hyundai",
        "Type": "EV",
        "Battery": "77.4 kWh",
        "Voltage": "800 V",
        "Max Power": "239 kW",
        "Top Speed": "185 km/h"
    },
    "Hyundai Ioniq 6": {
        "Brand": "Hyundai",
        "Type": "EV",
        "Battery": "77.4 kWh",
        "Voltage": "800 V",
        "Max Power": "239 kW",
        "Top Speed": "185 km/h"
    },
    "Kia EV6": {
        "Brand": "Kia",
        "Type": "EV",
        "Battery": "77.4 kWh",
        "Voltage": "800 V",
        "Max Power": "239 kW",
        "Top Speed": "188 km/h"
    },
    "Kia Niro EV": {
        "Brand": "Kia",
        "Type": "EV",
        "Battery": "64.8 kWh",
        "Voltage": "400 V",
        "Max Power": "150 kW",
        "Top Speed": "167 km/h"
    },
    "Kia Soul EV": {
        "Brand": "Kia",
        "Type": "EV",
        "Battery": "64 kWh",
        "Voltage": "356 V",
        "Max Power": "150 kW",
        "Top Speed": "167 km/h"
    },
    "BMW i3": {
        "Brand": "BMW",
        "Type": "EV",
        "Battery": "42.2 kWh",
        "Voltage": "360 V",
        "Max Power": "125 kW",
        "Top Speed": "150 km/h"
    },
    "BMW i4": {
        "Brand": "BMW",
        "Type": "EV",
        "Battery": "83.9 kWh",
        "Voltage": "400 V",
        "Max Power": "250 kW",
        "Top Speed": "190 km/h"
    },
    "BMW iX": {
        "Brand": "BMW",
        "Type": "EV",
        "Battery": "111.5 kWh",
        "Voltage": "400 V",
        "Max Power": "385 kW",
        "Top Speed": "200 km/h"
    },
    "BMW iX1": {
        "Brand": "BMW",
        "Type": "EV",
        "Battery": "64.7 kWh",
        "Voltage": "400 V",
        "Max Power": "230 kW",
        "Top Speed": "180 km/h"
    },
    "Mercedes-Benz EQA": {
        "Brand": "Mercedes-Benz",
        "Type": "EV",
        "Battery": "66.5 kWh",
        "Voltage": "400 V",
        "Max Power": "140 kW",
        "Top Speed": "160 km/h"
    },
    "Mercedes-Benz EQB": {
        "Brand": "Mercedes-Benz",
        "Type": "EV",
        "Battery": "66.5 kWh",
        "Voltage": "400 V",
        "Max Power": "168 kW",
        "Top Speed": "160 km/h"
    },
    "Mercedes-Benz EQE": {
        "Brand": "Mercedes-Benz",
        "Type": "EV",
        "Battery": "90.6 kWh",
        "Voltage": "400 V",
        "Max Power": "215 kW",
        "Top Speed": "210 km/h"
    },
    "Mercedes-Benz EQS": {
        "Brand": "Mercedes-Benz",
        "Type": "EV",
        "Battery": "107.8 kWh",
        "Voltage": "400 V",
        "Max Power": "265 kW",
        "Top Speed": "210 km/h"
    },
    "Audi Q4 e-tron": {
        "Brand": "Audi",
        "Type": "EV",
        "Battery": "82 kWh",
        "Voltage": "400 V",
        "Max Power": "220 kW",
        "Top Speed": "180 km/h"
    },
    "Audi e-tron GT": {
        "Brand": "Audi",
        "Type": "EV",
        "Battery": "93.4 kWh",
        "Voltage": "800 V",
        "Max Power": "350 kW",
        "Top Speed": "245 km/h"
    },
    "Audi Q8 e-tron": {
        "Brand": "Audi",
        "Type": "EV",
        "Battery": "106 kWh",
        "Voltage": "400 V",
        "Max Power": "300 kW",
        "Top Speed": "200 km/h"
    },
    "Volkswagen ID.3": {
        "Brand": "Volkswagen",
        "Type": "EV",
        "Battery": "58 kWh",
        "Voltage": "400 V",
        "Max Power": "150 kW",
        "Top Speed": "160 km/h"
    },
    "Volkswagen ID.4": {
        "Brand": "Volkswagen",
        "Type": "EV",
        "Battery": "77 kWh",
        "Voltage": "400 V",
        "Max Power": "150 kW",
        "Top Speed": "160 km/h"
    },
    "Volkswagen ID.5": {
        "Brand": "Volkswagen",
        "Type": "EV",
        "Battery": "77 kWh",
        "Voltage": "400 V",
        "Max Power": "150 kW",
        "Top Speed": "180 km/h"
    },
    "Volvo EX30": {
        "Brand": "Volvo",
        "Type": "EV",
        "Battery": "64 kWh",
        "Voltage": "400 V",
        "Max Power": "200 kW",
        "Top Speed": "180 km/h"
    },
    "Volvo XC40 Recharge": {
        "Brand": "Volvo",
        "Type": "EV",
        "Battery": "78 kWh",
        "Voltage": "400 V",
        "Max Power": "300 kW",
        "Top Speed": "180 km/h"
    },
    "Volvo C40 Recharge": {
        "Brand": "Volvo",
        "Type": "EV",
        "Battery": "78 kWh",
        "Voltage": "400 V",
        "Max Power": "300 kW",
        "Top Speed": "180 km/h"
    },
    "Polestar 2": {
        "Brand": "Polestar",
        "Type": "EV",
        "Battery": "78 kWh",
        "Voltage": "400 V",
        "Max Power": "220 kW",
        "Top Speed": "205 km/h"
    },
    "Porsche Taycan": {
        "Brand": "Porsche",
        "Type": "EV",
        "Battery": "93.4 kWh",
        "Voltage": "800 V",
        "Max Power": "300 kW",
        "Top Speed": "230 km/h"
    },
    "Porsche Macan Electric": {
        "Brand": "Porsche",
        "Type": "EV",
        "Battery": "100 kWh",
        "Voltage": "800 V",
        "Max Power": "300 kW",
        "Top Speed": "220 km/h"
    },
    "Ford Mustang Mach-E": {
        "Brand": "Ford",
        "Type": "EV",
        "Battery": "91 kWh",
        "Voltage": "400 V",
        "Max Power": "258 kW",
        "Top Speed": "180 km/h"
    },
    "Ford F-150 Lightning": {
        "Brand": "Ford",
        "Type": "EV",
        "Battery": "131 kWh",
        "Voltage": "400 V",
        "Max Power": "337 kW",
        "Top Speed": "180 km/h"
    },
    "Chevrolet Bolt EV": {
        "Brand": "Chevrolet",
        "Type": "EV",
        "Battery": "65 kWh",
        "Voltage": "400 V",
        "Max Power": "150 kW",
        "Top Speed": "150 km/h"
    },
    "Chevrolet Bolt EUV": {
        "Brand": "Chevrolet",
        "Type": "EV",
        "Battery": "65 kWh",
        "Voltage": "400 V",
        "Max Power": "150 kW",
        "Top Speed": "150 km/h"
    },
    "Peugeot e-208": {
        "Brand": "Peugeot",
        "Type": "EV",
        "Battery": "50 kWh",
        "Voltage": "400 V",
        "Max Power": "100 kW",
        "Top Speed": "150 km/h"
    },
    "Peugeot e-2008": {
        "Brand": "Peugeot",
        "Type": "EV",
        "Battery": "50 kWh",
        "Voltage": "400 V",
        "Max Power": "100 kW",
        "Top Speed": "150 km/h"
    },
    "Renault Zoe": {
        "Brand": "Renault",
        "Type": "EV",
        "Battery": "52 kWh",
        "Voltage": "400 V",
        "Max Power": "100 kW",
        "Top Speed": "140 km/h"
    },
    "Renault Megane E-Tech": {
        "Brand": "Renault",
        "Type": "EV",
        "Battery": "60 kWh",
        "Voltage": "400 V",
        "Max Power": "160 kW",
        "Top Speed": "160 km/h"
    },
    "Mini Electric": {
        "Brand": "Mini",
        "Type": "EV",
        "Battery": "32.6 kWh",
        "Voltage": "400 V",
        "Max Power": "135 kW",
        "Top Speed": "150 km/h"
    },
    "Fiat 500e": {
        "Brand": "Fiat",
        "Type": "EV",
        "Battery": "42 kWh",
        "Voltage": "400 V",
        "Max Power": "87 kW",
        "Top Speed": "150 km/h"
    },
    "XPeng P7": {
        "Brand": "XPeng",
        "Type": "EV",
        "Battery": "82.7 kWh",
        "Voltage": "400 V",
        "Max Power": "196 kW",
        "Top Speed": "200 km/h"
    },
    "XPeng G9": {
        "Brand": "XPeng",
        "Type": "EV",
        "Battery": "98 kWh",
        "Voltage": "800 V",
        "Max Power": "230 kW",
        "Top Speed": "200 km/h"
    },
    "Zeekr 001": {
        "Brand": "Zeekr",
        "Type": "EV",
        "Battery": "100 kWh",
        "Voltage": "800 V",
        "Max Power": "400 kW",
        "Top Speed": "200 km/h"
    }
}


def show_car_info(event=None):
    selected_car = car_combo.get()
    if selected_car in cars:
        info = cars[selected_car]
        car_info_label.config(
            text=f"Brand: {info['Brand']}\n"
                 f"Type: {info['Type']}\n"
                 f"Battery: {info['Battery']}\n"
                 f"Voltage: {info['Voltage']}\n"
                 f"Max Power: {info['Max Power']}\n"
                 f"Top Speed: {info['Top Speed']}"
        )

window = tk.Tk()
window.title("Motor Power Calculation")
window.geometry("800x600")

# โหลดรูปพื้นหลัง
image = Image.open("BG.PNG")
image = image.resize((800, 600))
bg_image = ImageTk.PhotoImage(image)

bg_label = tk.Label(window, image=bg_image)
bg_label.place(x=0, y=0, relwidth=1, relheight=1)

# หัวข้อ
title_label = tk.Label(
    window,
    text="Motor Power Calculation",
    font=("Arial", 20, "bold"),
    bg="white"
)
title_label.pack(pady=15)

# เลือกรถ
car_title = tk.Label(
    window,
    text="Select Car Model:",
    font=("Arial", 12, "bold"),
    bg="white"
)
car_title.pack()

car_combo = ttk.Combobox(window, values=list(cars.keys()), font=("Arial", 12), width=25)
car_combo.pack(pady=5)
car_combo.bind("<<ComboboxSelected>>", show_car_info)

show_button = tk.Button(
    window,
    text="Show Car Info",
    font=("Arial", 11),
    command=show_car_info
)
show_button.pack(pady=5)

# แสดงข้อมูลรถ
car_info_label = tk.Label(
    window,
    text="Car information will appear here.",
    font=("Arial", 11),
    bg="white",
    justify="left",
    width=30,
    height=7,
    anchor="nw"
)
car_info_label.pack(pady=10)

# ช่องกรอก Voltage
voltage_label = tk.Label(
    window,
    text="Enter Voltage (V):",
    font=("Arial", 12),
    bg="white"
)
voltage_label.pack()

entry_voltage = tk.Entry(window, font=("Arial", 12), width=20)
entry_voltage.pack(pady=5)

# ช่องกรอก Current
current_label = tk.Label(
    window,
    text="Enter Current (A):",
    font=("Arial", 12),
    bg="white"
)
current_label.pack()

entry_current = tk.Entry(window, font=("Arial", 12), width=20)
entry_current.pack(pady=5)

# ปุ่ม
button_frame = tk.Frame(window, bg="white")
button_frame.pack(pady=15)

calculate_button = tk.Button(button_frame, text="Calculate", font=("Arial", 12), width=10)
calculate_button.grid(row=0, column=0, padx=5)

clear_button = tk.Button(button_frame, text="Clear", font=("Arial", 12), width=10)
clear_button.grid(row=0, column=1, padx=5)

exit_button = tk.Button(button_frame, text="Exit", font=("Arial", 12), width=10, command=window.destroy)
exit_button.grid(row=0, column=2, padx=5)

# ผลลัพธ์
result_label = tk.Label(
    window,
    text="Motor Power = ",
    font=("Arial", 14, "bold"),
    bg="white"
)
result_label.pack(pady=10)

window.mainloop()