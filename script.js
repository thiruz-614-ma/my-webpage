function changeLanguage() {
    const selector = document.getElementById("language-selector");
    const selectedLang = selector.value;

    // Language content mapping
    const translations = {
        en: {
            title: "AI-Powered Conveyor Belt Load Detection",
            description: "Our AI-powered system revolutionizes conveyor belt monitoring, enhancing efficiency and safety in industrial operations."
        },
        hi: {
            title: "एआई-संचालित कन्वेयर बेल्ट लोड डिटेक्शन",
            description: "हमारी एआई-संचालित प्रणाली कन्वेयर बेल्ट निगरानी को क्रांतिकारी बना रही है, जिससे औद्योगिक संचालन में दक्षता और सुरक्षा बढ़ती है।"
        },
        ta: {
            title: "ஏஐ இயக்கப்படும் கன்வேயர் பெல்ட் ஏற்றம் கண்டறிதல்",
            description: "எங்கள் ஏஐ இயக்கப்படும் கண்காணிப்பு அமைப்பு தொழில்துறை செயல்பாடுகளில் செயல்திறனை மற்றும் பாதுகாப்பை மேம்படுத்துகிறது."
        }
    };

    // Update the page content dynamically
    document.getElementById("hero-title").innerText = translations[selectedLang].title;
    document.getElementById("hero-description").innerText = translations[selectedLang].description;

    // Store language preference
    localStorage.setItem("selectedLanguage", selectedLang);
}

// Load saved language on page load
document.addEventListener("DOMContentLoaded", function () {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    document.getElementById("language-selector").value = savedLanguage;
    changeLanguage();
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth'});
}

    // Open the login popup
    function openLogin() {
        document.getElementById('loginModal').style.display = 'block';
    }

    // Close the login popup
    function closeLogin() {
        document.getElementById('loginModal').style.display = 'none';
    }

    // Close the popup when clicking outside the modal
    window.onclick = function(event) {
        var modal = document.getElementById('loginModal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

  // Simulated Real-Time Data Update
  function updateRealTimeData() {
    const randomMW = (4000 + Math.random() * 50).toFixed(2); // Simulate power fluctuation
    document.getElementById("realTimeData").innerText = `Current Generation: ${randomMW} MW`;
}

setInterval(updateRealTimeData, 2000); // Update every 2 sec