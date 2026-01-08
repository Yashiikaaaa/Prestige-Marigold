import { useEffect, useState } from "react";
import { FormAlert } from "./FormAlert";
import ReactGA from "react-ga4";
import { Phone, Xmark } from "iconoir-react";
import overlaybg from "../../assets/gallery/14.webp";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";

// GA4 Init
const trackingId = import.meta.env.VITE_GA_MEASUREMENT_ID;
if (trackingId) {
  ReactGA.initialize(trackingId);
}

// 🔥 GTM EVENT PUSH
const fireContactFormEvent = () => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "Contact_form_submit",
      form_name: "Contact Form",
      project_name: "Prestige Marigold",
      lead_type: "Enquiry",
    });
  }
};

const ContactForm = ({ contactmodal, setContactModal, setSiteVisitModal }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);
  const [utmParams, setUtmParams] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getUTMParams = () => {
    const params = new URLSearchParams(window.location.search);
    return {
      utmSource: params.get("utm_source") || "",
      utmMedium: params.get("utm_medium") || "",
      utmCampaign: params.get("utm_campaign") || "",
    };
  };

  useEffect(() => {
    setUtmParams(getUTMParams());
  }, []);

  const validateForm = () => {
    if (!name || !number) {
      setAlert(<FormAlert message="Please fill all required fields." onClose={() => setAlert(null)} />);
      return false;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
      setAlert(<FormAlert message="Invalid Name." onClose={() => setAlert(null)} />);
      return false;
    }

    if (!isValidPhoneNumber(number)) {
      setAlert(<FormAlert message="Invalid Phone Number." onClose={() => setAlert(null)} />);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    setAlert(<FormAlert message="Submitting form..." onClose={() => setAlert(null)} />);

    const payload = {
      name: name.trim().toLowerCase(),
      phoneNumber: number.trim(),
      campaign: true,
      projectId: "",
      projectName: "Prestige Marigold",
      currentAgent: "unknown",
      utmDetails: {
        source: utmParams.utmSource || null,
        medium: utmParams.utmMedium || null,
        campaign: utmParams.utmCampaign || null,
      },
    };

    try {
      const response = await fetch(
        "https://google-campaign-leads-service-dot-iqol-crm.uc.r.appspot.com/handleMultipleCampaignData",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) throw new Error("API Error");

      await response.json();

      // ✅ FIRE GTM EVENT (FOR GOOGLE ADS & GA4)
      fireContactFormEvent();

      setName("");
      setNumber("");

      setAlert(<FormAlert message="We received your info. Expect a response soon!" onClose={() => setAlert(null)} />);
    } catch (error) {
      console.error(error);
      setAlert(<FormAlert message="Something went wrong. Please try again later." onClose={() => setAlert(null)} />);
    } finally {
      setTimeout(() => setLoading(false), 800);
    }
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black opacity-80 z-30"></div>

      <div className={`fixed ${isMobile ? "" : "top-24"} left-0 right-0 bg-white z-40 w-full md:w-fit mx-auto`}>
        <div className="max-w-7xl mx-auto flex gap-5 items-center justify-between border shadow-xl overflow-hidden" style={{ height: "75vh" }}>
          
          <img src={overlaybg} alt="background" className="hidden md:block w-full h-full" />

          <div className="mx-auto w-full px-8 h-full flex flex-col items-center justify-center">
            <button className="absolute top-2 right-2" onClick={() => setContactModal(!contactmodal)}>
              <Xmark />
            </button>

            <h2 className="text-[28px] font-semibold text-center pt-6">
              Want to know more? Enquire Now!
            </h2>

            <div className="max-w-sm w-full pt-8">
              <input
                type="text"
                className="p-4 w-full border border-gray-500"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="max-w-sm w-full py-4">
              <PhoneInput
                className="border border-gray-500 h-16 p-4"
                placeholder="Contact Number"
                defaultCountry="IN"
                value={number}
                onChange={setNumber}
              />
            </div>

            <div className="max-w-sm w-full">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`w-full p-3 text-white ${loading ? "bg-gray-400" : "bg-PrestigeBrown"}`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>

            <div className="max-w-sm w-full mt-4">
              <a href="tel:+919353329893" className="block bg-PrestigeBrown text-white p-3 text-center">
                <Phone className="inline mr-2" /> 93533 29893
              </a>
            </div>
          </div>
        </div>

        {alert && <div>{alert}</div>}
      </div>
    </div>
  );
};

export default ContactForm;
