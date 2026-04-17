
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      header: {
        brandAr: 'أمان إيفر والرعاية الشاملة للخدمات الطبية',
        brandEn: 'AMAN EVER COMPANY & COMPREHENSIVE Care of Medical Services',
        home: 'Home',
        about: 'About Us',
        services: 'Our Services',
        features: 'Our Features',
        myBookings: 'My Bookings & Medical Consultations',
        merchantPlatform: 'Merchant Login Platform',
        amanDoctor: 'Doctor Login Platform',
        blog: 'Aman Blog',
        contact: 'Contact Us',
        login: 'Login',
        subscribe: 'Subscribe Now'
      },
      hero: {
        badge: 'AMAN EVER COMPANY & COMPREHENSIVE Care',
        slogan: 'Your need in an app, your world in a card',
        slides: [
          {
            title: 'AMAN EVER COMPANY & COMPREHENSIVE Care of Medical Services',
            description: 'All your medical, health, and cosmetic needs in one platform.. Save your time, and guarantee your quality.',
            message: 'Professional medical mediation and smart health solutions.',
            cta: 'Download the app now and start your health journey'
          },
          {
            title: 'Your Need in an App, Your World in a Card',
            description: 'Experience the future of healthcare with our integrated digital platform and smart electronic card.',
            message: 'Innovative digital health solutions that enhance quality of life.',
            cta: 'Join Aman Ever Now'
          },
          {
            title: 'Elite Doctors & Direct Care 24/7',
            description: 'Providing digital services and direct care from elite doctors around the clock for your safety.',
            message: 'The bridge between you and the best medical providers in the Kingdom.',
            cta: 'Start Your Consultation'
          },
          {
            title: 'Aman Ever Membership (Premier & VIP Cards)',
            description: 'Your gateway to direct discounts up to 80% on all medical and cosmetic services. Your health is more valuable with us.',
            message: 'Inclusivity and speed in one card.',
            cta: 'Get Your Card Now'
          },
          {
            title: 'Loyalty Program (Cashback)',
            description: 'Get cash back to your wallet with every use. Health that rewards you with every visit.',
            message: 'Savings that start from the first visit.',
            cta: 'Discover Cashback Benefits'
          },
          {
            title: 'Aman Points Wallet',
            description: 'Turn your medical bills into points and redeem them for exclusive gifts and discounts.',
            message: 'Every point equals a world of rewards.',
            cta: 'Join the Points World'
          },
          {
            title: 'Aman Ever Electronic Store',
            description: 'High-quality medical and cosmetic products at competitive prices and exclusive offers.',
            message: 'Shop smart and pay safely.',
            cta: 'Shop Now'
          }
        ],
        discoverNetwork: 'Discover Network'
      },
      floating: {
        urgentConsultation: 'Urgent Consultation',
        membershipRequest: 'Membership Request'
      },
      actions: {
        booking: {
          title: 'Book Medical Appointment',
          desc: 'Book your appointment with the doctor easily'
        },
        card: {
          title: 'Electronic Card',
          desc: 'Your health card is always with you'
        },
        homeCare: {
          title: 'Home Care',
          desc: 'Our medical services reach your home'
        }
      },
      features: {
        subtitle: 'Why are we the best?',
        title: 'Competitive Advantages',
        items: [
          { title: 'Total Inclusivity without Restrictions', desc: 'Our services and cards are available to all segments of society (citizens, residents, and visitors), and for all ages and health conditions without any restrictions or exceptions.' },
          { title: 'Wide and Easy Coverage', desc: 'We provide you with comprehensive geographical coverage without credit limits, and most importantly: our services do not require any prior approvals from the company.' },
          { title: 'Super Ease and Speed', desc: 'Instant issuance of the electronic card in a few seconds via the app, with a customer service team available to serve you around the clock.' },
          { title: 'Fast Medical Response (First Question Free)', desc: 'We guarantee you super fast response and replies within a maximum of 15 minutes in the "Ask a Doctor" service, and because your health matters to us, we made your first question and consultation completely free.' },
          { title: 'Medical Bookings & Instant Consultations', desc: 'Book your medical appointment and get an instant consultation with elite doctors in just seconds via the app.' },
          { title: 'Home Care Services', desc: 'Specialized nursing services, elderly care, home laboratory tests, physical therapy, and cupping; we bring an integrated medical team to your home.' },
          { title: 'Financial Benefits and a World of Savings', desc: 'We give you direct discounts up to 80%, in addition to cashback and an integrated points wallet within the loyalty program.' },
          { title: 'Flexible and Easy Payment Options', desc: 'We support all electronic payment methods, in addition to providing convenient installment payment services via (Tabby and Tamara) to facilitate your access to care.' },
          { title: 'Transparency and Reliability', desc: 'We believe in absolute transparency, as the app allows you to view real ratings of services and medical facilities by customers so you can make your decision with peace of mind.' }
        ],
        cta: 'Enjoy all these features now.. Download the Aman Ever app',
        servicesTitle: 'Our Services Package',
        servicesSubtitle: 'Innovative health solutions designed for your comfort and safety',
        searchPlaceholder: 'Search for the required service...',
        noResults: 'No services match your search',
        showAll: 'Show all services',
        services: [
          { name: 'Aman Ever Membership (Premier & VIP Cards)', desc: 'Your gateway to direct discounts up to 80% on all medical and cosmetic services. Issue your electronic card instantly via the app in seconds.' },
          { name: 'Loyalty Program (Cashback)', desc: 'Get cashback when purchasing the card or upon first use of services. Enjoy immediate financial returns to your wallet.' },
          { name: 'Aman Points Wallet', desc: 'Collect points with every invoice (every 100 SAR = 1 point = 1 SAR) and redeem them via the store or at medical facilities.' },
          { name: 'Instant Bookings & Consultations', desc: 'Book appointments with elite doctors without waiting. Online consultations via voice and video calls, or via "Ask a Doctor" (chat) service with guaranteed response speed.' },
          { name: 'Home Care Services', desc: 'Specialized nursing services, elderly care, home laboratory tests, physical therapy, and cupping (Hajama); we bring an integrated medical team to your home.' },
          { name: 'Aman Electronic Store', desc: 'A diverse store gathering medical and cosmetic products and services at discounted prices and non-stop exclusive offers.' },
          { name: 'Wide Medical Network', desc: 'Direct access to a wide network of hospitals, specialized centers, and pharmacies across the Kingdom.' },
          { name: 'Health & Wellness Network', desc: 'An integrated network including fitness clubs, sports clubs, and wellness centers for a healthier life.' }
        ],
        modals: {
          membership: {
            title: 'Aman Ever Membership (Premier & VIP)',
            content: 'About Inclusivity: "Aman Ever.. because your health is indivisible, we have gathered all medical, cosmetic, and preventive services for you in one card."\n\nAbout Speed: "With the click of a button.. we shorten the distances for you. Your appointments are booked, your consultations are ready, and our care reaches you wherever you are."\n\nAbout Trust: "From routine checkups to major surgeries; Aman Ever is your loyal partner in all stages of your health journey."\n\nMedical and Surgical Care and Surgeries: Full coverage for operations (major, medium, and minor) with the highest standards of precision.\n\nMaternity and Childhood: Integrated care including delivery operations (natural and cesarean) and pregnancy follow-up.\n\nChronic Diseases: Includes dialysis services and follow-up of critical cases.\n\nComprehensive Examinations: Medical checkups in all specialties, and laboratory and radiology services.\n\n[ Beauty and Care World ]: Dentistry: From periodic checkups to cosmetic and Hollywood smile. Laser and Beauty: The latest laser technologies, skin care, and specialized cosmetic operations.\n\n[ Digital and Home Services ]: Consultations at the click of a button: Book your appointment or get your medical consultation online in seconds. Home Care: An integrated medical staff reaches your doorstep with precision and safety.\n\nSuper ease and speed: Instant issuance of the electronic card in a few seconds via the app, with a customer service team available to serve you around the clock.\n\nEmergency and Urgent Care: Immediate response to cases that cannot wait.\n\nWhy do thousands choose the Aman Ever card? Because it is the only membership that gives you: Absolute inclusivity: Covers everything, from a laser session to heart surgeries and dialysis. Smart solutions: An online booking and consultation system that saves you the trouble of waiting. Home care: Professional medical services in the privacy of your home. Emergency support: Urgent care available at any time and from anywhere.',
            buttons: ['Aman Ever Card: Care that rewards you! Buy the card: and get the membership']
          },
          cashback: {
            title: 'More Affordable Health.. from the First Visit',
            content: 'With the loyalty program from Aman Ever, your medical payments return to you! When you buy the card, we give you the cashback advantage to use in your first purchase at our medical partners. Start your health journey with intelligence and savings.',
            mechanism: ['Benefit from Cashback: Direct cash discount upon first use in medical facilities.', 'Save more: Start an exceptional health experience from the first moment.']
          },
          points: {
            title: 'Your health is more precious.. and your purchases with us save you more!',
            content: 'Join the world of rewards with the smart points wallet loyalty program. Every purchase you make turns into points in your balance, to give you real discounts and exclusive gifts on your next visits. Start collecting now and make your healthcare less expensive.',
            mechanism: ['Buy: Order your services or products.', 'Collect: Points are added immediately to your wallet.', 'Save: Use them as a discount for your next purchases.']
          },
          bookings: {
            title: 'Instant Bookings & Consultations',
            content: 'Care across borders; we eliminate distances to put the best medical competencies at your service.\n\nSecure, encrypted, and certified consultations.. because your privacy is our top priority.\n\nA smart system that combines diagnostic accuracy and ease of access, for a healthier lifestyle.\n\nYour pulse matters to us: Instant medical consultation for emergency cases around the clock.\n\nGoodbye to waiting rooms: Talk to your specialist doctor now without prior appointments.\n\nHealth safety in your hands: Fast response, accurate diagnosis, and complete privacy.\n\nYour care doesn\'t wait.. Instant medical consultations and confirmed bookings with one click.\n\nYour doctor is with you.. wherever you are and at any time. Integrated healthcare via your screen.\n\nBecause health does not accept delay; we connect you with elite doctors at any time and from anywhere.',
            buttons: ['Consult your doctor now', 'Book your appointment with a click', 'Start the care journey']
          },
          homeCare: {
            title: 'Home Care Services',
            content: 'All your health needs reach you wherever you are. Integrated home care services, executed with professional precision, speed in response, and complete safety for you and your family.'
          },
          store: {
            title: 'Aman Ever Electronic Store',
            content: 'Aman Ever Store.. a world of options, quality we bet on, and prices that compete with expectations.\n\nEverything you need in one place; Aman Ever Store brings you diversity, quality, and ease of access.\n\nAman Ever: Your one-stop shop for services and products designed to elevate your lifestyle with the best value.\n\nShop with a touch, and pay smoothly: We have provided you with the latest and easiest secure payment methods, to enjoy a hassle-free shopping journey.\n\nFrom selection to arrival.. endless ease: Simple interface, fast payment, and customer service that always puts you first.\n\nAman Ever.. Shop smart, pay safely: An integrated digital experience that gives you confidence in every step.'
          },
          'medical-network': {
            title: 'Wide Medical Network',
            content: 'Direct access to a wide network of hospitals and specialized centers across the Kingdom. We provide you with the best medical competencies with discounts up to 80%.'
          },
          'health-network': {
            title: 'Health & Wellness Network',
            content: 'An integrated network including fitness clubs, sports clubs, and wellness centers. Enjoy a healthy lifestyle with exclusive offers for Aman Ever members.'
          },
          cta: 'Start the experience now.. Download the app'
        }
      },
      about: {
        subtitle: 'Who are we?',
        title: 'Your Smart Partner in the Care Journey',
        desc: 'We are a company specialized in technical and marketing mediation, managing a digital platform and smart applications that keep pace with the digital health transformation of the Kingdom\'s Vision 2030, and providing comprehensive and innovative care solutions. We aim to be the technical bridge that connects you with the best medical and health service providers in the Kingdom. We are distinguished by providing an integrated system that includes remote consultations, home care, and smart loyalty programs that guarantee you quality and savings at the same time.',
        identity: {
          title: 'Our Identity',
          desc: 'We are pioneers in merging technology with healthcare to facilitate your access to the best services.'
        },
        vision: {
          title: 'Our Vision',
          desc: 'To become the leading and primary platform in providing innovative digital health solutions that enhance quality of life.'
        },
        mission: {
          title: 'Our Mission',
          desc: 'Facilitating access for all segments of society to medical, cosmetic, and technical services with the highest quality standards. Elevating the patient experience by merging technology with direct care, and providing exclusive financial benefits that give our customers "the power of savings" and excellence.'
        }
      },
      network: {
        title: 'Aman Wide Network',
        medicalTab: 'Medical Network',
        healthTab: 'Health Network',
        medical: [
          { title: 'Major Hospitals', desc: 'Strategic partnerships with the finest and largest hospitals in the Kingdom' },
          { title: 'Specialized Complexes & Clinics', desc: 'Integrated medical centers in all neighborhoods and cities of the Kingdom' },
          { title: 'Teeth, Dermatology & Cosmetics', desc: 'Comprehensive care for skin, teeth, and aesthetic services' },
          { title: 'Eyes & Laser', desc: 'Advanced vision correction and eye health specialty centers' },
          { title: 'Physical Therapy', desc: 'Rehabilitation and specialized physiotherapy programs' },
          { title: 'Medical Supplies', desc: 'Highest quality equipment and home medical supplies' },
          { title: 'Certified Pharmacies', desc: 'Secure network for all your pharmaceutical needs 24/7' },
          { title: 'Full Lab & Imaging', desc: 'Access to all medical tests, imaging, and diagnostic labs' },
          { title: 'Maternity Care', desc: 'Integrated programs for pregnancy follow-up and maternal health' },
          { title: 'Surgical Operations', desc: 'Coverage for all types of major and minor surgeries' }
        ],
        health: [
          { title: 'Healthy Nutrition & Supplements', desc: 'Customized nutritional plans and high-quality supplements' },
          { title: 'Sports & Fitness Clubs', desc: 'Exclusive access to premium gyms and fitness centers' },
          { title: 'Optical Centers', desc: 'Leading providers for eyewear, contacts, and vision care' },
          { title: 'SPA & Massage', desc: 'Luxury wellness, relaxation, and physiotherapy massage services' }
        ]
      },
      nearbyProviders: {
        title: 'Service Providers Near You',
        subtitle: 'Find the best medical, health, and cosmetic services around your location',
        categories: {
          all: 'All',
          hospitals: 'Hospitals',
          clinics: 'Clinics',
          pharmacies: 'Pharmacies',
          beauty: 'Beauty Centers'
        },
        viewMap: 'View on Map',
        bookNow: 'Book Now',
        distance: 'km away'
      },
      discounts: {
        title: 'Strongest Exclusive Discounts',
        subtitle: 'Special and exclusive offers for Aman Ever subscribers only',
        viewAll: 'View All',
        discount: 'Discount',
        shareSuccess: 'Offer shared successfully!',
        copySuccess: 'Offer link copied to clipboard!',
        shareError: 'Sorry, sharing could not be completed.',
        cta: 'Get the offer now via the app'
      },
      nearby: {
        liveCenter: 'Live Monitoring Center',
        title: 'Aman Live',
        subtitle: 'Instant Smart Coverage',
        unitDistribution: 'Unit Distribution',
        activeProviders: 'Active Medical Providers',
        logsTitle: 'Live Operations Log',
        searchPlaceholder: 'Search for unit (Ambulance, Hospital, Doctor)...',
        trackingUnits: 'Tracking {{count}} Units',
        activeDetection: 'Active Detection System',
        scanningProtocol: 'Location Protocol',
        scanningLabels: ['Initializing...', 'Scanning Network...', 'Syncing Data...', 'Ready'],
        legend: {
          center: 'Medical Center',
          ambulance: 'Mobile Ambulance',
          doctor: 'Consultant Doctor'
        },
        startScan: 'Start Comprehensive Scan',
        noResults: 'No results found',
        noResultsDesc: 'Try searching for another unit',
        detectionSystem: 'Detection System',
        protocolTitle: 'Scanning Protocol',
        fieldLogs: 'Field Logs',
        distribution: 'Asset Distribution',
        geoNotSupported: 'Geolocation is not supported by your browser',
        geoSuccess: 'Location retrieved successfully',
        geoError: 'Could not retrieve your location',
        scanSteps: ['Initializing...', 'Scanning Network...', 'Syncing Data...'],
        logs: ['Emergency call received', 'Ambulance dispatched', 'Patient arrived at hospital'],
        randomLogs: ['Unit AE-04 moving to North', 'MC-JED-01 status: Active', 'AE-12-RESCUE on standby', 'AE-PRO-DR consultation started', 'MC-NORTH maintenance check']
      },
      blog: {
        title: 'Aman Blog',
        subtitle: 'Latest Trusted Health News & Tips',
        readMore: 'Read More',
        source: 'Source:',
        posts: [
          {
            id: 1,
            title: 'Importance of Regular Checkups in Early Disease Detection',
            summary: 'Periodic medical examinations are the cornerstone of maintaining public health, helping to discover health problems in their early stages.',
            category: 'Public Health',
            date: '2024-04-10',
            image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
            sourceName: 'World Health Organization (WHO)',
            sourceUrl: 'https://www.who.int'
          },
          {
            id: 2,
            title: 'Digital Health Transformation in Saudi Vision 2030',
            summary: 'How modern technologies and digital platforms like "Aman Ever" contribute to achieving health transformation goals.',
            category: 'Health Tech',
            date: '2024-04-12',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
            sourceName: 'Saudi Ministry of Health',
            sourceUrl: 'https://www.moh.gov.sa'
          },
          {
            id: 3,
            title: '5 Golden Tips for Maintaining Heart and Vascular Health',
            summary: 'Learn about the dietary and exercise habits recommended by experts to strengthen the heart muscle.',
            category: 'Prevention',
            date: '2024-04-14',
            image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
            sourceName: 'American Heart Association',
            sourceUrl: 'https://www.heart.org'
          }
        ]
      },
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Everything you need to know about Aman Ever services',
        moreQuestions: 'Do you have more inquiries?',
        contactSupport: 'Contact Technical Support',
        items: [
          { q: 'How can I activate the Aman Ever card?', a: 'You can activate the card instantly via the app as soon as the subscription is completed, and your electronic card will appear ready for use.' },
          { q: 'What is the discount percentage I will get?', a: 'Discounts reach up to 80% in some certified medical centers and laboratories within our wide network.' },
          { q: 'Can the card be used for all family members?', a: 'Yes, we provide family packages that allow you to add your family members to benefit from all medical care advantages.' },
          { q: 'How does the cashback program work?', a: 'Cash amounts are refunded to your electronic wallet with every use of medical services or purchase from the store.' }
        ]
      },
      footer: {
        desc: 'Your trusted partner in healthcare. We provide you and your family with the best medical services at one touch via our innovative app.',
        cr: 'Commercial Register: 7038166471',
        quickLinks: 'Quick Access',
        links: {
          about: 'About Aman Ever',
          services: 'Our Medical Services',
          features: 'Our Features',
          myBookings: 'My Bookings & Medical Consultations',
          network: 'Medical & Health Network',
          doctorPlatform: 'Doctor Login Platform',
          merchantPlatform: 'Merchant Platform',
          homeCare: 'Home Care Services',
          amanCards: 'About Aman Ever Cards & Packages',
          privacy: 'Privacy & Data Policy'
        },
        contactUs: 'Contact Us',
        downloadApp: 'Download App',
        address: 'Jeddah, Al-Baghdadiyah Al-Sharqiyah – Al-Baghdadiyah Plaza Building',
        customerService: 'Customer Service Number',
        whatsapp: 'WhatsApp',
        landline: 'Landline',
        rights: '© {{year}} AMAN EVER COMPANY & COMPREHENSIVE Care of Medical Services. All rights reserved.',
        terms: 'Terms and Conditions',
        dataPolicy: 'Data Policy',
        privacy: 'Privacy Policy',
        social: {
          facebook: 'Follow us on Facebook',
          instagram: 'Follow us on Instagram',
          snapchat: 'Add us on Snapchat',
          tiktok: 'Follow us on TikTok',
          x: 'Follow us on X',
          linkedin: 'Connect with us on LinkedIn',
          youtube: 'Subscribe to our YouTube channel'
        }
      },
      bookingsModal: {
        title: 'Your Instant Window to Elite Doctors',
        description: 'Experience a new level of healthcare with the Aman Ever booking system. We\'ve made it faster and more intuitive than ever, so you can focus on your health, not the waiting room. Discover the seamless experience through our app:',
        features: [
          { title: 'Instant & Confirmed Bookings', desc: 'Book appointments in seconds via voice or video calls with top-tier consultants.' },
          { title: 'Doctors Available 24/7', desc: 'Access expert medical care anytime, anywhere. Our doctors are always ready for you.' },
          { title: '"Ask a Doctor" Service', desc: 'Get quick, reliable medical answers via instant chat in less than 15 minutes.' },
          { title: 'Medical Insurance Support', desc: 'Seamlessly integrate your insurance for direct, hassle-free bookings.' },
          { title: 'Transparent Ratings', desc: 'Choose with confidence based on real feedback from our community of patients.' },
          { title: 'Manage Appointments Easily', desc: 'Track, reschedule, or cancel your appointments with a single tap.' }
        ],
        cta: 'To ensure the highest level of data security and provide you with the smoothest booking experience, our system is available exclusively through the Aman Ever app.',
        mainBtn: 'Download the App Now for a Seamless Booking Experience'
      },
      doctorPlatform: {
        title: 'Aman Doctor Platform: Technology that Serves the Patient.. and Empowers the Doctor',
        intro: 'Behind every successful consultation and easy booking in Aman Ever, stands a sophisticated control panel carefully designed to be the perfect link between the doctor and their patient.',
        patientColumn: {
          title: 'For Patients & Clients 🩺',
          features: [
            { title: 'Your Health in Organized Hands', desc: 'Thanks to the precise appointment management system, we guarantee no delays and providing care at its scheduled time.' },
            { title: 'Your Medical File is Safe & Available', desc: 'The system keeps your records and prescriptions electronically, so your doctor can follow your health history with the click of a button.' },
            { title: 'Uninterrupted Communication', desc: 'A built-in messaging system allows your doctor to stay in touch with you to follow up on your condition and answer your inquiries.' },
            { title: 'Quality Measured by Numbers', desc: 'We monitor performance constantly; the doctor\'s dashboard tracks "average waiting time" and "patient satisfaction rate" to ensure you get an exceptional experience (rated 4.8/5).' }
          ]
        },
        doctorColumn: {
          title: 'For Doctors & Care Providers 💼',
          features: [
            { title: 'Your Integrated Digital Clinic', desc: 'Manage your appointments, review records, and issue prescriptions with ease and flexibility from one screen.' },
            { title: 'Continuous Growth of Your Patient Base', desc: 'Track your total number of patients and growth rate easily, and stay in constant contact with them to enhance their loyalty.' },
            { title: 'Transparent Financial Dashboard', desc: 'Track your monthly earnings, payments, and financial growth rates with extreme accuracy and absolute transparency.' },
            { title: 'Organization that Doubles Your Productivity', desc: 'Track "this month\'s performance" and attendance rates, helping you improve your clinic\'s efficiency and reduce waiting times.' }
          ]
        },
        patientCta: 'Download the App and Start Your Treatment Journey',
        doctorCta: 'Join Our Network and Grow Your Digital Clinic'
      },
      error: {
        title: 'Sorry, an unexpected error occurred',
        desc: 'We are currently having difficulty loading this part. Please try again or refresh the page.',
        reload: 'Reload Page'
      }
    }
  },
  ar: {
    translation: {
      header: {
        brandAr: 'أمان إيفر والرعاية الشاملة للخدمات الطبية',
        brandEn: 'AMAN EVER COMPANY & COMPREHENSIVE Care of Medical Services',
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'خدماتنا',
        features: 'مميزاتنا',
        myBookings: 'حجوزاتي وإستشاراتي الطبية',
        merchantPlatform: 'منصة دخول التاجر',
        amanDoctor: 'منصة دخول الأطباء',
        blog: 'مدونة أمان',
        contact: 'تواصل معنا',
        login: 'تسجيل دخول',
        subscribe: 'اشترك الآن'
      },
      hero: {
        badge: 'أمان إيفر والرعاية الشاملة',
        slogan: 'احتياجك في تطبيق وعالمك في بطاقة',
        slides: [
          {
            title: 'أمان إيفر والرعاية الشاملة للخدمات الطبية',
            description: 'كل احتياجاتك الطبية والصحية والتجميلية في منصة واحدة.. وفر وقتك، واضمن جودتك.',
            message: 'وساطة طبية احترافية وحلول صحية ذكية.',
            cta: 'حمل التطبيق الآن وابدأ رحلتك الصحية'
          },
          {
            title: 'احتياجك في تطبيق، وعالمك في بطاقة',
            description: 'اختبر مستقبل الرعاية الصحية مع منصتنا الرقمية المتكاملة وبطاقتنا الإلكترونية الذكية.',
            message: 'حلول صحية رقمية مبتكرة ترتقي بجودة الحياة.',
            cta: 'انضم إلى أمان إيفر الآن'
          },
          {
            title: 'نخبة من الأطباء ورعاية مباشرة 24/7',
            description: 'تقديم الخدمات الرقمية والرعاية المباشرة لنخبة من الأطباء على مدار الساعة لسلامتكم.',
            message: 'الجسر التقني بينك وبين أفضل مقدمي الخدمات في المملكة.',
            cta: 'ابدأ استشارتك الآن'
          },
          {
            title: 'عضوية أمان إيفر (بطاقة بريمير – بطاقة VIP)',
            description: 'بوابتك للحصول على خصومات مباشرة تصل إلى 80% على كافة الخدمات الطبية والتجميلية. صحتك أغلى معنا.',
            message: 'شمولية وسرعة في بطاقة واحدة.',
            cta: 'احصل على بطاقتك الآن'
          },
          {
            title: 'برنامج الولاء (الكاش باك)',
            description: 'استرد مبالغ نقدية لمحفظتك مع كل استخدام. صحةٌ تُكافئك مع كل زيارة.',
            message: 'توفير يبدأ من أول زيارة.',
            cta: 'اكتشف مزايا الكاش باك'
          },
          {
            title: 'محفظة نقاط أمان',
            description: 'حوّل فواتيرك الطبية إلى نقاط واستبدلها بهدايا وخصومات حصرية.',
            message: 'كل نقطة تساوي عالماً من المكافآت.',
            cta: 'انظم لعالم النقاط'
          },
          {
            title: 'متجر أمان الإلكتروني',
            description: 'منتجات طبية وتجميلية عالية الجودة بأسعار تنافسية وعروض حصرية.',
            message: 'تسوق بذكاء وادفع بكل أمان.',
            cta: 'تسوق الآن'
          }
        ],
        discoverNetwork: 'اكتشف الشبكة'
      },
      floating: {
        urgentConsultation: 'إستشارة عاجلة',
        membershipRequest: 'طلب عضوية'
      },
      actions: {
        booking: {
          title: 'حجز موعد طبي',
          desc: 'احجز موعدك مع الطبيب بسهولة'
        },
        card: {
          title: 'البطاقة الإلكترونية',
          desc: 'بطاقتك الصحية دائماً معك'
        },
        homeCare: {
          title: 'خدمات الرعاية المنزلية',
          desc: 'خدماتنا الطبية تصلك للمنزل'
        }
      },
      features: {
        subtitle: 'لماذا نحن الأفضل؟',
        title: 'المميزات التنافسية',
        items: [
          { title: 'شمولية تامة بلا قيود', desc: 'خدماتنا وبطاقاتنا متاحة لجميع فئات المجتمع (مواطنين، مقيمين، وزوار)، ولكافة الأعمار والحالات الصحية دون أي قيود أو استثناءات.' },
          { title: 'تغطية واسعة وميسرة', desc: 'نقدم لك تغطية جغرافية شاملة بلا حدود ائتمانية، والأهم من ذلك: لا تتطلب خدماتنا أي موافقات مسبقة من الشركة.' },
          { title: 'سهولة وسرعة فائقة', desc: 'إصدار فوري للبطاقة الإلكترونية في ثوانٍ معدودة عبر التطبيق، مع فريق خدمة عملاء متاح لخدمتك على مدار الساعة.' },
          { title: 'استجابة طبية سريعة (سؤالك الأول مجاناً)', desc: 'نضمن لك في خدمة "اسأل طبيب" سرعة استجابة فائقة وردوداً خلال 15 دقيقة كحد أقصى، ولأن صحتك تهمنا، جعلنا سؤالك واستشارتك الأولى مجانية بالكامل.' },
          { title: 'حجوزات طبية واستشارات فورية', desc: 'احجز موعدك الطبي واحصل على استشارة فورية مع نخبة من الأطباء في ثوانٍ معدودة عبر التطبيق.' },
          { title: 'خدمات الرعاية المنزلية', desc: 'خدمات تمريضية متخصصة، رعاية كبار السن، فحوصات مخبرية منزلية، علاج طبيعي، وحجامة؛ نأتيك بفريق طبي متكامل إلى منزلك.' },
          { title: 'مزايا مالية وعالم من التوفير', desc: 'نمنحك خصومات مباشرة تصل إلى 80% ، بالإضافة إلى استرداد نقدي (كاش باك) ومحفظة نقاط متكاملة ضمن برنامج الولاء.' },
          { title: 'خيارات دفع مرنة وميسرة', desc: 'نمنحك كافة وسائل الدفع الإلكتروني، بالإضافة إلى توفير خدمات الدفع بالتقسيط المريح عبر (تابي وتمارا) لتسهيل حصولك على الرعاية.' },
          { title: 'الشفافية والموثوقية', desc: 'نؤمن بالشفافية المطلقة، حيث يتيح لك التطبيق الاطلاع على التقييمات الحقيقية للخدمات والمنشآت الطبية من قبل العملاء لتتخذ قرارك وأنت مطمئن.' }
        ],
        cta: 'استمتع بكل هذه المميزات الآن.. حمل تطبيق أمان إيفر',
        servicesTitle: 'باقة خدماتنا',
        servicesSubtitle: 'حلول صحية مبتكرة صممت لضمان راحتك وسلامتك',
        searchPlaceholder: 'ابحث عن الخدمة المطلوبة...',
        noResults: 'لا توجد خدمات تطابق بحثك',
        showAll: 'عرض جميع الخدمات',
        services: [
          { name: 'عضوية أمان إيفر (بطاقتي Premier و VIP)', desc: 'بوابتك للحصول على خصومات مباشرة تصل إلى 80% على كافة الخدمات الطبية والتجميلية. يمكنك إصدار بطاقتك الإلكترونية فوراً عبر التطبيق في ثوانٍ معدودة.' },
          { name: 'برنامج الولاء (الكاش باك)', desc: 'احصل على استرداد نقدي عند شراء البطاقة أو أول استخدام للخدمات. استمتع بعوائد مالية فورية لمحفظتك.' },
          { name: 'محفظة نقاط أمان', desc: 'اجمع النقاط مع كل فاتورة (كل 100 ريال = 1 نقطة = 1 ريال) واستبدلها عبر المتجر أو في المنشآت الطبية.' },
          { name: 'حجوزات واستشارات فورية', desc: 'حجز مواعيدك مع نخبة من الأطباء دون انتظار. استشارات أونلاين عبر الاتصال الصوتي والمرئي، أو عبر خدمة "اسأل طبيب" (شات) مع ضمان سرعة الاستجابة.' },
          { name: 'خدمات الرعاية المنزلية', desc: 'خدمات تمريضية متخصصة، رعاية كبار السن، فحوصات مخبرية منزلية، علاج طبيعي، وحجامة؛ نأتيك بفريق طبي متكامل إلى منزلك.' },
          { name: 'متجر أمان الإلكتروني', desc: 'متجر متنوع يجمع لك المنتجات والخدمات الطبية والتجميلية بأسعار مخفضة وعروض حصرية لا تتوقف.' },
          { name: 'الشبكة الطبية الواسعة', desc: 'وصول مباشر لشبكة واسعة وموثوقة من المستشفيات والمراكز المتخصصة والصيدليات في كافة أنحاء المملكة.' },
          { name: 'الشبكة الصحية والرياضية', desc: 'شبكة متكاملة تشمل نوادي اللياقة والأندية الرياضية والنوادي الصحية لنمط حياة أكثر حيوية.' }
        ],
        modals: {
          membership: {
            title: 'عضوية أمان إيفر (Premier & VIP)',
            content: 'عن الشمولية: "أمان إيفر.. لأن صحتك لا تتجزأ، جمعنا لك كل الخدمات الطبية، التجميلية، والوقائية في بطاقة واحدة."\n\nعن السرعة: "بضغطة زر.. نختصر لك المسافات. مواعيدك محجوزة، واستشاراتك جاهزة، ورعايتنا تصلك حيثما كنت."\n\nعن الثقة: "من الفحوصات الروتينية إلى العمليات الكبرى؛ أمان إيفر شريكك الوفي في كل مراحل رحلتك الصحية."\n\nالرعاية الطبية والجراحية والعمليات الجراحية: تغطية كاملة للعمليات (الكبرى، المتوسطة، والصغرى) بأعلى معايير الدقة.\n\nالأمومة والطفولة: رعاية متكاملة تشمل عمليات الولادة (الطبيعية والقيصرية) ومتابعة الحمل.\n\nالأمراض المزمنة: تشمل خدمات غسيل الكلى ومتابعة الحالات الحرجة.\n\nالفحوصات الشاملة: كشوفات طبية في كافة التخصصات، وخدمات المختبرات والأشعة.\n\n[ عالم التجميل والعناية ]: طب الأسنان: من الكشوفات الدورية إلى تجميل وابتسامة هوليود. الليزر والتجميل: أحدث تقنيات الليزر والعناية بالبشرة والعمليات التجميلية المتخصصة.\n\n[ الخدمات الرقمية والمنزلية ]: استشارات بضغطة زر: احجز موعدك أو احصل على استشارتك الطبية أونلاين في ثوانٍ. الرعاية المنزلية: طاقم طبي متكامل يصل إلى باب بيتك بدقة وأمان.\n\nسهولة وسرعة فائقة: إصدار فوري للبطاقة الإلكترونية في ثوانٍ معدودة عبر التطبيق، مع فريق خدمة عملاء متاح لخدمتك على مدار الساعة.\n\nالطوارئ والعناية العاجلة: استجابة فورية للحالات التي لا تحتمل الانتظار.\n\nلماذا يختار الآلاف بطاقة أمان إيفر؟ لأنها العضوية الوحيدة التي تمنحك: شمولية مطلقة: تغطي كل شيء، من جلسة الليزر إلى عمليات القلب وغسيل الكلى. حلولاً ذكية: نظام حجز واستشارات أونلاين يغنيك عن عناء الانتظار. رعاية منزلية: خدمات طبية احترافية في خصوصية منزلك. دعم الطوارئ: رعاية عاجلة متوفرة في أي وقت ومن أي مكان.',
            buttons: ['بطـاقـة أمـان إيـفـر: رعايةٌ تُكافئك! اشترِ البطاقة: واحصل على العضوية']
          },
          cashback: {
            title: 'صحة أوفر.. من أول زيارة',
            content: 'مع برنامج الولاء من أمان إيفر، مدفوعاتك الطبية تعود إليك! عند شراء البطاقة، نمنحك ميزة الكاش باك لاستخدامها في أول عملية شرائية لدى شركائنا الطبيين. ابدأ رحلتك الصحية بذكاء وتوفير.',
            mechanism: ['استفد من الكاش باك: خصم نقدي مباشر عند أول استخدام في المنشآت الطبية.', 'وفّر أكثر: ابدأ تجربة استثنائية من اللحظة الأولى.']
          },
          points: {
            title: 'صحتك أغلى.. ومشترياتك معنا توفّر لك أكثر!',
            content: 'انضم إلى عالم المكافآت مع برنامج الولاء محفظة النقاط الذكية. كل عملية شراء تقوم بها تتحول إلى نقاط في رصيدك، لتمنحك خصومات حقيقية وهدايا حصرية في زياراتك القادمة. ابدأ الجمع الآن واجعل رعايتك الصحية أقل تكلفة.',
            mechanism: ['اشترِ: اطلب خدماتك أو منتجاتك.', 'اجمع: تضاف النقاط فوراً لمحفظتك.', 'وفّر: استخدمها كخصم لمشترياتك القادمة.']
          },
          bookings: {
            title: 'حجوزات واستشارات فورية',
            content: 'رعاية عابرة للحدود؛ نلغي المسافات لنضع أفضل الكفاءات الطبية في خدمتك.\n\nاستشارات آمنة، مشفرة، ومعتمدة.. لأن خصوصيتك هي أولويتنا القصوى.\n\nمنظومة ذكية تجمع بين دقة التشخيص وسهولة الوصول، لنمط حياة أكثر صحة.\n\nنبضك يهمنا: استشارة طبية فورية للحالات الطارئة على مدار الساعة.\n\nوداعاً لغرف الانتظار: تحدث مع طبيبك المختص الآن دون مواعيد مسبقة.\n\nالأمان الصحي بين يديك: استجابة سريعة، تشخيص دقيق، وخصوصية تامة.\n\nرعايتكم لا تنتظر.. استشارات طبية فورية وحجوزات مؤكدة بنقرة واحدة.\n\nطبيبك معك.. أينما كنت وفي أي وقت. رعاية صحية متكاملة عبر شاشتك.\n\nلأن الصحة لا تقبل التأجيل؛ نصلك بنخبة الأطباء في أي زمان ومن أي مكان.',
            buttons: ['استشر طبيبك الآن', 'احجز موعدك بضغطة زر', 'ابدأ رحلة الرعاية']
          },
          homeCare: {
            title: 'خدمات الرعاية المنزلية',
            content: 'كل احتياجاتكم الصحية تصلكم حيثما كنتم. خدمات الرعاية منزلية متكاملة، تُنفذ بدقة احترافية، سرعة في الاستجابة، وأمان تام لك ولعائلتك.'
          },
          store: {
            title: 'متجر أمان إيفر الإلكتروني',
            content: 'متجر أمان إيفر.. عالمٌ من الخيارات، جودة نراهن عليها، وأسعارٌ تنافس التوقعات.\n\nكل ما تحتاجه في مكان واحد؛ متجر أمان إيفر يجمع لك التنوع، الجودة، وسهولة الوصول.\n\nأمان إيفر: متجرك الشامل لخدمات ومنتجات صُممت لترتقي بنمط حياتك بأفضل قيمة.\n\nتسوق بلمسة، وادفع بكل سلاسة: وفرنا لك أحدث وأسهل طرق الدفع الآمنة، لتستمتع برحلة تسوق خالية من العناء.\n\nمن الاختيار حتى الوصول.. سهولة لا تنتهي: واجهة بسيطة، دفع سريع، وخدمة عملاء تضعك دائماً في المقدمة.\n\nأمان إيفر.. تسوق بذكاء، ادفع بأمان: تجربة رقمية متكاملة تمنحك الثقة في كل خطوة.'
          },
          'medical-network': {
            title: 'الشبكة الطبية الواسعة',
            content: 'وصول مباشر لشبكة واسعة وموثوقة من المستشفيات والمراكز المتخصصة والصيدليات في كافة أنحاء المملكة. نوفر لك أفضل الكفاءات الطبية مع خصومات تصل إلى 80%.'
          },
          'health-network': {
            title: 'الشبكة الصحية والرياضية',
            content: 'شبكة متكاملة تشمل نوادي اللياقة والأندية الرياضية والنوادي الصحية لنمط حياة أكثر حيوية. عروض حصرية وخصومات مميزة لأعضاء أمان إيفر.'
          },
          cta: 'ابدأ التجربة الآن.. حمل التطبيق'
        }
      },
      about: {
        subtitle: 'من نحن؟',
        title: 'شريككم الذكي في رحلة الرعاية',
        desc: 'نحن شركة متخصصة في الوساطة التقنية والتسويقية، ندير منصة رقمية وتطبيقات ذكية مواكبة للتحول الرقمي الصحي لرؤية المملكة 2030، وتقدم تقدم حلولاً رعاية شاملة ومبتكرة. نهدف إلى أن نكون الجسر التقني الذي يربطك بأفضل مقدمي الخدمات الطبية والصحية في المملكة. نتميز بتقديم منظومة متكاملة تشمل الاستشارات عن بعد، الرعاية المنزلية، وبرامج الولاء الذكية التي تضمن لك الجودة والتوفير في آن واحد.',
        identity: {
          title: 'هويتنا',
          desc: 'نحن الرواد في دمج التقنية بالرعاية الصحية لتسهيل وصولك لأفضل الخدمات.'
        },
        vision: {
          title: 'رؤيتنا',
          desc: 'أن نصبح المنصة الرائدة والأولى في تقديم الحلول الصحية الرقمية المبتكرة التي ترتقي بجودة الحياة وتضمن السعادة للمجتمع.'
        },
        mission: {
          title: 'رسالتنا',
          desc: 'تسهيل وصول جميع فئات المجتمع للخدمات الطبية والتجميلية والتقنية بأعلى معايير الجودة. الارتقاء بتجربة المريض عبر دمج التكنولوجيا بالرعاية المباشرة، وتوفير مزايا مالية حصرية تمنح عملائنا "قوة التوفير" والتميز.'
        }
      },
      network: {
        title: 'شبكة أمان الواسعة',
        medicalTab: 'الشبكة الطبية',
        healthTab: 'الشبكة الصحية',
        medical: [
          { title: 'مستشفيات كبرى', desc: 'شراكات استراتيجية مع أرقى وأكبر المستشفيات في المملكة' },
          { title: 'مجمعات وعيادات تخصصية', desc: 'مراكز طبية متكاملة في كافة أحياء ومدن المملكة' },
          { title: 'الاسنان والجلدية والتجميل', desc: 'رعاية متكاملة لصحة الأسنان والجلدية وأحدث الخدمات التجميلية' },
          { title: 'العيون والليزر', desc: 'أفضل مراكز تصحيح النظر والعناية بصحة العيون بأحدث تقنيات الليزر' },
          { title: 'العلاج الطبيعي', desc: 'برامج إعادة التأهيل والعلاج الطبيعي التخصصي تحت إشراف خبراء' },
          { title: 'المستلزمات الطبية', desc: 'تأمين كافة الأجهزة والمستلزمات الطبية المنزلية بجودة عالية' },
          { title: 'صيدليات معتمده', desc: 'شبكة واسعة من كبرى الصيدليات لتأمين كافة احتياجاتكم الدوائية' },
          { title: 'جميع الكشوفات والتحاليل والأشعه', desc: 'وصول مباشر لكافة أنواع الفحوصات المخبرية والأشعة التشخيصية' },
          { title: 'متابعه الحمل', desc: 'برامج متابعة الحمل ورعاية الأمومة والطفولة في أرقى المراكز' },
          { title: 'كافة العمليات الجراحية', desc: 'تغطية شاملة للعمليات الجراحية الكبرى والصغرى بأعلى المعايير' }
        ],
        health: [
          { title: 'التغذية الصحية والمكملات الغذائية', desc: 'استشارات غذائية ومكملات معتمدة لنمط حياة أكثر صحة' },
          { title: 'الأندية الرياضية', desc: 'خصومات حصرية على اشتراكات أرقى مراكز اللياقة والأندية الرياضية' },
          { title: 'البصريات', desc: 'أفضل مزودي النظارات والعدسات والخدمات البصرية المعتمدة' },
          { title: 'السبأ SPA والمساج', desc: 'خدمات الرفاهية والمساج العلاجي لتعزيز الصحة والنشاط' }
        ]
      },
      nearbyProviders: {
        title: 'مقدمي خدمات بالقرب منك',
        subtitle: 'اكتشف أفضل الخدمات الطبية والصحية والتجميلية القريبة من موقعك',
        categories: {
          all: 'الكل',
          hospitals: 'مستشفيات',
          clinics: 'عيادات',
          pharmacies: 'صيدليات',
          beauty: 'مراكز تجميل'
        },
        viewMap: 'عرض على الخريطة',
        bookNow: 'احجز الآن',
        distance: 'كم بعيد'
      },
      discounts: {
        title: 'أقوى الخصومات الحصرية',
        subtitle: 'عروض مميزة وحصرية لمشتركي أمان إيفر فقط',
        viewAll: 'مشاهدة الكل',
        discount: 'خصم'
      },
      nearby: {
        liveCenter: 'مركز المتابعة الحية',
        title: 'أمان لايف',
        subtitle: 'تغطية ذكية فورية',
        unitDistribution: 'توزيع الوحدات',
        activeProviders: 'مزود طبي نشط حالياً',
        logsTitle: 'سجل العمليات المباشر',
        searchPlaceholder: 'بحث عن وحدة (إسعاف، مستشفى، طبيب)...',
        trackingUnits: 'Tracking {{count}} Units',
        activeDetection: 'نظام الكشف النشط',
        scanningProtocol: 'بروتوكول تحديد الموقع',
        scanningLabels: ['جاري التهيئة...', 'مسح الشبكة...', 'مزامنة البيانات...', 'جاهز'],
        legend: {
          center: 'مركز طبي',
          ambulance: 'إسعاف متحرك',
          doctor: 'طبيب استشاري'
        },
        startScan: 'بدء المسح الشامل',
        noResults: 'لا توجد نتائج',
        noResultsDesc: 'حاول البحث عن وحدة أخرى',
        detectionSystem: 'نظام الكشف',
        protocolTitle: 'بروتوكول المسح',
        fieldLogs: 'سجلات الميدان',
        distribution: 'توزيع الأصول',
        geoNotSupported: 'الموقع الجغرافي غير مدعوم في متصفحك',
        geoSuccess: 'تم تحديد الموقع بنجاح',
        geoError: 'تعذر تحديد موقعك',
        scanSteps: ['جاري التهيئة...', 'مسح الشبكة...', 'مزامنة البيانات...'],
        logs: ['تم استلام مكالمة طوارئ', 'تم إرسال سيارة إسعاف', 'وصل المريض للمستشفى'],
        randomLogs: ['وحدة AE-04 تتحرك شمالاً', 'حالة MC-JED-01: نشط', 'AE-12-RESCUE في وضع الاستعداد', 'بدء استشارة AE-PRO-DR', 'فحص صيانة MC-NORTH']
      },
      blog: {
        title: 'مدونة أمان',
        subtitle: 'أحدث الأخبار والنصائح الصحية الموثوقة',
        readMore: 'اقرأ المزيد',
        source: 'المصدر:',
        posts: [
          {
            id: 1,
            title: 'أهمية الفحوصات الدورية في الكشف المبكر عن الأمراض',
            summary: 'تعتبر الفحوصات الطبية الدورية حجر الزاوية في الحفاظ على الصحة العامة، حيث تساعد في اكتشاف المشكلات الصحية في مراحلها الأولى قبل تفاقمها.',
            category: 'صحة عامة',
            date: '2024-04-10',
            image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
            sourceName: 'منظمة الصحة العالمية (WHO)',
            sourceUrl: 'https://www.who.int'
          },
          {
            id: 2,
            title: 'التحول الرقمي الصحي في رؤية المملكة 2030',
            summary: 'كيف تساهم التقنيات الحديثة والمنصات الرقمية مثل "أمان إيفر" في تحقيق أهداف التحول الصحي وتسهيل وصول المواطنين للرعاية الطبية.',
            category: 'تقنية صحية',
            date: '2024-04-12',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
            sourceName: 'وزارة الصحة السعودية',
            sourceUrl: 'https://www.moh.gov.sa'
          },
          {
            id: 3,
            title: '5 نصائح ذهبية للحفاظ على صحة القلب والشرايين',
            summary: 'تعرف على العادات الغذائية والرياضية التي يوصي بها الخبراء لتقوية عضلة القلب والوقاية من أمراض الأوعية الدموية.',
            category: 'وقاية',
            date: '2024-04-14',
            image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
            sourceName: 'جمعية القلب الأمريكية',
            sourceUrl: 'https://www.heart.org'
          }
        ]
      },
      faq: {
        title: 'الأسئلة المتكررة',
        subtitle: 'كل ما يهمك معرفته عن خدمات أمان إيفر',
        moreQuestions: 'هل لديك المزيد من الاستفسارات؟',
        contactSupport: 'تواصل مع الدعم الفني',
        items: [
          { q: 'كيف يمكنني تفعيل بطاقة أمان إيفر؟', a: 'يمكنك تفعيل البطاقة فورياً عبر التطبيق بمجرد إتمام عملية الاشتراك، وستظهر بطاقتك الإلكترونية جاهزة للاستخدام.' },
          { q: 'ما هي نسبة الخصم التي سأحصل عليها؟', a: 'تصل الخصومات إلى 80% في بعض المراكز الطبية والمختبرات المعتمدة ضمن شبكتنا الواسعة.' },
          { q: 'هل يمكن استخدام البطاقة لجميع أفراد العائلة؟', a: 'نعم، نوفر باقات عائلية تتيح لك إضافة أفراد أسرتك للاستفادة من كافة مزايا الرعاية الطبية.' },
          { q: 'كيف يعمل برنامج الكاش باك؟', a: 'يتم استرداد مبالغ نقدية في محفظتك الإلكترونية عند كل استخدام للخدمات الطبية أو الشراء من المتجر.' }
        ]
      },
      footer: {
        desc: 'شريككم الموثوق في الرعاية الصحية. نوفر لك ولعائلتك أفضل الخدمات الطبية بلمسة واحدة عبر تطبيقنا المبتكر.',
        cr: 'سجل تجاري: 7038166471',
        quickLinks: 'روابط تهمك',
        links: {
          about: 'عن أمان إيفر',
          services: 'خدماتنا الطبية',
          features: 'مميزاتنا',
          myBookings: 'حجوزاتي وإستشاراتي الطبية',
          network: 'الشبكة الطبية والصحية',
          doctorPlatform: 'منصة دخول الأطباء',
          merchantPlatform: 'منصة دخول التاجر',
          homeCare: 'خدمات الرعاية المنزلية',
          amanCards: 'عن بطاقات وباقات أمان إيفر',
          privacy: 'الخصوصية وسياسة البيانات'
        },
        contactUs: 'تواصل معنا',
        downloadApp: 'حمل التطبيق',
        address: 'جدة، البغدادية الشرقية – مبنى البغدادية بلازا',
        customerService: 'رقم خدمة العملاء',
        whatsapp: 'واتساب',
        landline: 'الهاتف الثابت',
        rights: '© {{year}} أمان إيفر والرعاية الشاملة للخدمات الطبية. جميع الحقوق محفوظة.',
        terms: 'الشروط والأحكام',
        dataPolicy: 'سياسة البيانات',
        privacy: 'سياسة الخصوصية',
        social: {
          facebook: 'تابعنا على فيسبوك',
          instagram: 'تابعنا على انستغرام',
          snapchat: 'أضفنا على سناب شات',
          tiktok: 'تابعنا على تيك توك',
          x: 'تابعنا على إكس',
          linkedin: 'تواصل معنا عبر لينكد إن',
          youtube: 'اشترك في قناتنا على يوتيوب'
        }
      },
      bookingsModal: {
        title: 'نافذتك الفورية لنخبة الأطباء',
        description: 'اختبر مستوى جديداً من الرعاية الصحية مع نظام الحجوزات في تطبيق أمان إيفر. لقد جعلنا التجربة أسرع وأكثر سلاسة من أي وقت مضى، لتركز على صحتك بدلاً من الانتظار. اكتشف سهولة الحجز الفعلي عبر تطبيقنا:',
        features: [
          { title: 'حجوزات فورية ومؤكدة', desc: 'احجز موعدك في ثوانٍ عبر الاتصال الصوتي أو المرئي مع نخبة من الاستشاريين.' },
          { title: 'أطباء متاحون 24/7', desc: 'احصل على رعاية طبية خبيرة في أي وقت ومن أي مكان. أطباؤنا دائماً في انتظارك.' },
          { title: 'خدمة "اسأل طبيب"', desc: 'احصل على ردود طبية سريعة وموثوقة عبر الدردشة الفورية في أقل من 15 دقيقة.' },
          { title: 'دعم التأمين الطبي', desc: 'ادمج تأمينك الطبي بسلاسة للحصول على حجوزات مباشرة ودون عناء.' },
          { title: 'تقييمات شفافة', desc: 'اختر طبيبك بكل ثقة بناءً على تقييمات حقيقية من مجتمع مرضانا.' },
          { title: 'إدارة مواعيدك بسهولة', desc: 'تتبع، عدل، أو ألغِ مواعيدك بضغطة زر واحدة عبر هاتفك.' }
        ],
        cta: 'لضمان أعلى مستويات أمان بياناتك وتقديم تجربة الحجز الأكثر سلاسة وكفاءة، فإن نظامنا متاح حصرياً عبر تطبيق أمان إيفر.',
        mainBtn: 'حمل التطبيق الآن لتجربة حجز سلسة ومتكاملة'
      },
      doctorPlatform: {
        title: 'منصة "منصة دخول الأطباء": التكنولوجيا التي تخدم المريض.. وتُمكّن الطبيب',
        intro: 'خلف كل استشارة ناجحة وحجز ميسر في "أمان إيفر"، تقف لوحة تحكم متطورة صُممت بعناية لتكون حلقة الوصل المثالية بين الطبيب ومريضه.',
        patientColumn: {
          title: 'للمرضى والعملاء 🩺',
          features: [
            { title: 'صحتك في أيدٍ منظمة', desc: 'بفضل نظام إدارة المواعيد الدقيق، نضمن لك عدم التأخير وتقديم الرعاية في وقتها المحدد.' },
            { title: 'ملفك الطبي آمن ومتاح', desc: 'يحتفظ النظام بسجلاتك ووصفاتك الطبية إلكترونياً، ليتمكن طبيبك من متابعة تاريخك الصحي بضغطة زر.' },
            { title: 'تواصل لا ينقطع', desc: 'نظام مراسلات مدمج يتيح لطبيبك البقاء على تواصل معك لمتابعة حالتك والرد على استفساراتك.' },
            { title: 'جودة تقاس بالأرقام', desc: 'نحن نراقب الأداء باستمرار؛ لوحة الطبيب تتابع "متوسط وقت الانتظار" و"معدل رضا المرضى" لضمان حصولك على تجربة استثنائية (بتقييم 4.8/5).' }
          ]
        },
        doctorColumn: {
          title: 'للأطباء ومقدمي الرعاية 💼',
          features: [
            { title: 'عيادتك الرقمية المتكاملة', desc: 'أدر مواعيدك، استعرض السجلات، وأصدر الوصفات الطبية بكل سهولة ومرونة من شاشة واحدة.' },
            { title: 'نمو مستمر لقاعدة مرضاك', desc: 'تابع إجمالي عدد مرضاك ونسبة النمو بسهولة، وابقَ على تواصل دائم معهم لتعزيز ولائهم.' },
            { title: 'لوحة تحكم مالية شفافة', desc: 'تتبع أرباحك الشهرية، مدفوعاتك، ونسب النمو المالي بدقة متناهية وبشفافية مطلقة.' },
            { title: 'تنظيم يضاعف إنتاجيتك', desc: 'تتبع "أداء هذا الشهر" ومعدلات الحضور، مما يساعدك على تحسين كفاءة عيادتك وتقليل أوقات الانتظار.' }
          ]
        },
        patientCta: 'حمل التطبيق وابدأ رحلة علاجك',
        doctorCta: 'انضم لشبكتنا ونمِّ عيادتك الرقمية'
      },
      error: {
        title: 'عذراً، حدث خطأ غير متوقع',
        desc: 'نواجه حالياً صعوبة في تحميل هذا الجزء. يرجى المحاولة مرة أخرى أو تحديث الصفحة.',
        reload: 'إعادة تحميل الصفحة'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar', // Set Arabic as the default language
    fallbackLng: 'ar',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
