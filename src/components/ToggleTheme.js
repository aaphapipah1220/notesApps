import { ThemeConsumer } from "../contexts/ThemeContext";
import { FaMoon, FaSun } from 'react-icons/fa';

function toggleTheme() {
    return (
        <ThemeConsumer>
            {({ theme, toggleTheme }) => {
                return <button onClick={toggleTheme}>{theme === 'light' ? <FaMoon /> : <FaSun /> }</button>;
            }}
        </ThemeConsumer>
    );
}

export default toggleTheme;