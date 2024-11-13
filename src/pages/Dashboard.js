import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Dashboard = () => {
    const [stats, setStats] = useState({ totalProducts: 0, lowStock: 0 });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('dashboard-stats/');  // Adjust endpoint as needed
                setStats(response.data);
            } catch (error) {
                console.error("Failed to fetch dashboard stats:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Total Products: {stats.totalProducts}</p>
            <p>Low Stock Products: {stats.lowStock}</p>
        </div>
    );
};

export default Dashboard;
