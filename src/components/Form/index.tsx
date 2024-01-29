import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getNatalAction } from '../../store/actions/main'
import s from "./styles.module.scss";

const languages = ["Albanian", "Arabic", "Bengali", "Bosnian", "Bulgarian", "Chinese", "Croatian", "Czech",
  "Danish", "English", "Estonian", "Esperanto", "Finnish", "French", "German", "Greek",
  "Gujarati", "Hebrew", "Hindi", "Hungarian", "Icelandic", "Indonesian", "Irish", "Italian",
  "Japanese", "Korean", "Latin", "Latvian", "Lithuanian", "Macedonian", "Maori", "Marathi",
  "Norwegian", "Persian", "Polish", "Portuguese", "Punjabi", "Romanian", "Russian", "Scottish",
  "Serbian", "Slovak", "Slovenian", "Spanish", "Swedish", "Thai", "Turkish", "Ukrainian", "Urdu",
  "Vietnamese", "Welsh"];

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    city: '',
    country: '',
    language: ''
  });

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, language: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(getNatalAction(formData) as any);
  };

  const text = useSelector((state: any) => state?.main?.natal[0]?.data);

  return (
    <form className={s["main-form"]} onSubmit={handleSubmit}>
      <h3>Born data</h3>
      <div className={s["main-form-wrapper"]}>
        <fieldset className={s["main-form-fieldset"]}>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            className={s["main-form-input"]}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className={s["main-form-fieldset"]}>
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            className={s["main-form-input"]}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className={s["main-form-fieldset"]}>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            placeholder='New-York'
            className={s["main-form-input"]}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className={s["main-form-fieldset"]}>
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            placeholder='USA'
            className={s["main-form-input"]}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className={s["main-form-fieldset"]}>
          <label>
            Language:
            <select
              value={formData.language}
              className={s["main-form-input"]}
              onChange={handleChangeSelect}
            >
              <option value={formData.language}>{formData.language}</option>
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </label>
        </fieldset>
      </div>
      <div className={s["main-form-buttons"]}>
        <button type="submit" className={s["main-form-button"]}>Natal map</button>
        <button type="submit" className={s["main-form-button"]}>Houses</button>
      </div>
    </form>
  );
};

export default FormComponent;
