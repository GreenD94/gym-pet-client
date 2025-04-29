import { ServerAction } from '../../types/blackbox.types';
import { SERVER_ACTIONS_INFO } from '../../constants/blackbox.constants';
import { useState } from 'react';

interface NavigationProps {
  activeAction: ServerAction;
  onActionChange: (action: ServerAction) => void;
}

export function Navigation({ activeAction, onActionChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const actions = Object.keys(SERVER_ACTIONS_INFO) as ServerAction[];

  return (
    <div className="mb-8">
      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
        >
          <span className="font-medium text-gray-900">
            {SERVER_ACTIONS_INFO[activeAction].title}
          </span>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform ${
              isMobileMenuOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="mt-2 bg-white rounded-lg shadow-lg overflow-hidden">
            {actions.map((action) => (
              <button
                key={action}
                onClick={() => {
                  onActionChange(action);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full px-4 py-3 text-left transition-colors ${
                  activeAction === action
                    ? 'bg-blue-50 text-blue-600'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <div className="flex items-center">
                  <div className="flex-1">
                    <p className="font-medium">{SERVER_ACTIONS_INFO[action].title}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {SERVER_ACTIONS_INFO[action].description}
                    </p>
                  </div>
                  {activeAction === action && (
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="flex space-x-1 bg-white p-1 rounded-lg shadow-sm">
          {actions.map((action) => (
            <button
              key={action}
              onClick={() => onActionChange(action)}
              className={`flex-1 px-4 py-3 rounded-md transition-colors ${
                activeAction === action
                  ? 'bg-blue-500 text-white shadow-sm'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex flex-col items-center">
                <p className="font-medium">{SERVER_ACTIONS_INFO[action].title}</p>
                <p className="text-sm mt-1 opacity-80">
                  {SERVER_ACTIONS_INFO[action].description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 