/* =====================================================
   SI PHYSICS CONVERTER
   JAVASCRIPT
===================================================== */


/* =====================================================
   1. PREFIX SI
   ใช้เฉพาะหน่วยที่เหมาะสม
===================================================== */

const PREFIXES = {

    E: {
        name: "Exa",
        thai: "เอกซะ",
        symbol: "E",
        factor: 1e18
    },

    P: {
        name: "Peta",
        thai: "เพตะ",
        symbol: "P",
        factor: 1e15
    },

    T: {
        name: "Tera",
        thai: "เทระ",
        symbol: "T",
        factor: 1e12
    },

    G: {
        name: "Giga",
        thai: "กิกะ",
        symbol: "G",
        factor: 1e9
    },

    M: {
        name: "Mega",
        thai: "เมกะ",
        symbol: "M",
        factor: 1e6
    },

    k: {
        name: "Kilo",
        thai: "กิโล",
        symbol: "k",
        factor: 1e3
    },

    h: {
        name: "Hecto",
        thai: "เฮกโต",
        symbol: "h",
        factor: 1e2
    },

    da: {
        name: "Deca",
        thai: "เดคา",
        symbol: "da",
        factor: 1e1
    },

    base: {
        name: "Base",
        thai: "หน่วยฐาน",
        symbol: "",
        factor: 1
    },

    d: {
        name: "Deci",
        thai: "เดซิ",
        symbol: "d",
        factor: 1e-1
    },

    c: {
        name: "Centi",
        thai: "เซนติ",
        symbol: "c",
        factor: 1e-2
    },

    m: {
        name: "Milli",
        thai: "มิลลิ",
        symbol: "m",
        factor: 1e-3
    },

    micro: {
        name: "Micro",
        thai: "ไมโคร",
        symbol: "µ",
        factor: 1e-6
    },

    n: {
        name: "Nano",
        thai: "นาโน",
        symbol: "n",
        factor: 1e-9
    },

    p: {
        name: "Pico",
        thai: "พิโค",
        symbol: "p",
        factor: 1e-12
    },

    f: {
        name: "Femto",
        thai: "เฟมโต",
        symbol: "f",
        factor: 1e-15
    },

    a: {
        name: "Atto",
        thai: "อัตโต",
        symbol: "a",
        factor: 1e-18
    }

};


/* =====================================================
   2. 7 ปริมาณ SI
===================================================== */

const QUANTITIES = {


    /* =================================================
       LENGTH
    ================================================= */

    length: {

        name: "ความยาว",

        icon: "📏",

        description:
            "เมตรเป็นหน่วย SI ของความยาว",

        formula:
            "ค่าปลายทาง = ค่าต้นทาง × ตัวคูณต้นทาง ÷ ตัวคูณปลายทาง",

        units: [

            {
                id: "km",
                name: "กิโลเมตร",
                symbol: "km",
                factor: 1000,
                info: "1 km = 1,000 m"
            },

            {
                id: "hm",
                name: "เฮกโตเมตร",
                symbol: "hm",
                factor: 100,
                info: "1 hm = 100 m"
            },

            {
                id: "dam",
                name: "เดคาเมตร",
                symbol: "dam",
                factor: 10,
                info: "1 dam = 10 m"
            },

            {
                id: "m",
                name: "เมตร",
                symbol: "m",
                factor: 1,
                info: "หน่วยฐาน SI"
            },

            {
                id: "dm",
                name: "เดซิเมตร",
                symbol: "dm",
                factor: 0.1,
                info: "1 dm = 0.1 m"
            },

            {
                id: "cm",
                name: "เซนติเมตร",
                symbol: "cm",
                factor: 0.01,
                info: "1 cm = 0.01 m"
            },

            {
                id: "mm",
                name: "มิลลิเมตร",
                symbol: "mm",
                factor: 0.001,
                info: "1 mm = 0.001 m"
            },

            {
                id: "um",
                name: "ไมโครเมตร",
                symbol: "µm",
                factor: 1e-6,
                info: "1 µm = 10⁻⁶ m"
            },

            {
                id: "nm",
                name: "นาโนเมตร",
                symbol: "nm",
                factor: 1e-9,
                info: "1 nm = 10⁻⁹ m"
            },

            {
                id: "mile",
                name: "ไมล์",
                symbol: "mi",
                factor: 1609.344,
                info: "หน่วยที่ใช้ทั่วไป ไม่ใช่ SI"
            },

            {
                id: "yard",
                name: "หลา",
                symbol: "yd",
                factor: 0.9144,
                info: "หน่วยที่ใช้ทั่วไป ไม่ใช่ SI"
            },

            {
                id: "foot",
                name: "ฟุต",
                symbol: "ft",
                factor: 0.3048,
                info: "หน่วยที่ใช้ทั่วไป ไม่ใช่ SI"
            },

            {
                id: "inch",
                name: "นิ้ว",
                symbol: "in",
                factor: 0.0254,
                info: "หน่วยที่ใช้ทั่วไป ไม่ใช่ SI"
            }

        ]

    },


    /* =================================================
       MASS
    ================================================= */

    mass: {

        name: "มวล",

        icon: "⚖️",

        description:
            "กิโลกรัมเป็นหน่วยฐาน SI ของมวล",

        formula:
            "ค่าปลายทาง = ค่าต้นทาง × ตัวคูณต้นทาง ÷ ตัวคูณปลายทาง",

        units: [

            {
                id: "kg",
                name: "กิโลกรัม",
                symbol: "kg",
                factor: 1,
                info: "หน่วยฐาน SI"
            },

            {
                id: "g",
                name: "กรัม",
                symbol: "g",
                factor: 0.001,
                info: "1 g = 10⁻³ kg"
            },

            {
                id: "mg",
                name: "มิลลิกรัม",
                symbol: "mg",
                factor: 1e-6,
                info: "1 mg = 10⁻⁶ kg"
            },

            {
                id: "ug",
                name: "ไมโครกรัม",
                symbol: "µg",
                factor: 1e-9,
                info: "1 µg = 10⁻⁹ kg"
            },

            {
                id: "tonne",
                name: "ตันเมตริก",
                symbol: "t",
                factor: 1000,
                info: "1 t = 1,000 kg"
            }

        ]

    },


    /* =================================================
       TIME
    ================================================= */

    time: {

        name: "เวลา",

        icon: "⏱️",

        description:
            "วินาทีเป็นหน่วยฐาน SI ของเวลา",

        formula:
            "แปลงผ่านวินาที: ค่าปลายทาง = ค่าต้นทาง × ตัวคูณ ÷ ตัวคูณปลายทาง",

        units: [

            {
                id: "s",
                name: "วินาที",
                symbol: "s",
                factor: 1,
                info: "หน่วยฐาน SI"
            },

            {
                id: "ms",
                name: "มิลลิวินาที",
                symbol: "ms",
                factor: 0.001,
                info: "1 ms = 10⁻³ s"
            },

            {
                id: "us",
                name: "ไมโครวินาที",
                symbol: "µs",
                factor: 1e-6,
                info: "1 µs = 10⁻⁶ s"
            },

            {
                id: "ns",
                name: "นาโนวินาที",
                symbol: "ns",
                factor: 1e-9,
                info: "1 ns = 10⁻⁹ s"
            },

            {
                id: "min",
                name: "นาที",
                symbol: "min",
                factor: 60,
                info: "1 min = 60 s"
            },

            {
                id: "h",
                name: "ชั่วโมง",
                symbol: "h",
                factor: 3600,
                info: "1 h = 3,600 s"
            },

            {
                id: "day",
                name: "วัน",
                symbol: "d",
                factor: 86400,
                info: "1 d = 86,400 s"
            }

        ]

    },


    /* =================================================
       ELECTRIC CURRENT
    ================================================= */

    current: {

        name: "กระแสไฟฟ้า",

        icon: "⚡",

        description:
            "แอมแปร์เป็นหน่วยฐาน SI ของกระแสไฟฟ้า",

        formula:
            "ค่าปลายทาง = ค่าต้นทาง × ตัวคูณต้นทาง ÷ ตัวคูณปลายทาง",

        units: [

            {
                id: "kA",
                name: "กิโลแอมแปร์",
                symbol: "kA",
                factor: 1000,
                info: "1 kA = 1,000 A"
            },

            {
                id: "A",
                name: "แอมแปร์",
                symbol: "A",
                factor: 1,
                info: "หน่วยฐาน SI"
            },

            {
                id: "mA",
                name: "มิลลิแอมแปร์",
                symbol: "mA",
                factor: 0.001,
                info: "1 mA = 10⁻³ A"
            },

            {
                id: "uA",
                name: "ไมโครแอมแปร์",
                symbol: "µA",
                factor: 1e-6,
                info: "1 µA = 10⁻⁶ A"
            },

            {
                id: "nA",
                name: "นาโนแอมแปร์",
                symbol: "nA",
                factor: 1e-9,
                info: "1 nA = 10⁻⁹ A"
            }

        ]

    },


    /* =================================================
       TEMPERATURE
    ================================================= */

    temperature: {

        name: "อุณหภูมิ",

        icon: "🌡️",

        description:
            "เคลวินเป็นหน่วยฐาน SI ของอุณหภูมิ",

        formula:
            "K = °C + 273.15",

        temperature: true,

        units: [

            {
                id: "K",
                name: "เคลวิน",
                symbol: "K",
                info: "หน่วยฐาน SI"
            },

            {
                id: "C",
                name: "องศาเซลเซียส",
                symbol: "°C",
                info: "ใช้ร่วมกับระบบ SI"
            },

            {
                id: "F",
                name: "องศาฟาเรนไฮต์",
                symbol: "°F",
                info: "หน่วยที่ใช้ทั่วไป ไม่ใช่ SI"
            }

        ]

    },


    /* =================================================
       AMOUNT OF SUBSTANCE
    ================================================= */

    amount: {

        name: "ปริมาณสาร",

        icon: "🧪",

        description:
            "โมลเป็นหน่วยฐาน SI ของปริมาณสาร",

        formula:
            "ค่าปลายทาง = ค่าต้นทาง × ตัวคูณต้นทาง ÷ ตัวคูณปลายทาง",

        units: [

            {
                id: "kmol",
                name: "กิโลโมล",
                symbol: "kmol",
                factor: 1000,
                info: "1 kmol = 1,000 mol"
            },

            {
                id: "mol",
                name: "โมล",
                symbol: "mol",
                factor: 1,
                info: "หน่วยฐาน SI"
            },

            {
                id: "mmol",
                name: "มิลลิโมล",
                symbol: "mmol",
                factor: 0.001,
                info: "1 mmol = 10⁻³ mol"
            },

            {
                id: "umol",
                name: "ไมโครโมล",
                symbol: "µmol",
                factor: 1e-6,
                info: "1 µmol = 10⁻⁶ mol"
            },

            {
                id: "nmol",
                name: "นาโนโมล",
                symbol: "nmol",
                factor: 1e-9,
                info: "1 nmol = 10⁻⁹ mol"
            }

        ]

    },


    /* =================================================
       LUMINOUS INTENSITY
    ================================================= */

    luminous: {

        name: "ความเข้มการส่องสว่าง",

        icon: "💡",

        description:
            "แคนเดลาเป็นหน่วยฐาน SI ของความเข้มการส่องสว่าง",

        formula:
            "ค่าปลายทาง = ค่าต้นทาง × ตัวคูณต้นทาง ÷ ตัวคูณปลายทาง",

        units: [

            {
                id: "kcd",
                name: "กิโลแคนเดลา",
                symbol: "kcd",
                factor: 1000,
                info: "1 kcd = 1,000 cd"
            },

            {
                id: "cd",
                name: "แคนเดลา",
                symbol: "cd",
                factor: 1,
                info: "หน่วยฐาน SI"
            },

            {
                id: "mcd",
                name: "มิลลิแคนเดลา",
                symbol: "mcd",
                factor: 0.001,
                info: "1 mcd = 10⁻³ cd"
            },

            {
                id: "ucd",
                name: "ไมโครแคนเดลา",
                symbol: "µcd",
                factor: 1e-6,
                info: "1 µcd = 10⁻⁶ cd"
            }

        ]

    }

};


/* =====================================================
   3. DOM
===================================================== */

const homePage =
    document.getElementById("homePage");

const converterPage =
    document.getElementById("converterPage");

const quantityGrid =
    document.getElementById("quantityGrid");

const converterIcon =
    document.getElementById("converterIcon");

const converterName =
    document.getElementById("converterName");

const converterDescription =
    document.getElementById("converterDescription");

const fromUnit =
    document.getElementById("fromUnit");

const toUnit =
    document.getElementById("toUnit");

const inputValue =
    document.getElementById("inputValue");

const convertBtn =
    document.getElementById("convertBtn");

const clearBtn =
    document.getElementById("clearBtn");

const swapBtn =
    document.getElementById("swapBtn");

const resultBox =
    document.getElementById("resultBox");

const resultText =
    document.getElementById("resultText");

const calculationText =
    document.getElementById("calculationText");

const errorMessage =
    document.getElementById("errorMessage");

const unitInfoGrid =
    document.getElementById("unitInfoGrid");

const formulaTitle =
    document.getElementById("formulaTitle");

const formulaText =
    document.getElementById("formulaText");

const copyBtn =
    document.getElementById("copyBtn");

const themeBtn =
    document.getElementById("themeBtn");


let currentQuantity = null;

let displayMode = "normal";


/* =====================================================
   4. แสดง 7 ปริมาณ
===================================================== */

function renderQuantities() {

    quantityGrid.innerHTML = "";

    Object.entries(QUANTITIES).forEach(
        ([id, quantity]) => {

            const card =
                document.createElement("div");

            card.className =
                "quantity-card";

            card.innerHTML = `

                <div class="quantity-icon">
                    ${quantity.icon}
                </div>

                <h3>
                    ${quantity.name}
                </h3>

                <p>
                    ${quantity.description}
                </p>

                <div class="start-text">
                    เลือกเพื่อเปลี่ยนหน่วย →
                </div>

            `;

            card.addEventListener(
                "click",
                () => openConverter(id)
            );

            quantityGrid.appendChild(card);

        }
    );

}


/* =====================================================
   5. เปิด Converter
===================================================== */

function openConverter(id) {

    currentQuantity =
        QUANTITIES[id];

    homePage.classList.add(
        "hidden"
    );

    converterPage.classList.remove(
        "hidden"
    );

    converterIcon.textContent =
        currentQuantity.icon;

    converterName.textContent =
        currentQuantity.name;

    converterDescription.textContent =
        currentQuantity.description;

    formulaText.textContent =
        currentQuantity.formula;

    formulaTitle.textContent =
        `สูตรการเปลี่ยนหน่วย${currentQuantity.name}`;

    renderUnits();

    renderUnitInfo();

    resetConverter();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   6. สร้างรายการหน่วย
===================================================== */

function renderUnits() {

    fromUnit.innerHTML = "";

    toUnit.innerHTML = "";


    currentQuantity.units.forEach(
        (unit, index) => {

            const option1 =
                document.createElement("option");

            option1.value =
                unit.id;

            option1.textContent =
                `${unit.name} (${unit.symbol})`;

            fromUnit.appendChild(
                option1
            );


            const option2 =
                document.createElement("option");

            option2.value =
                unit.id;

            option2.textContent =
                `${unit.name} (${unit.symbol})`;

            toUnit.appendChild(
                option2
            );

        }
    );


    /*
       ค่าเริ่มต้น
    */

    fromUnit.selectedIndex = 0;

    toUnit.selectedIndex =
        Math.min(
            1,
            currentQuantity.units.length - 1
        );

}


/* =====================================================
   7. ข้อมูลหน่วย
===================================================== */

function renderUnitInfo() {

    unitInfoGrid.innerHTML = "";


    currentQuantity.units.forEach(
        unit => {

            const item =
                document.createElement("div");

            item.className =
                "unit-info";

            item.innerHTML = `

                <div class="symbol">
                    ${unit.symbol}
                </div>

                <strong>
                    ${unit.name}
                </strong>

                <small>
                    ${unit.info}
                </small>

            `;

            unitInfoGrid.appendChild(item);

        }
    );

}


/* =====================================================
   8. หา Unit
===================================================== */

function getUnit(id) {

    return currentQuantity.units.find(
        unit =>
            unit.id === id
    );

}


/* =====================================================
   9. TEMPERATURE CONVERSION
===================================================== */

function temperatureToKelvin(
    value,
    unit
) {

    switch (unit.id) {

        case "K":
            return value;

        case "C":
            return value + 273.15;

        case "F":
            return (
                (value - 32) *
                5 / 9 +
                273.15
            );

        default:
            return value;
    }

}


function kelvinToTemperature(
    kelvin,
    unit
) {

    switch (unit.id) {

        case "K":
            return kelvin;

        case "C":
            return kelvin - 273.15;

        case "F":
            return (
                (kelvin - 273.15) *
                9 / 5 +
                32
            );

        default:
            return kelvin;
    }

}


/* =====================================================
   10. FORMAT NORMAL
===================================================== */

function formatNormal(value) {

    if (
        !Number.isFinite(value)
    ) {

        return "ไม่สามารถคำนวณได้";

    }


    return new Intl.NumberFormat(
        "en-US",
        {
            maximumFractionDigits: 12
        }
    ).format(value);

}


/* =====================================================
   11. FORMAT SCIENTIFIC
===================================================== */

function formatScientific(value) {

    if (value === 0) {
        return "0";
    }


    const exponent =
        Math.floor(
            Math.log10(
                Math.abs(value)
            )
        );


    const mantissa =
        value /
        Math.pow(
            10,
            exponent
        );


    const rounded =
        Number(
            mantissa.toFixed(6)
        );


    return (
        rounded +
        " × 10" +
        toSuperscript(exponent)
    );

}


/* =====================================================
   12. FORMAT RESULT
===================================================== */

function formatResult(value) {

    if (
        displayMode === "scientific"
    ) {

        return formatScientific(value);

    }

    return formatNormal(value);

}


/* =====================================================
   13. SUPERSCRIPT
===================================================== */

function toSuperscript(number) {

    const map = {

        "-": "⁻",

        "0": "⁰",
        "1": "¹",
        "2": "²",
        "3": "³",
        "4": "⁴",
        "5": "⁵",
        "6": "⁶",
        "7": "⁷",
        "8": "⁸",
        "9": "⁹"

    };


    return String(number)
        .split("")
        .map(
            char =>
                map[char] || char
        )
        .join("");

}


/* =====================================================
   14. CONVERT
===================================================== */

function convert() {

    hideError();


    const value =
        Number(inputValue.value);


    if (
        inputValue.value.trim() === "" ||
        !Number.isFinite(value)
    ) {

        showError(
            "⚠️ กรุณากรอกจำนวนที่ต้องการเปลี่ยน"
        );

        return;

    }


    const source =
        getUnit(fromUnit.value);

    const target =
        getUnit(toUnit.value);


    if (!source || !target) {

        showError(
            "⚠️ กรุณาเลือกหน่วยให้ครบ"
        );

        return;

    }


    let result;


    /* =================================================
       TEMPERATURE
    ================================================= */

    if (
        currentQuantity.temperature
    ) {

        const kelvin =
            temperatureToKelvin(
                value,
                source
            );


        result =
            kelvinToTemperature(
                kelvin,
                target
            );

    }


    /* =================================================
       NORMAL UNIT
    ================================================= */

    else {

        /*
            แปลงค่าต้นทาง
            ไปยังหน่วยฐาน
        */

        const baseValue =
            value *
            source.factor;


        /*
            จากหน่วยฐาน
            ไปยังปลายทาง
        */

        result =
            baseValue /
            target.factor;

    }


    if (
        !Number.isFinite(result)
    ) {

        showError(
            "⚠️ ค่าที่คำนวณมีขนาดเกินขอบเขต"
        );

        return;

    }


    const answer =
        formatResult(result);


    resultText.textContent =
        `${formatNormal(value)} ${source.symbol}
        = ${answer} ${target.symbol}`;


    createCalculation(
        value,
        source,
        target,
        result
    );


    resultBox.classList.remove(
        "hidden"
    );

}


/* =====================================================
   15. วิธีคำนวณ
===================================================== */

function createCalculation(
    value,
    source,
    target,
    result
) {

    /* TEMPERATURE */

    if (
        currentQuantity.temperature
    ) {

        let html = "";


        if (source.id === "C") {

            html += `
                <div class="calc-step">
                    <strong>ขั้นที่ 1</strong><br>
                    แปลง °C → K
                    <br>
                    K = °C + 273.15
                    <br>
                    K = ${value} + 273.15
                </div>
            `;

        }

        else if (source.id === "F") {

            html += `
                <div class="calc-step">
                    <strong>ขั้นที่ 1</strong><br>
                    แปลง °F → K
                    <br>
                    K = (°F − 32) × 5/9 + 273.15
                    <br>
                    K = (${value} − 32) × 5/9 + 273.15
                </div>
            `;

        }

        else {

            html += `
                <div class="calc-step">
                    <strong>ขั้นที่ 1</strong><br>
                    ค่าต้นทางอยู่ในหน่วย K
                    <br>
                    K = ${value}
                </div>
            `;

        }


        if (target.id === "C") {

            html += `
                <div class="calc-step">
                    <strong>ขั้นที่ 2</strong><br>
                    °C = K − 273.15
                </div>
            `;

        }

        else if (target.id === "F") {

            html += `
                <div class="calc-step">
                    <strong>ขั้นที่ 2</strong><br>
                    °F = (K − 273.15) × 9/5 + 32
                </div>
            `;

        }


        html += `
            <div class="calc-answer">
                คำตอบ = ${formatResult(result)}
                ${target.symbol}
            </div>
        `;


        calculationText.innerHTML =
            html;

        return;

    }


    /* NORMAL */

    const baseValue =
        value *
        source.factor;


    calculationText.innerHTML = `

        <div class="calc-step">

            <strong>
                ขั้นที่ 1 : แปลงไปยังหน่วยฐาน
            </strong>

            <br>

            ${formatNormal(value)}
            ${source.symbol}
            ×
            ${source.factor}

            =

            ${formatResult(baseValue)}

        </div>


        <div class="calc-step">

            <strong>
                ขั้นที่ 2 : แปลงจากหน่วยฐาน
            </strong>

            <br>

            ${formatResult(baseValue)}
            ÷
            ${target.factor}

            =

            ${formatResult(result)}
            ${target.symbol}

        </div>


        <div class="calc-answer">

            คำตอบ =

            ${formatResult(result)}
            ${target.symbol}

        </div>

    `;

}


/* =====================================================
   16. SWAP
===================================================== */

swapBtn.addEventListener(
    "click",
    () => {

        const oldFrom =
            fromUnit.value;

        fromUnit.value =
            toUnit.value;

        toUnit.value =
            oldFrom;


        if (
            !resultBox.classList.contains(
                "hidden"
            )
        ) {

            convert();

        }

    }
);


/* =====================================================
   17. CLEAR
===================================================== */

function resetConverter() {

    inputValue.value = "";

    resultBox.classList.add(
        "hidden"
    );

    hideError();

}


clearBtn.addEventListener(
    "click",
    resetConverter
);


/* =====================================================
   18. BACK
===================================================== */

document
    .getElementById("backBtn")
    .addEventListener(
        "click",
        () => {

            converterPage.classList.add(
                "hidden"
            );

            homePage.classList.remove(
                "hidden"
            );

            currentQuantity = null;

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


/* =====================================================
   19. DISPLAY MODE
===================================================== */

document
    .querySelectorAll(".mode-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".mode-btn"
                    )
                    .forEach(
                        btn =>
                            btn.classList.remove(
                                "active"
                            )
                    );


                button.classList.add(
                    "active"
                );


                displayMode =
                    button.dataset.mode;


                if (
                    !resultBox.classList.contains(
                        "hidden"
                    )
                ) {

                    convert();

                }

            }
        );

    });


/* =====================================================
   20. COPY
===================================================== */

copyBtn.addEventListener(
    "click",
    async () => {

        try {

            await navigator.clipboard.writeText(
                resultText.textContent
            );


            const oldText =
                copyBtn.textContent;


            copyBtn.textContent =
                "✓ คัดลอกแล้ว";


            setTimeout(
                () => {

                    copyBtn.textContent =
                        oldText;

                },
                1200
            );

        }

        catch {

            showError(
                "ไม่สามารถคัดลอกคำตอบได้"
            );

        }

    }
);


/* =====================================================
   21. ERROR
===================================================== */

function showError(message) {

    errorMessage.textContent =
        message;

    errorMessage.classList.remove(
        "hidden"
    );

}


function hideError() {

    errorMessage.classList.add(
        "hidden"
    );

}


/* =====================================================
   22. DARK MODE
===================================================== */

themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );


        const dark =
            document.body.classList.contains(
                "dark"
            );


        themeBtn.textContent =
            dark
                ? "☀️"
                : "🌙";


        localStorage.setItem(
            "siTheme",
            dark
                ? "dark"
                : "light"
        );

    }
);


/* =====================================================
   23. LOAD THEME
===================================================== */

function loadTheme() {

    const theme =
        localStorage.getItem(
            "siTheme"
        );


    if (theme === "dark") {

        document.body.classList.add(
            "dark"
        );

        themeBtn.textContent =
            "☀️";

    }

}


/* =====================================================
   24. ENTER KEY
===================================================== */

inputValue.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            convert();

        }

    }
);
/* =====================================================
   24.1 CONVERT BUTTON CLICK
===================================================== */

convertBtn.addEventListener(
    "click",
    convert
);

/* =====================================================
   25. START
===================================================== */

renderQuantities();

loadTheme();
