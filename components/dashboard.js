import '../styles/dashboard.css';

function Dashboard(){
    return(
        <div className="dashboard-wrapper">
            <aside className="dashboard-sidebar">
                <div className="dashboard-brand">Ethicure</div>
                <nav className="sidebar-nav">
                    <div className="nav-item active">Dashboard</div>
                    <div className="nav-item">Devices</div>
                    <div className="nav-item">Reports</div>
                    <div className="nav-item">Your Data</div>
                    <div className="nav-item">Goals &amp; Limits</div>
                    <div className="nav-item">AI Assistant</div>
                    <div className="nav-item">Notifications</div>
                    <div className="nav-item">Settings</div>
                </nav>
            </aside>

            <main className="dashboard-main">
                <header className="dashboard-topbar">
                    <div className="profile">
                        <div className="profile-name">John Doe</div>
                        <div className="profile-location">Dubai, UAE</div>
                    </div>
                    <div className="topbar-meta">Last synced: 9:41PM</div>
                </header>

                <section className="dashboard-grid">
                    <div className="card card-heart" >
                        <div className="card-title">Heart Rate</div>
                        <div className="card-value">98 <span className="card-unit">bpm</span></div>
                        <div className="card-note">Last updated 10 mins ago</div>
                    </div>

                    <div className="card card-blood-sugar" >
                        <div className="card-title">Blood Sugar </div>
                        <div className="card-value">106 <span className="card-unit">bpm</span></div>
                        <div className="card-note">Last updated 10 mins ago</div>
                    </div>
                    
                    <div className="card card-steps">
                        <div className="card-title">Steps</div>
                        <div className="card-value">5,672<span className="card-unit">steps</span></div>
                        <div className="card-note">Last updated 10 mins ago</div>
                    </div>
                    
                    <div className="card card-calories">
                        <div className="card-title">Calories</div>
                        <div className="card-value">2,140<span className="card-unit">kcal</span></div>
                        <div className="card-note">Last updated 10 mins ago</div>
                    </div>

                    <div className="card card-oxygen">
                        <div className="card-title">Oxygen</div>
                        <div className="card-value">97<span className="card-unit">spO2%</span></div>
                        <div className="card-note">Last updated 10 mins ago</div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Dashboard;
