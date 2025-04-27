# Gym App Project: Goals and Ideas Document

## Project Overview
A mobile application designed to increase gym attendance and member engagement through gamification, social features, and reward systems. The app aims to benefit both gym members (through engagement and rewards) and gym owners (through increased revenue and member retention).

## Core Objectives
1. Increase gym attendance and member retention
2. Create engaging user experiences
3. Generate additional revenue streams for gym owners
4. Build a community of motivated gym members
5. Implement sustainable reward systems

## Detailed Feature Ideas

### 1. Virtual Pet System
**Core Concept:** A virtual pet that requires gym visits for care and growth
**Refined Features:**
- Pet evolution based on consistent gym attendance
- Pet customization through earned points
- Pet health status tied to user's gym activity
- Special pet abilities unlocked through achievements
- Pet social features (pet playdates with other users' pets)

### 2. Mission System
**Core Concept:** Daily, weekly, and monthly challenges with rewards
**Refined Features:**
- Daily missions (e.g., "Complete 30 minutes of cardio")
- Weekly challenges (e.g., "Attend gym 4 times this week")
- Monthly achievements (e.g., "Complete 20 workouts this month")
- Progressive difficulty scaling
- Special event missions during holidays or gym promotions

### 3. Reward System
**Non-Profit Rewards:**
- Virtual pet accessories and customizations
- Achievement badges and titles
- Profile customization options
- Leaderboard positions
- Special pet evolutions

**Profit-Generating Rewards:**
- Social media content creation incentives
- Referral program bonuses
- Premium membership discounts
- Partner business discounts
- Exclusive class access

### 4. Social Features
**Core Concept:** Community building and peer motivation
**Refined Features:**
- Friend system with activity sharing
- Group challenges and competitions
- Social media integration
- Community events and meetups
- Anonymous accountability partners

### 5. Progress Tracking
**Core Concept:** Visual representation of user's fitness journey
**Refined Features:**
- Workout history and statistics
- Achievement timeline
- Pet evolution gallery
- Progress photos (optional)
- Milestone celebrations

### 6. Gamification Elements
**Core Concept:** Game-like mechanics to increase engagement
**Refined Features:**
- Experience points system
- Level progression
- Achievement badges
- Daily login bonuses
- Special event participation rewards

### 7. Revenue Generation Strategies
**For Gym Owners:**
- Premium membership tiers
- Special class access
- Personal training session discounts
- Merchandise discounts
- Partner business promotions

**For App:**
- In-app purchases for pet accessories
- Premium features subscription
- Sponsored challenges
- Partner business integration
- Advertising opportunities

### 8. Business Growth Dashboard
**Core Concept:** Analytics and management tools for gym owners
**Refined Features:**
- Real-time attendance analytics
- Member engagement metrics
- Revenue tracking and forecasting
- Social media impact analysis
- Member retention statistics
- Custom report generation
- ROI tracking for promotions
- Member feedback analysis
- Equipment usage statistics
- Peak hours identification

### 9. Exercise Management System
**Core Concept:** Comprehensive workout planning and tracking
**Refined Features:**
- Daily workout planner
- Exercise history tracking
- Future workout scheduling
- Exercise library with instructions
- Progress tracking per exercise
- Custom workout creation
- Workout templates
- Exercise difficulty ratings
- Equipment requirements
- Time estimation per exercise
- Rest period recommendations
- Workout sharing capabilities

### 10. Interactive Gym Map
**Core Concept:** Real-time visualization of gym activity
**Refined Features:**
- 2D interactive gym layout
- Real-time pet location tracking
- Equipment availability status
- Area occupancy indicators
- Pet activity status (active/sleeping)
- Workout zone highlighting
- Equipment usage statistics
- Peak area identification
- Social interaction hotspots
- Admin customization panel:
  - Equipment placement
  - Area definitions
  - Zone naming
  - Capacity settings
  - Maintenance scheduling
- Pet movement rules:
  - 15-minute active window
  - 10-minute sleep period
  - Automatic removal after inactivity
  - Location updates based on workout type
- Social features:
  - Pet interaction zones
  - Workout buddy finder
  - Group workout areas
  - Social hotspots

### 11. User Panels and Access Levels

#### Consumer Panel
**Core Concept:** Main interface for gym members
**Features:**
- Profile Management:
  - Personal information
  - Fitness goals
  - Progress tracking
  - Achievement history
  - Pet customization
- Workout Features:
  - Exercise library access
  - Workout planning
  - Progress tracking
  - Exercise history
  - Custom workout creation
- Social Features:
  - Friend system
  - Group challenges
  - Social media integration
  - Community events
- Pet System:
  - Pet care and evolution
  - Pet customization
  - Pet social features
- Mission System:
  - Daily missions
  - Weekly challenges
  - Monthly achievements
- Gym Map:
  - Real-time gym layout
  - Equipment availability
  - Pet location tracking
  - Social hotspots

#### Trainer Panel
**Core Concept:** Interface for fitness trainers
**Features:**
- Client Management:
  - Client profiles
  - Progress tracking
  - Workout history
  - Achievement monitoring
- Workout Planning:
  - Custom workout creation
  - Exercise library management
  - Workout templates
  - Progress tracking
- Communication:
  - Client messaging
  - Group announcements
  - Progress reports
  - Feedback system
- Schedule Management:
  - Session scheduling
  - Availability settings
  - Client bookings
  - Calendar integration
- Training Resources:
  - Exercise database
  - Training materials
  - Progress tracking tools
  - Client assessment tools

#### Admin Panel
**Core Concept:** Management interface for gym staff
**Features:**
- Gym Management:
  - Equipment tracking
  - Maintenance scheduling
  - Area management
  - Capacity monitoring
- User Management:
  - Member profiles
  - Trainer profiles
  - Access control
  - Account management
- Content Management:
  - Exercise database
  - Training materials
  - Announcements
  - Event scheduling
- Analytics:
  - Attendance tracking
  - Equipment usage
  - Peak hours
  - Member engagement
- Gym Map Management:
  - Layout editor
  - Equipment placement
  - Zone definitions
  - Capacity settings
- Communication:
  - Announcement system
  - Feedback management
  - Support ticket system
  - Emergency notifications

## Access Control Levels
1. Consumer (Basic Member)
   - Access to personal features
   - Social features
   - Basic workout tracking
   - Pet system

2. Premium Consumer
   - All basic features
   - Advanced workout planning
   - Priority support
   - Exclusive content

3. Trainer
   - Client management
   - Workout planning
   - Training resources
   - Communication tools

4. Senior Trainer
   - All trainer features
   - Content creation
   - Group management
   - Advanced analytics

5. Admin
   - Full system access
   - User management
   - Content management
   - Analytics access

6. Super Admin
   - All admin features
   - System configuration
   - Security settings
   - Backup management

## Security and Privacy
1. Role-based access control
2. Data encryption
3. Activity logging
4. Privacy settings
5. GDPR compliance
6. Data retention policies
7. Secure authentication
8. Session management

## Technical Requirements
1. Real-time data synchronization
2. Location tracking system
3. Admin dashboard with map editor
4. User activity monitoring
5. Automated status updates
6. Data visualization tools
7. Analytics processing
8. Mobile-responsive design
9. Offline functionality
10. Push notification system

## Success Metrics
1. Increased gym attendance rates
2. Higher member retention
3. Increased social media engagement
4. Growth in premium features adoption
5. Positive user feedback and ratings
6. Revenue growth for gym owners
7. Community engagement metrics

## Next Steps
1. Prioritize feature development
2. Create detailed user stories
3. Design user interface mockups
4. Develop MVP (Minimum Viable Product)
5. Plan beta testing phase
6. Gather user feedback
7. Iterate and improve
8. Implement admin dashboard
9. Develop gym map editor
10. Create exercise database

## Technical Architecture

### Project Structure
```
src/
├── features/
│   ├── admin/
│   │   ├── consumer-manager/
│   │   │   ├── containers/
│   │   │   ├── components/
│   │   │   ├── utils/
│   │   │   └── hooks/
│   │   ├── trainer-manager/
│   │   ├── gym-map-manager/
│   │   └── content-manager/
│   ├── consumer/
│   │   ├── profile/
│   │   ├── workouts/
│   │   ├── pet-system/
│   │   ├── missions/
│   │   └── social/
│   ├── trainer/
│   │   ├── client-management/
│   │   ├── workout-planner/
│   │   ├── schedule/
│   │   └── resources/
│   └── database/
│       ├── actions/
│       ├── schemas/
│       ├── types/
│       └── utils/
```

### Naming Conventions

#### Folder Names
- Use English
- All lowercase
- Words separated by hyphens
- Plural form
- Example: `consumer-manager`, `workout-planner`

#### File Names
- Use English
- All lowercase
- Words separated by hyphens
- Singular form
- Include folder type suffix
- Example: `create-consumer.container.tsx`, `button.component.tsx`, `trainer-routines.hook.ts`

### Technical Decisions

#### Frontend
- **Framework:** Next.js
- **Styling:** Tailwind CSS exclusively
- **Routing:** Next.js natural routing
- **State Management:** Server Actions
- **Component Structure:**
  - Containers: Main entry points for routes
  - Components: Reusable UI elements
  - Hooks: Custom React hooks
  - Utils: Helper functions

#### Backend
- **API:** Server Actions exclusively (no API routes)
- **Database:** [To be determined]
- **Authentication:** [To be determined]

#### Code Organization
- Vertical slicing by feature
- Feature-based folder structure
- Clear separation of concerns
- Modular and reusable components
- Type safety throughout the application

### Development Guidelines
1. Follow the established folder structure
2. Adhere to naming conventions
3. Use Server Actions for data mutations
4. Implement proper error handling
5. Maintain type safety
6. Write clean and maintainable code
7. Document complex logic
8. Follow React best practices
9. Optimize for performance
10. Ensure accessibility

## Design System

### Color Configuration
```typescript
// colors.config.ts
export const colors = {
  // Primary Colors
  background: {
    primary: '#010101',    // Main background color
    secondary: '#f7f9fc',  // Secondary background (header, footer)
  },
  text: {
    primary: '#f7f9fc',    // Main text color
    secondary: '#f7f9fc',  // Secondary text color
  },
  accent: {
    primary: '#19b5e9',    // Cards and primary accent
  },
  // Panel-Specific Colors
  panel: {
    admin: {
      accent: '#2d3748',   // Slate - Professional and reliable
      background: '#f4f6fa', // Light background for clarity
      text: '#1a202c',     // Dark text for readability
      highlight: '#48bb78', // Green for success actions
    },
    trainer: {
      accent: '#f6ad55',   // Orange - Energetic and motivational
      background: '#f7fafc', // Clean background
      text: '#2d3748',     // Dark text for readability
      highlight: '#4299e1', // Blue for action items
    },
    consumer: {
      accent: '#19b5e9',   // Brand blue - Familiar and engaging
      background: '#010101', // Dark background
      text: '#f7f9fc',     // Light text for contrast
      highlight: '#f6ad55', // Orange for calls to action
    },
  },
  // Semantic Colors
  status: {
    success: '#4CAF50',    // Success states
    error: '#F44336',      // Error states
    warning: '#FFC107',    // Warning states
    info: '#2196F3',       // Information states
  },
  // UI Elements
  ui: {
    border: '#E0E0E0',     // Border color
    divider: '#BDBDBD',    // Divider color
    overlay: 'rgba(0, 0, 0, 0.5)', // Overlay color
  }
}
```

### Panel-Specific Design Guidelines

#### Admin Panel
- **Purpose:** Management and oversight
- **Design Focus:**
  - Professional and reliable appearance
  - Clear data visualization
  - Efficient information hierarchy
  - Easy navigation for complex tasks
- **Color Usage:**
  - Use slate accent for primary actions
  - Green highlights for success states
  - Light background for clarity
  - Dark text for readability

#### Trainer Panel
- **Purpose:** Client management and training
- **Design Focus:**
  - Energetic and motivational
  - Clear client information
  - Easy workout planning
  - Quick access to resources
- **Color Usage:**
  - Orange accent for energy
  - Blue highlights for actions
  - Clean background
  - Dark text for readability

#### Consumer Panel
- **Purpose:** User engagement and motivation
- **Design Focus:**
  - Engaging and fun
  - Clear progress tracking
  - Easy social interaction
  - Motivational elements
- **Color Usage:**
  - Brand blue for familiarity
  - Orange highlights for calls to action
  - Dark background for focus
  - Light text for contrast

### Implementation Guidelines

#### 1. Theme Configuration
```typescript
// theme.config.ts
export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  // Panel-specific theme overrides
  getPanelTheme: (panel: 'admin' | 'trainer' | 'consumer') => ({
    ...colors.panel[panel],
    // Add panel-specific overrides
  }),
}
```

#### 2. Component Implementation
```typescript
// Example component with panel-specific styling
const Button = ({ panel, variant, children }) => {
  const theme = useTheme();
  const panelTheme = theme.getPanelTheme(panel);
  
  return (
    <button
      className={`
        ${panelTheme.accent}
        ${panelTheme.text}
        // Additional styling
      `}
    >
      {children}
    </button>
  );
};
```

#### 3. Dark Mode Support
- Implement dark mode for all panels
- Use CSS variables for dynamic theming
- Provide toggle in user settings
- Maintain accessibility in both modes

#### 4. Accessibility Requirements
- WCAG 2.1 AA compliance
- Color contrast ratios
- Screen reader support
- Keyboard navigation
- Focus indicators

#### 5. Maintenance Guidelines
- Regular color audits
- Accessibility testing
- Performance optimization
- Documentation updates
- User feedback integration

### Design System Documentation
1. **Color Palette**
   - Base colors
   - Panel-specific colors
   - Semantic colors
   - Usage guidelines

2. **Typography**
   - Font families
   - Size scale
   - Weight scale
   - Line heights

3. **Spacing**
   - Scale
   - Usage guidelines
   - Responsive adjustments

4. **Components**
   - Base components
   - Panel-specific variants
   - Usage examples
   - Accessibility guidelines

5. **Responsive Design**
   - Breakpoints
   - Mobile-first approach
   - Touch targets
   - Layout guidelines

## Notes
- Focus on user engagement and motivation
- Balance free and premium features
- Ensure sustainable reward systems
- Maintain data privacy and security
- Regular updates and new content
- Community feedback integration
- Real-time system reliability
- Admin tool usability
- Map update frequency
- Exercise data accuracy
- Clear role separation
- Secure access control
- Regular security audits
- User privacy protection
- Consistent styling system
- Accessible design
- Mobile-first approach
- Responsive design
- Theme consistency
- Panel-specific design
- Dark mode support
- Accessibility compliance
- Design system maintenance 