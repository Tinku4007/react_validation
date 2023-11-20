import AuthLayout from "../layout/AuthLayout";

const WithAuthLayout = (WrapperComponent) => {
    const WithAuth = (props) => (
        <AuthLayout>
            <WrapperComponent  {...props} />
        </AuthLayout>
    );  
    return WithAuth;
};

export default WithAuthLayout;