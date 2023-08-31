import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";
import { Footer } from "../../components/Footer";

export function DashboardLayout({ children }) {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'space-between'
    }}><Header /><Main>{children}</Main><Footer /></div>
}
