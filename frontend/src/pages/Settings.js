function Settings() {
  return (
    <div className="container">
      <h2>Settings</h2>
      <label>
        <input type="checkbox" /> Dark Mode
      </label><br />
      <label>
        <input type="checkbox" /> Email Notifications
      </label><br />
      <button>Save Settings</button>
    </div>
  );
}

export default Settings;
