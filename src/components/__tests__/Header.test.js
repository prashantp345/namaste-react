import { fireEvent, render, screen} from "@testing-library/react";
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter  } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render Header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login"}); // get spectific button by name
    //const loginButton = screen.getByText("Login")
    expect(loginButton).toBeInTheDocument();
})

it("should render Header cpmponent with Cart 0 Item", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - (0 items)");
    expect(cartItems).toBeInTheDocument();
});

it("should render Header cpmponent with a Cart", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
});

it("should chnage login button to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login"}); // get spectific button by name
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout"});
    expect(logoutButton).toBeInTheDocument();
});
