import { useState, useEffect } from 'react';
import {
    Calendar,
    MapPin,
    Users,
    Clock,
    Heart,
    Phone,
    ChevronRight,
    Search,
    Filter
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AnimatedCounter = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 1800;
        const increment = value / (duration / 16);

        const timer = setInterval(() => {
            start += increment;

            if (start >= value) {
                start = value;
                clearInterval(timer);
            }

            setCount(Math.floor(start));
        }, 16);

        return () => clearInterval(timer);
    }, [value]);

    return <span>{count.toLocaleString('en-IN')}</span>;
};

export default function BloodCamps() {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/contactus');
    };

    const handleNavigateRegistration = () => {
        navigate('/registration');
    };

    const upcomingCamps = [
        {
            id: 1,
            title: "Mega Blood Donation Drive 2025",
            date: "15th October 2025",
            time: "9:00 AM - 5:00 PM",
            venue: "District Hospital, Civil Lines, Moradabad",
            organizer: "IMA Moradabad",
            expectedDonors: 500,
            status: "upcoming",
            category: "mega"
        },
        {
            id: 2,
            title: "Community Blood Camp - Majhola",
            date: "22nd October 2025",
            time: "10:00 AM - 4:00 PM",
            venue: "Community Health Center, Majhola",
            organizer: "IMA Moradabad & Local Administration",
            expectedDonors: 200,
            status: "upcoming",
            category: "community"
        },
        {
            id: 3,
            title: "Corporate Blood Donation Camp",
            date: "28th October 2025",
            time: "11:00 AM - 3:00 PM",
            venue: "Tech Park, Moradabad Industrial Area",
            organizer: "IMA Moradabad",
            expectedDonors: 150,
            status: "upcoming",
            category: "corporate"
        },
        {
            id: 4,
            title: "Educational Institution Blood Drive",
            date: "5th November 2025",
            time: "9:00 AM - 2:00 PM",
            venue: "IFTM University Campus, Moradabad",
            organizer: "IMA Moradabad & IFTM",
            expectedDonors: 300,
            status: "upcoming",
            category: "educational"
        }
    ];

    const pastCamps = [
        {
            id: 5,
            title: "Independence Day Blood Donation Camp",
            date: "15th August 2025",
            venue: "IMA House, Moradabad",
            donorsParticipated: 450,
            unitsCollected: 425,
            status: "completed"
        },
        {
            id: 6,
            title: "World Blood Donor Day Camp",
            date: "14th June 2025",
            venue: "Multiple Locations across Moradabad",
            donorsParticipated: 800,
            unitsCollected: 750,
            status: "completed"
        },
        {
            id: 7,
            title: "Ramadan Blood Donation Drive",
            date: "25th March 2025",
            venue: "Moradabad Medical College",
            donorsParticipated: 320,
            unitsCollected: 305,
            status: "completed"
        }
    ];

    const stats = [
        {
            number: 150,
            suffix: "+",
            label: "Camps Organized",
            icon: Calendar
        },
        {
            number: 45000,
            suffix: "+",
            label: "Lives Saved",
            icon: Heart
        },
        {
            number: 15000,
            suffix: "+",
            label: "Regular Donors",
            icon: Users
        },
        {
            number: 1952,
            prefix: "Since ",
            label: "Serving Community",
            icon: Clock
        }
    ];

    const filteredCamps = upcomingCamps.filter((camp) => {
        const matchesFilter =
            selectedFilter === 'all' ||
            camp.category === selectedFilter;

        const matchesSearch =
            camp.title
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            camp.venue
                .toLowerCase()
                .includes(searchQuery.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-pink-50">

            {/* =====================================================
                HERO SECTION
            ====================================================== */}
            <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-10 sm:py-12 md:py-14 px-4 overflow-hidden">

                {/* Background Effects */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-5 left-5 sm:left-10 w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 bg-white rounded-full blur-3xl" />

                    <div className="absolute bottom-5 right-5 sm:right-10 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-pink-300 rounded-full blur-3xl" />
                </div>

                <div className="max-w-6xl mx-auto relative z-10">

                    <div className="text-center">

                        {/* Badge */}
                        <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/15 border border-white/20 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                            Indian Medical Association, Moradabad
                        </div>

                        {/* Title */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-normal font-libre">
                            Blood Donation Camps
                        </h1>

                        {/* Description */}
                        <p className="text-sm sm:text-base md:text-lg text-red-100 max-w-2xl mx-auto mb-5 sm:mb-6 leading-relaxed px-2 font-playfair tracking-wide">
                            Serving the community since 1952, organizing regular
                            blood donation camps across Moradabad to save lives.
                        </p>

                        {/* Hero Buttons */}
                        <div className="flex flex-col xs:flex-row sm:flex-row justify-center items-stretch sm:items-center gap-2.5 sm:gap-3 max-w-md sm:max-w-none mx-auto">

                            <button
                                onClick={handleNavigateRegistration}
                                className="
                                    w-full sm:w-auto
                                    px-5 sm:px-6
                                    py-2.5 sm:py-3
                                    bg-white
                                    text-red-600
                                    text-sm
                                    font-semibold
                                    rounded-lg
                                    hover:bg-red-50
                                    transition-all
                                    duration-200
                                    shadow-sm
                                    hover:shadow-md
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    cursor-pointer
                                "
                            >
                                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                                Register for Camp
                            </button>

                            <button
                                onClick={handleNavigate}
                                className="
                                    w-full sm:w-auto
                                    px-5 sm:px-6
                                    py-2.5 sm:py-3
                                    border
                                    sm:border-2
                                    border-white/80
                                    text-white
                                    text-sm
                                    font-semibold
                                    rounded-lg
                                    hover:bg-white
                                    hover:text-red-600
                                    transition-all
                                    duration-200
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    cursor-pointer
                                "
                            >
                                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                                Contact Us
                            </button>

                        </div>

                    </div>
                </div>
            </section>


            {/* =====================================================
                STATS SECTION
            ====================================================== */}
            <section className="max-w-6xl mx-auto px-3 sm:px-4 -mt-6 sm:-mt-7 md:-mt-8 relative z-20">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4">

                    {stats.map((stat, index) => {

                        const Icon = stat.icon;

                        return (
                            <div
                                key={index}
                                className="
                                    bg-white
                                    rounded-lg
                                    sm:rounded-xl
                                    shadow-md
                                    border
                                    border-gray-100
                                    px-2
                                    sm:px-4
                                    py-3
                                    sm:py-4
                                    md:py-5
                                    text-center
                                    hover:shadow-lg
                                    hover:-translate-y-0.5
                                    transition-all
                                    duration-200
                                "
                            >

                                {/* Icon */}
                                <div className="flex justify-center mb-1.5 sm:mb-2">
                                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-red-50 flex items-center justify-center">
                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                                    </div>
                                </div>

                                {/* Number */}
                                <div className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight tabular-nums">
                                    {stat.prefix && stat.prefix}

                                    <AnimatedCounter value={stat.number} />

                                    {stat.suffix && stat.suffix}
                                </div>

                                {/* Label */}
                                <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-1 leading-tight">
                                    {stat.label}
                                </div>

                            </div>
                        );
                    })}

                </div>
            </section>


            {/* =====================================================
                SEARCH & FILTER
            ====================================================== */}
            <section className="max-w-6xl mx-auto px-3 sm:px-4 mt-10 sm:mt-12 md:mt-14">

                <div className="bg-white rounded-xl shadow-md border border-gray-100 p-3 sm:p-4 md:p-5">

                    <div className="flex flex-col lg:flex-row gap-3 sm:gap-4">

                        {/* Search */}
                        <div className="flex-1 relative">

                            <Search
                                className="
                                    absolute
                                    left-3
                                    top-1/2
                                    -translate-y-1/2
                                    text-gray-400
                                    w-4
                                    h-4
                                    sm:w-5
                                    sm:h-5
                                "
                            />

                            <input
                                type="text"
                                placeholder="Search camps by title or location..."
                                value={searchQuery}
                                onChange={(e) =>
                                    setSearchQuery(e.target.value)
                                }
                                className="
                                    w-full
                                    pl-9
                                    sm:pl-10
                                    pr-4
                                    py-2.5
                                    sm:py-3
                                    text-sm
                                    border
                                    border-gray-200
                                    rounded-lg
                                    focus:ring-2
                                    focus:ring-red-500/30
                                    focus:border-red-500
                                    outline-none
                                    transition
                                "
                            />

                        </div>


                        {/* Filters */}
                        <div className="flex flex-wrap gap-2">

                            <button
                                onClick={() => setSelectedFilter('all')}
                                className={`
                                    flex-1
                                    sm:flex-none
                                    px-3
                                    sm:px-5
                                    py-2.5
                                    sm:py-3
                                    text-xs
                                    sm:text-sm
                                    rounded-lg
                                    font-semibold
                                    transition-all
                                    duration-200
                                    cursor-pointer
                                    ${selectedFilter === 'all'
                                        ? 'bg-red-600 text-white shadow-sm'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }
                                `}
                            >
                                All Camps
                            </button>

                            <button
                                onClick={() => setSelectedFilter('mega')}
                                className={`
                                    flex-1
                                    sm:flex-none
                                    px-3
                                    sm:px-5
                                    py-2.5
                                    sm:py-3
                                    text-xs
                                    sm:text-sm
                                    rounded-lg
                                    font-semibold
                                    transition-all
                                    duration-200
                                    cursor-pointer
                                    ${selectedFilter === 'mega'
                                        ? 'bg-red-600 text-white shadow-sm'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }
                                `}
                            >
                                Mega Drives
                            </button>

                            <button
                                onClick={() => setSelectedFilter('community')}
                                className={`
                                    flex-1
                                    sm:flex-none
                                    px-3
                                    sm:px-5
                                    py-2.5
                                    sm:py-3
                                    text-xs
                                    sm:text-sm
                                    rounded-lg
                                    font-semibold
                                    transition-all
                                    duration-200
                                    cursor-pointer
                                    ${selectedFilter === 'community'
                                        ? 'bg-red-600 text-white shadow-sm'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }
                                `}
                            >
                                Community
                            </button>

                        </div>

                    </div>

                </div>
            </section>


            {/* =====================================================
    UPCOMING CAMPS
====================================================== */}
            <section className="max-w-6xl mx-auto px-3 sm:px-4 mt-8 sm:mt-10">

                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-4 sm:mb-5">

                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                            Upcoming Blood Camps
                        </h2>

                        <p className="text-xs sm:text-sm text-gray-500 mt-1">
                            Join us and help save lives in your community.
                        </p>
                    </div>

                    <span className="
            self-start
            sm:self-auto
            text-xs
            text-gray-600
            bg-white
            border
            border-gray-200
            px-3
            py-1.5
            rounded-full
        ">
                        {filteredCamps.length} camps scheduled
                    </span>

                </div>


                {/* Camp Cards */}
                {filteredCamps.length > 0 ? (

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {filteredCamps.map((camp, index) => (

                            <div
                                key={camp.id}
                                data-aos="fade-up"
                                data-aos-delay={(index % 2) * 100}
                                className="
                        bg-white
                        rounded-xl
                        shadow-sm
                        hover:shadow-lg
                        border
                        border-gray-100
                        overflow-hidden
                        group
                        transition-all
                        duration-300
                    "
                            >

                                {/* ==============================
                        CARD HEADER
                    =============================== */}
                                <div className="
                        bg-gradient-to-r
                        from-red-600
                        to-red-700
                        px-4
                        py-3.5
                        sm:px-5
                        sm:py-4
                    ">

                                    <div className="flex items-start justify-between gap-3">

                                        <div className="min-w-0">

                                            {/* Category */}
                                            <span className="
                                    inline-flex
                                    items-center
                                    px-2
                                    py-0.5
                                    bg-white/15
                                    border
                                    border-white/10
                                    rounded-full
                                    text-[9px]
                                    sm:text-[10px]
                                    font-semibold
                                    text-white
                                    uppercase
                                    tracking-wide
                                    mb-1.5
                                ">
                                                {camp.category}
                                            </span>

                                            {/* Title */}
                                            <h3 className="
                                    text-base
                                    sm:text-lg
                                    font-bold
                                    text-white
                                    leading-snug
                                    truncate
                                ">
                                                {camp.title}
                                            </h3>

                                        </div>

                                        <div className="
                                w-8
                                h-8
                                rounded-lg
                                bg-white/10
                                flex
                                items-center
                                justify-center
                                flex-shrink-0
                            ">
                                            <Calendar className="w-4 h-4 text-white" />
                                        </div>

                                    </div>

                                </div>


                                {/* ==============================
                        CARD CONTENT
                    =============================== */}
                                <div className="px-4 py-4 sm:px-5 sm:py-4">

                                    <div className="space-y-2.5 mb-4">

                                        {/* Date */}
                                        <div className="flex items-center gap-2.5 text-gray-700">

                                            <Calendar className="
                                    w-4
                                    h-4
                                    text-red-600
                                    flex-shrink-0
                                " />

                                            <span className="text-sm font-medium">
                                                {camp.date}
                                            </span>

                                        </div>


                                        {/* Time */}
                                        <div className="flex items-center gap-2.5 text-gray-600">

                                            <Clock className="
                                    w-4
                                    h-4
                                    text-red-600
                                    flex-shrink-0
                                " />

                                            <span className="text-sm">
                                                {camp.time}
                                            </span>

                                        </div>


                                        {/* Venue */}
                                        <div className="flex items-start gap-2.5 text-gray-600">

                                            <MapPin className="
                                    w-4
                                    h-4
                                    text-red-600
                                    flex-shrink-0
                                    mt-0.5
                                " />

                                            <span className="
                                    text-sm
                                    leading-snug
                                    line-clamp-2
                                ">
                                                {camp.venue}
                                            </span>

                                        </div>


                                        {/* Expected Donors */}
                                        <div className="flex items-center gap-2.5 text-gray-600">

                                            <Users className="
                                    w-4
                                    h-4
                                    text-red-600
                                    flex-shrink-0
                                " />

                                            <span className="text-sm">
                                                Expected Donors:
                                                <span className="font-semibold text-gray-800 ml-1">
                                                    {camp.expectedDonors}+
                                                </span>
                                            </span>

                                        </div>

                                    </div>


                                    {/* Register Button */}
                                    <button
                                        onClick={handleNavigateRegistration}
                                        className="
                                w-full
                                px-4
                                py-2
                                bg-red-600
                                text-white
                                text-xs
                                sm:text-sm
                                font-semibold
                                rounded-lg
                                hover:bg-red-700
                                active:scale-[0.99]
                                transition-all
                                duration-200
                                flex
                                items-center
                                justify-center
                                gap-1.5
                                cursor-pointer
                            "
                                    >
                                        <Heart className="w-3.5 h-3.5" />
                                        Register Now
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                ) : (

                    /* No Results */
                    <div className="
            bg-white
            rounded-xl
            shadow-sm
            border
            border-gray-100
            p-8
            text-center
        ">

                        <Search className="w-9 h-9 text-gray-300 mx-auto mb-3" />

                        <h3 className="text-lg font-semibold text-gray-800">
                            No camps found
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                            Try changing your search or filter.
                        </p>

                    </div>

                )}

            </section>
            {/* =====================================================
                PAST CAMPS
            ====================================================== */}
            <section className="max-w-6xl mx-auto px-3 sm:px-4 mt-12 sm:mt-16 mb-12 sm:mb-16">

                <div className="mb-5 sm:mb-7">

                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        Past Blood Donation Camps
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        A record of our previous community initiatives.
                    </p>

                </div>


                <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">

                    {/* Mobile Horizontal Scroll */}
                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[700px]">

                            <thead className="bg-red-600 text-white">

                                <tr>

                                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-semibold">
                                        Camp Name
                                    </th>

                                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-semibold">
                                        Date
                                    </th>

                                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-semibold">
                                        Venue
                                    </th>

                                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-sm font-semibold">
                                        Donors
                                    </th>

                                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-sm font-semibold">
                                        Units Collected
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {pastCamps.map((camp, index) => (

                                    <tr
                                        key={camp.id}
                                        className={`
                                            ${index % 2 === 0
                                                ? 'bg-gray-50'
                                                : 'bg-white'
                                            }
                                            hover:bg-red-50
                                            transition
                                        `}
                                    >

                                        <td className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm">
                                            {camp.title}
                                        </td>

                                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 text-sm">
                                            {camp.date}
                                        </td>

                                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 text-sm">
                                            {camp.venue}
                                        </td>

                                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-center">

                                            <span className="
                                                inline-block
                                                px-2.5
                                                py-1
                                                bg-green-100
                                                text-green-800
                                                rounded-full
                                                text-xs
                                                sm:text-sm
                                                font-semibold
                                            ">
                                                {camp.donorsParticipated}
                                            </span>

                                        </td>

                                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-center">

                                            <span className="
                                                inline-block
                                                px-2.5
                                                py-1
                                                bg-red-100
                                                text-red-800
                                                rounded-full
                                                text-xs
                                                sm:text-sm
                                                font-semibold
                                            ">
                                                {camp.unitsCollected}
                                            </span>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </section>


            {/* =====================================================
                GUIDELINES
            ====================================================== */}
            <section className="max-w-6xl mx-auto px-3 sm:px-4 pb-12 sm:pb-16">

                <div className="text-center mb-7 sm:mb-8">

                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        Camp Guidelines
                    </h2>

                    <p className="text-sm text-gray-500 mt-2">
                        Important things to keep in mind before, during and after donation.
                    </p>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">


                    {/* Before Camp */}
                    <div className="
                        bg-white
                        rounded-xl
                        shadow-md
                        border
                        border-gray-100
                        p-5
                        sm:p-6
                    ">

                        <div className="
                            w-10
                            h-10
                            sm:w-12
                            sm:h-12
                            bg-red-100
                            rounded-full
                            flex
                            items-center
                            justify-center
                            mb-4
                        ">
                            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                            Before the Camp
                        </h3>

                        <ul className="space-y-2.5 text-sm sm:text-base text-gray-700">

                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Register in advance</span>
                            </li>

                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Get adequate sleep (6-8 hours)</span>
                            </li>

                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Eat a healthy meal</span>
                            </li>

                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Stay hydrated</span>
                            </li>

                        </ul>

                    </div>


                    {/* During Donation */}
                    <div className="
                        bg-white
                        rounded-xl
                        shadow-md
                        border
                        border-gray-100
                        p-5
                        sm:p-6
                    ">

                        <div className="
                            w-10
                            h-10
                            sm:w-12
                            sm:h-12
                            bg-red-100
                            rounded-full
                            flex
                            items-center
                            justify-center
                            mb-4
                        ">
                            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                            During Donation
                        </h3>

                        <ul className="space-y-2.5 text-sm sm:text-base text-gray-700">

                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Bring valid ID proof</span>
                            </li>

                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Relax during the process</span>
                            </li>

                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Follow staff instructions</span>
                            </li>

                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Takes only 10-15 minutes</span>
                            </li>

                        </ul>

                    </div>


                    {/* After Donation */}
                    <div className="
                        bg-white
                        rounded-xl
                        shadow-md
                        border
                        border-gray-100
                        p-5
                        sm:p-6
                    ">

                        <div className="
                            w-10
                            h-10
                            sm:w-12
                            sm:h-12
                            bg-red-100
                            rounded-full
                            flex
                            items-center
                            justify-center
                            mb-4
                        ">
                            <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                            After Donation
                        </h3>

                        <ul className="space-y-2.5 text-sm sm:text-base text-gray-700">

                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Rest for 10-15 minutes</span>
                            </li>

                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Drink plenty of fluids</span>
                            </li>

                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Avoid heavy exercise for 24 hours</span>
                            </li>

                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Keep the bandage on for 4-6 hours</span>
                            </li>

                        </ul>

                    </div>

                </div>

            </section>

        </div>
    );
}