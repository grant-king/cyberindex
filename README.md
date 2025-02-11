### CYBERINDEX SOURCE => (MYCTP.org) My Community Technology Platform

This repo 'cyberindex' holds the current source for a full-stack web application hosted on myctp.org. It is built with Django REST Framework (DRF) and Vue.js. It provides a robust platform for managing user-uploaded civic technology projects. This infrastructure pattern can be adapted and reused for any purpose.

## Overview
# My Community Technology Platform (MYCTP)

MYCTP is a comprehensive platform designed to connect and empower civic technology projects, making them more accessible and discoverable while fostering community engagement. The platform serves as a central hub for indexing, discovering, and connecting civic technology initiatives.

## Core Features

### Project Registry
- Seamless GitHub project registration and integration
- Automatic metadata extraction and project health metrics
- Location-based project organization
- Comprehensive project analytics and statistics

### Community Engagement
- Interactive community space with unique features:
  - PixelDance: A collaborative animation system
  - Session Console: Anonymous but persistent user experiences
  - Meditation/Reflection system: Community-driven content sharing
  - Avatar system for session tracking without traditional authentication

### Sponsor System
- Dedicated sponsor profiles and dashboards
- Message publication system for community engagement
- Credit-based engagement tracking
- Integrated payment processing with Stripe

### Technical Architecture

#### Backend (Django)
- REST API architecture using Django REST Framework
- Multiple specialized apps:
  - techprojects: Project registration and management
  - sponsors: Sponsor profile and message management
  - pixeldance: Interactive animation system
  - rebirth: Avatar and session management
  - buildforge: 3D visualization components
  - cashier: Payment processing

#### Frontend (Vue.js)
- Component-based architecture
- Pinia state management
- Tailwind CSS styling
- Real-time interactions and animations
- Responsive design

#### Key Technologies
- Django + DRF
- Vue.js 3
- Tailwind CSS
- PostgreSQL
- Azure Storage
- Stripe Integration

## Project Philosophy

MYCTP takes a unique approach to community building and civic technology:

1. **Anonymous but Persistent**: Uses innovative session management instead of traditional authentication
2. **Community First**: Focuses on fostering genuine connections and engagement
3. **Open Source**: Promotes transparency and collaboration
4. **Civic Impact**: Prioritizes projects that benefit communities
5. **Accessible**: Designed to be user-friendly and inclusive

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/myctp.git
cd myctp
```

2. Install backend dependencies:
```bash
python -m venv venv
source venv/bin/activate  # or `venv\Scripts\activate` on Windows
pip install -r requirements.txt
```

3. start frontend continuous update watch script, for any frontend you are working on. This will have vite build to Django's static after any saved change:
```bash
cd ....../scripts/
python watch.py
```

4. Set up environment variables:
```python
#create a .env file with the following:
DEBUG = 'True'
SECRET_KEY = 'make_up_your_own_key'
WEBSITE_HOSTNAME = 'localhost'
AVATAR_HASH_SECRET = 'make it up'

# optional or not needed for dev
STRIPE_API_KEY = 'easy to obtain your own'
STRIPE_PUBLIC_KEY = 'or skip this and stripe component will be broken'
SENDGRID_API_KEY = 'required for password reset'
MEDIA_STORAGE_CONNECTION_STRING = 'required for deployment'
STATIC_STORAGE_CONNECTION_STRING = 'required for deployment'
STATIC_STORAGE_URL = 'required for deployment'

```

5. Run migrations:
```bash
python manage.py migrate
```

5. create dev superuser:
```bash
python manage.py createsuperuser
```

6. Start development servers:
```bash
# Backend
python manage.py runserver

# Frontends will update automatically thanks to any watch.py scripts that are running. You can develop front and back ends together without hiccups.

## Contributing

We welcome contributions! Please someone consider contributing some contribution guidelines.

### Areas for Contribution
- Project discovery algorithms
- Community engagement features
- Documentation improvements
- UI/UX enhancements
- Testing and quality assurance

## License

This project is licensed under [The Unlicense](https://unlicense.org/).


