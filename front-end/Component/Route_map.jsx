import { useEffect, useState } from "react";
import "./Route_map.css";

export default function Route_map() {
    return (
    <>
    <nav>
        <div className="logo-container-s2">
        <img
            src="/assests/logo (2).png"
            alt="TripNest Icon"
            className="tripnest-icon-s2"
        />
        <img
            src="/assests/TripNest.png"
            alt="TripNest Text Logo"
            className="tripnest-text-logo-s2"
        />
        </div>
        <div className="sidebar">
        <div className="home">
            <button>Home</button>
        </div>
        <div className="Planner">
            <button>Planner</button>
        </div>
        <div className="AboutUs">
            <button>AboutUs</button>
        </div>
        <div className="Signin">
            <button>SignOut</button>
        </div>
        </div>
        <div className="three_dot" onclick="funn()">
        ☰
        </div>
        <div className="mobile">
        <span className="cross" onclick="fun()">
            ×
        </span>
        <div className="home">
            <img
            src="/assests/home_24dp_WHITE_FILL0_wght400_GRAD0_opsz24.png"
            alt=""
            />
            <button>Home</button>
        </div>
        <div className="products">
            <img
            src="/assests/map_pin_review_24dp_WHITE_FILL0_wght400_GRAD0_opsz24.png"
            alt=""
            />
            <button>Planner</button>
        </div>
        <div className="aboutus">
            <img
            src="/assests/page_footer_24dp_WHITE_FILL0_wght400_GRAD0_opsz24.png"
            alt=""
            />
            <button>AboutUs</button>
        </div>
        <div className="services">
            <img
            src="/assests/login_24dp_WHITE_FILL0_wght400_GRAD0_opsz24.png"
            alt=""
            />
            <button>SignOut</button>
        </div>
        </div>
    </nav>
    <div className="main-container">
        <div className="box one">
        <div className="trans" onclick="pop_up()">
            <i className="fa-solid fa-language" />
        </div>
        <span>Language Translation</span>
        </div>
        <div className="box two">
        <div className="curr">
            <i className="fa-solid fa-dollar-sign" />
        </div>
        <span>Currency Converter</span>
        </div>
        <aside className="planner-column">
        <h2 className="planner-title">Your Planner</h2>
        <div className="planner-list planner-scroll" id="parent">
        </div>
        </aside>
        <main className="main-content-column">
        <div className="header">
            <button className="btn btn-secondary" style={{ margin: 10 }}>
            <i className="ph ph-map-pin" />
            <span>Share Your Location</span>
            </button>
        </div>
        <div className="map-area">
            <div id="googleMap"></div>
            <div id="output"></div>
        </div>
        </main>
        <div className="translator-container">
        <button
            id="trans"
            style={{
            fontSize: 50,
            display: "flex",
            justifyContent: "end",
            width: "100%",
            backgroundColor: "transparent",
            border: "none"
            }}
        >
            ×
        </button>
        <h1>Language Translator</h1>
        <div className="dropdowns">
            <select name="from" id="fromLang" />
            <button className="swap-btn" title="Swap Languages">
            ⇄
            </button>
            <select name="to" id="toLang" />
        </div>
        <div className="text-area-group">
            <div className="text-box">
            <textarea
                placeholder="Enter text here..."
                id="input"
                defaultValue={""}
            />
            <div className="text-box-icons">
                <button className="icon-btn" id="speakin" title="Speak Input">
                <span className="material-symbols-outlined">mic</span>
                </button>
                <button className="icon-btn" id="clear" title="Clear Text">
                ❌
                </button>
            </div>
            </div>
            <div className="text-box">
            <textarea id="outputar" readOnly="" defaultValue={""} />
            <div className="text-box-icons">
                <button className="icon-btn" id="speakout" title="Speak Output">
                🔊
                </button>
                <button className="icon-btn" id="copyOutput" title="Copy Output">
                📋
                </button>
            </div>
            </div>
        </div>
        <button className="translate-btn">Translate Text</button>
        </div>
        <div className="container">
        <button
            id="currClose"
            style={{
            fontSize: 50,
            display: "flex",
            justifyContent: "end",
            width: "100%",
            backgroundColor: "transparent",
            border: "none"
            }}
        >
            ×
        </button>
        <h2>Currency Converter</h2>
        <form>
            <div className="amount">
            <p>Enter Amount</p>
            <input defaultValue={1} type="text" />
            </div>
            <div className="dropdown">
            <div className="from">
                <p>From</p>
                <div className="select-container">
                <img src="https://flagsapi.com/US/flat/64.png" />
                <select name="from" />
                </div>
            </div>
            <i className="fa-solid fa-arrow-right-arrow-left" />
            <div className="to">
                <p>To</p>
                <div className="select-container">
                <img src="https://flagsapi.com/IN/flat/64.png" />
                <select name="to" />
                </div>
            </div>
            </div>
            <div className="msg">1USD = 80INR</div>
            <button>Get Exchange Rate</button>
        </form>
        </div>
    </div>
    </>
  );
}
