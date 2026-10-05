import { useState } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Heart,
  Video,
  Calendar,
  Award,
  Users,
  CalendarArrowUp,
  Home,
  Sparkles
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(
      activeDropdown === dropdown ? null : dropdown
    );
  };

  const navItems = [
    {
      name: 'Home',
      icon: Home,
      path: '/home',
      hasDropdown: false
    },

    {
      name: 'About Us',
      icon: Users,
      path: '/about',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'About IMA Moradabad',
          path: '/about'
        },
        {
          name: 'President Message',
          path: '/presidentmessage'
        },
        {
          name: 'Secretary Message',
          path: '/secretarymessage'
        },
        {
          name: 'Treasurer Message',
          path: '/treasurer-message'
        },
        {
          name: "Member's Directory",
          path: '/members-directory'
        }
      ]
    },

    {
      name: 'Events',
      icon: Calendar,
      path: '/events',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Upcoming Events',
          path: '/upcomingevents'
        },
        {
          name: 'Past Events',
          path: '/pastevents'
        }
      ]
    },

    {
      name: 'Achievements',
      icon: Award,
      path: '/achievements',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Awards & Honors',
          path: '/achievements'
        },
        {
          name: 'Nominate for Award',
          path: '/nominate'
        }
      ]
    },

    {
      name: 'Blood Bank',
      icon: Heart,
      path: '/blood-bank',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Donate Blood',
          path: '/blooddonate'
        },
        {
          name: 'Request Blood',
          path: '/requestblood'
        },
        {
          name: 'Blood Camps',
          path: '/bloodcamps'
        }
      ]
    },

    {
      name: 'Media',
      icon: Video,
      path: '/media',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Videos',
          path: '/videogallery'
        },
        {
          name: 'Gallery',
          path: '/imagegallery'
        },
        {
          name: 'News',
          path: '/newsgallery'
        }
      ]
    },

    {
      name: 'New Building',
      icon: Sparkles,
      path: '/new-ima',
      hasDropdown: false
    },

    {
      name: 'Contact Us',
      icon: Users,
      path: '/contactus',
      hasDropdown: false
    }
  ];

  return (
    <nav className="shadow-lg sticky top-0 z-50 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-2">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <button onClick={() => handleNavigation('/')}>
            <img
              src="/IMA_LOGO.png"
              alt="IMA Logo"
              className="size-20 object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5">

            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
              >

                <button
                  onClick={() =>
                    !item.hasDropdown &&
                    handleNavigation(item.path)
                  }
                  className="
                    flex items-center space-x-1
                    text-black
                    bg-white
                    hover:text-blue-600
                    font-medium
                    cursor-pointer
                    hover:border-b-4
                    duration-200
                    ease-in-out
                    transition-all
                  "
                >
                  <span className="font-semibold cursor-pointer">
                    {item.name}
                  </span>

                  {item.hasDropdown && (
                    <ChevronDown size={16} />
                  )}
                </button>

                {/* Desktop Dropdown */}
                {item.hasDropdown && (
                  <div
                    className="
                      absolute
                      top-full
                      left-0
                      mt-2
                      w-64
                      bg-white
                      rounded-lg
                      shadow-xl
                      border
                      border-gray-200
                      opacity-0
                      invisible
                      group-hover:opacity-100
                      group-hover:visible
                      transition-all
                      duration-300
                      transform
                      translate-y-2
                      group-hover:translate-y-0
                      z-50
                    "
                  >
                    <div className="py-2">

                      {item.dropdownItems?.map(
                        (subItem, subIndex) => (
                          <button
                            key={subIndex}
                            onClick={() =>
                              handleNavigation(subItem.path)
                            }
                            className="
                              block
                              w-full
                              text-left
                              px-4
                              py-3
                              text-gray-800
                              hover:text-black
                              hover:bg-gray-100
                              transition-colors
                              duration-200
                              text-sm
                              cursor-pointer
                            "
                          >
                            {subItem.name}
                          </button>
                        )
                      )}

                    </div>
                  </div>
                )}

              </div>
            ))}

          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">

            <button
              onClick={() =>
                handleNavigation('/blooddonate')
              }
              className="
                bg-red-500
                text-white
                px-5
                py-2.5
                text-sm
                rounded-full
                font-semibold
                transition-all
                duration-200
                shadow-md
                hover:shadow-lg
                transform
                hover:-translate-y-0.5
                hover:bg-red-600
                cursor-pointer
              "
            >
              Donate Blood
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="
              lg:hidden
              p-2.5
              rounded-xl
              text-gray-800
              hover:text-blue-600
              hover:bg-gray-100
              transition-all
              duration-200
              active:scale-95
            "
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="
            lg:hidden
            bg-white/95
            backdrop-blur-md
            shadow-2xl
            border-t
            border-gray-100
            animate-in
            fade-in
            slide-in-from-top-2
            duration-200
          "
        >

          <div
            className="
              max-h-[calc(100vh-5.5rem)]
              overflow-y-auto
              px-4
              py-3
              divide-y
              divide-gray-100
            "
          >

            {navItems.map((item) => (
              <div
                key={item.name}
                className="py-1"
              >

                {item.hasDropdown ? (

                  <button
                    onClick={() =>
                      toggleDropdown(item.name)
                    }
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      px-3
                      py-3
                      rounded-xl
                      text-gray-800
                      hover:text-blue-600
                      hover:bg-blue-50/70
                      transition-all
                      duration-200
                      font-medium
                    "
                  >

                    <div className="flex items-center space-x-3">

                      <div
                        className="
                          w-8
                          h-8
                          rounded-lg
                          bg-gray-100
                          flex
                          items-center
                          justify-center
                          text-gray-700
                        "
                      >
                        <item.icon className="w-4 h-4" />
                      </div>

                      <span className="font-semibold text-sm">
                        {item.name}
                      </span>

                    </div>

                    <ChevronDown
                      className={`
                        w-4 h-4
                        text-gray-500
                        transition-transform
                        duration-200
                        ${activeDropdown === item.name
                          ? 'rotate-180 text-blue-600'
                          : ''
                        }
                      `}
                    />

                  </button>

                ) : (

                  <button
                    onClick={() =>
                      handleNavigation(item.path)
                    }
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      px-3
                      py-3
                      rounded-xl
                      text-gray-800
                      hover:text-blue-600
                      hover:bg-blue-50/70
                      transition-all
                      duration-200
                      font-medium
                    "
                  >

                    <div className="flex items-center space-x-3">

                      <div
                        className="
                          w-8
                          h-8
                          rounded-lg
                          bg-gray-100
                          flex
                          items-center
                          justify-center
                          text-gray-700
                        "
                      >
                        <item.icon className="w-4 h-4" />
                      </div>

                      <span className="font-semibold text-sm">
                        {item.name}
                      </span>

                    </div>

                  </button>

                )}

                {/* Mobile Dropdown */}
                {item.hasDropdown &&
                  activeDropdown === item.name && (
                    <div
                      className="
                        bg-slate-50/80
                        rounded-xl
                        my-1.5
                        p-1.5
                        space-y-1
                        border
                        border-slate-200/60
                      "
                    >

                      {item.dropdownItems.map(
                        (subItem, idx) => (
                          <button
                            key={idx}
                            onClick={() =>
                              handleNavigation(
                                subItem.path
                              )
                            }
                            className="
                              w-full
                              text-left
                              px-4
                              py-2.5
                              rounded-lg
                              text-xs
                              sm:text-sm
                              font-medium
                              text-gray-700
                              hover:text-blue-700
                              hover:bg-white
                              transition-all
                              flex
                              items-center
                              gap-2
                            "
                          >

                            <span
                              className="
                                w-1.5
                                h-1.5
                                rounded-full
                                bg-blue-500
                              "
                            ></span>

                            {subItem.name}

                          </button>
                        )
                      )}

                    </div>
                  )}

              </div>
            ))}

            {/* Mobile Donate Button */}
            <div className="pt-4 pb-2">

              <button
                onClick={() =>
                  handleNavigation('/blooddonate')
                }
                className="
                  w-full
                  py-3.5
                  rounded-xl
                  bg-gradient-to-r
                  from-red-500
                  to-rose-600
                  hover:from-red-600
                  hover:to-rose-700
                  font-semibold
                  text-white
                  shadow-md
                  shadow-red-200
                  active:scale-[0.98]
                  transition-all
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <Heart className="w-5 h-5 fill-white" />
                Donate Blood
              </button>

            </div>

          </div>
        </div>
      )}

    </nav>
  );
}