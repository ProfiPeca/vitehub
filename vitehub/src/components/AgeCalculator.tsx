import { useState, ChangeEvent } from 'react';
import { AgeFromDateString } from 'age-calculator';

export default function AgeCalculator() {
    const [birthYear, setBirthYear] = useState(0);
    const [age, setAge] = useState(0);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setBirthYear(parseInt(value));
        setAge(new AgeFromDateString(value + '-1-1').age);
    };

    return (
        <div>
            <label>
                Zadej rok narozen�:
                <input type="number" value={birthYear} onChange={handleChange} />
            </label>
            {age !== null && <p>Tob� je: {age}</p>}
        </div>
    );
}