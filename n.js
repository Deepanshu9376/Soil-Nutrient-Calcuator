// Crop data with their nutrient ratios
const crops = {
    kharif: ["Rice", "Maize", "Sorghum", "Pearl Bajra", "Finger Millet", "Arhar", "Soyabean", "Groundnut", "Cotton"],
    rabi: ["Wheat", "Barley", "Oats", "Chickpea", "Linseed", "Mustard"],
};

const nutrientRatios = {
    Rice: { n: 2, p: 1, k: 1 },
    Maize: { n: 1, p: 0.6, k: 0.3 },
    Sorghum: { n: 2, p: 1.6, k: 1 },
    "Pearl Bajra": { n: 2, p: 0.5, k: 1 },
    "Finger Millet": { n: 2.5, p: 1, k: 1 },
    Arhar: { n: 2.5, p: 1, k: 2 },
    Soyabean: { n: 4, p: 2, k: 1 },
    Groundnut: { n: 3, p: 1, k: 2 },
    Cotton: { n: 4, p: 1, k: 2 },
    Wheat: { n: 3, p: 2, k: 1 },
    Barley: { n: 3, p: 2.4, k: 1 },
    Oats: { n: 2, p: 1, k: 1 },
    Chickpea: { n: 2, p: 1.5, k: 1 },
    Linseed: { n: 13, p: 2, k: 1 },
    Mustard: { n: 3, p: 2.2, k: 1 },
};

function updateCropList() {
    const cropType = document.getElementById("cropType").value;
    const cropDropdown = document.getElementById("crop");
    cropDropdown.innerHTML = "";

    crops[cropType].forEach((crop) => {
        const option = document.createElement("option");
        option.value = crop;
        option.text = crop;
        cropDropdown.appendChild(option);
    });
}

function calculateNutrient() {
    const selectedCrop = document.getElementById("crop").value;
    const nConcentration = parseFloat(document.getElementById("n").value);
    const pConcentration = parseFloat(document.getElementById("p").value);
    const kConcentration = parseFloat(document.getElementById("k").value);

    if (isNaN(nConcentration) || isNaN(pConcentration) || isNaN(kConcentration)) {
        alert("Please enter valid nutrient concentrations.");
        return;
    }

    const targetRatios = nutrientRatios[selectedCrop];
    const nRatio = (targetRatios.n * pConcentration) - nConcentration;
    const pRatio = (targetRatios.p * kConcentration) - pConcentration;
    const kRatio = (targetRatios.k * nConcentration) - kConcentration;

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h2>Results:</h2>
        <p>For ${selectedCrop},</p>
        <p>Additional N needed: ${nRatio.toFixed(2)}</p>
        <p>Additional P needed: ${pRatio.toFixed(2)}</p>
        <p>Additional K needed: ${kRatio.toFixed(2)}</p>
    `;
}
