export default function NavbarTabs({ activeSection, onSectionChange }) {
  const tabs = [
    { id: 'growth', label: 'Baby Growth', icon: '👶' },
    { id: 'tracking', label: 'Baby Tracking', icon: '📊' },
    { id: 'reports', label: 'Reports', icon: '📋' },
    { id: 'calculator', label: 'Growth Calculator', icon: '🧮' },
    { id: 'vaccination', label: 'Vaccination Details', icon: '💉' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b-2 border-[#FF6EA6]/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-x-auto scrollbar-hide py-4 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onSectionChange(tab.id)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-2xl whitespace-nowrap 
                transition-all duration-300 transform hover:scale-105 font-medium
                ${activeSection === tab.id 
                  ? 'bg-gradient-to-r from-[#FF6EA6] to-[#7C4DFF] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}