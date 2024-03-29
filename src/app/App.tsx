import { Header } from '@/components/header/header';
import { useGetUserQuery } from '@/lib/apis/auth-api';
import { useAppDispatch } from '@/lib/store/hooks';
import { setUser } from '@/lib/store/slices/user.slice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
    const { data, isLoading } = useGetUserQuery();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (data) {
            dispatch(setUser(data));
        }
    }, [data, dispatch]);

    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <Header />
                    <Outlet />
                </>
            )}
        </>
    );
}

export default App;
