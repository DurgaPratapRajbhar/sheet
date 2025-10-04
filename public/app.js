// Navigation menu and list functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create navigation menu
    const navMenu = document.createElement('div');
    navMenu.id = 'navigation-menu';
    navMenu.style.cssText = `
        position: fixed;
        left: 0;
        top: 0;
        width: 250px;
        height: 100%;
        background-color: #f8f9fa;
        padding: 20px;
        box-shadow: 2px 0 5px rgba(0,0,0,0.1);
        z-index: 1000;
        overflow-y: auto;
    `;
    
    navMenu.innerHTML = `
        <h3 style="margin-top: 0;">Navigation</h3>
        <ul id="menu-list" style="list-style-type: none; padding: 0;">
            <li style="margin-bottom: 10px;"><a href="/dashboard" style="text-decoration: none; color: #007bff; font-weight: bold;">Dashboard</a></li>
            <li style="margin-bottom: 10px;"><a href="/vcb-sch-conventional-loco" style="text-decoration: none; color: #007bff;">VCB SCH Conventional Loco</a></li>
            <li style="margin-bottom: 10px;"><a href="/vcb-aal-conventional-loco" style="text-decoration: none; color: #007bff;">VCB AAL Conventional Loco</a></li>
            <li style="margin-bottom: 10px;"><a href="/tm" style="text-decoration: none; color: #007bff;">TM</a></li>
            <li style="margin-bottom: 10px;"><a href="/panel-shop" style="text-decoration: none; color: #007bff;">Panel Shop</a></li>
            <li style="margin-bottom: 10px;"><a href="/rsi" style="text-decoration: none; color: #007bff;">RSI</a></li>
            <li style="margin-bottom: 10px;"><a href="/driving-desk" style="text-decoration: none; color: #007bff;">Driving Desk</a></li>
            <li style="margin-bottom: 10px;"><a href="/misc" style="text-decoration: none; color: #007bff;">Misc</a></li>
            <li style="margin-bottom: 10px;"><a href="/compressor-1000-lpm" style="text-decoration: none; color: #007bff;">Compressor 1000 LPM</a></li>
            <li style="margin-bottom: 10px;"><a href="/compressor-1750-lpm" style="text-decoration: none; color: #007bff;">Compressor 1750 LPM</a></li>
            <li style="margin-bottom: 10px;"><a href="/panto" style="text-decoration: none; color: #007bff;">Panto</a></li>
            <li style="margin-bottom: 10px;"><a href="/relay" style="text-decoration: none; color: #007bff;">Relay</a></li>
            <li style="margin-bottom: 10px;"><a href="/valve" style="text-decoration: none; color: #007bff;">Valve</a></li>
        </ul>
         
    `;
    
    document.body.appendChild(navMenu);
    
    // Adjust main content to accommodate the navigation menu
    const originalBodyPadding = document.body.style.paddingLeft || '20px';
    document.body.style.paddingLeft = '270px';
     
     
});