// ==========================================
// MOCK DATABASE OF VERIFIED TUTORS (2025/2026)
// ==========================================
const TUTORS = [
    {
        id: "TUTOR-01",
        name: "Dr. Eleanor Vance",
        subject: "Mathematics",
        city: "Kuala Lumpur",
        price: 45,
        rating: 4.95,
        reviewCount: 42,
        responseTime: "Under 1 hr",
        avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
        credentials: "PhD in Applied Mathematics (Universiti Malaya)",
        safetyStatus: "Active Safeguarding DBS Cleared (June 2026)",
        badgeHash: "sha256-e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        "4d": {
            effectiveness: "4.9 / 5",
            progress: "+16.4% test avg",
            satisfaction: "98% parent approval",
            reliability: "100% on-time"
        }
    },
    {
        id: "TUTOR-02",
        name: "Marcus Cheng",
        subject: "Computer Science",
        city: "Singapore",
        price: 60,
        rating: 4.88,
        reviewCount: 29,
        responseTime: "Under 2 hrs",
        avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200",
        credentials: "BSc in Computer Science (Nanyang Technological University)",
        safetyStatus: "Active Safeguarding DBS Cleared (May 2026)",
        badgeHash: "sha256-fc197b9131d24cf45fd034e402868ff1c149afbf468fb9240c49599e3b0c4429",
        "4d": {
            effectiveness: "4.8 / 5",
            progress: "+14.8% test avg",
            satisfaction: "96% parent approval",
            reliability: "98.5% on-time"
        }
    },
    {
        id: "TUTOR-03",
        name: "Siti Aminah",
        subject: "Chemistry",
        city: "Penang",
        price: 35,
        rating: 4.92,
        reviewCount: 38,
        responseTime: "Under 1 hr",
        avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
        credentials: "MSc in Organic Chemistry (Universiti Sains Malaysia)",
        safetyStatus: "Active Safeguarding DBS Cleared (March 2026)",
        badgeHash: "sha256-991b7852b855e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495",
        "4d": {
            effectiveness: "4.9 / 5",
            progress: "+15.0% test avg",
            satisfaction: "97% parent approval",
            reliability: "100% on-time"
        }
    },
    {
        id: "TUTOR-04",
        name: "Jonathan Hargreaves",
        subject: "Physics",
        city: "Singapore",
        price: 80,
        rating: 4.97,
        reviewCount: 56,
        responseTime: "Under 30 mins",
        avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
        credentials: "MPhys in Physics (University of Oxford)",
        safetyStatus: "Active Safeguarding DBS Cleared (January 2026)",
        badgeHash: "sha256-dcc994a43e0dcc994a43fc1c149afbf4c8996fb92427ae41e4649b934ca49599",
        "4d": {
            effectiveness: "5.0 / 5",
            progress: "+18.2% test avg",
            satisfaction: "100% parent approval",
            reliability: "99.1% on-time"
        }
    },
    {
        id: "TUTOR-05",
        name: "Rachel Lim",
        subject: "Mathematics",
        city: "Johor Bahru",
        price: 30,
        rating: 4.82,
        reviewCount: 17,
        responseTime: "Under 3 hrs",
        avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
        credentials: "BEd in Secondary Mathematics (National Institute of Education)",
        safetyStatus: "Active Safeguarding DBS Cleared (February 2026)",
        badgeHash: "sha256-e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        "4d": {
            effectiveness: "4.7 / 5",
            progress: "+12.1% test avg",
            satisfaction: "94% parent approval",
            reliability: "97.8% on-time"
        }
    },
    {
        id: "TUTOR-06",
        name: "Devan Nair",
        subject: "Biology",
        city: "Kuala Lumpur",
        price: 40,
        rating: 4.90,
        reviewCount: 22,
        responseTime: "Under 1 hr",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
        credentials: "BSc in Biomedical Sciences (Universiti Kebangsaan Malaysia)",
        safetyStatus: "Active Safeguarding DBS Cleared (May 2026)",
        badgeHash: "sha256-b8d87734a5a2fc197b9131d24cf45fd034e402868ff1c149afbf468fb9240c495",
        "4d": {
            effectiveness: "4.9 / 5",
            progress: "+13.9% test avg",
            satisfaction: "96% parent approval",
            reliability: "100% on-time"
        }
    },
    {
        id: "TUTOR-07",
        name: "Claire Sterling",
        subject: "English Literature",
        city: "Online Only",
        price: 50,
        rating: 4.94,
        reviewCount: 31,
        responseTime: "Under 2 hrs",
        avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
        credentials: "MA in English Literature (King's College London)",
        safetyStatus: "Active Safeguarding DBS Cleared (April 2026)",
        badgeHash: "sha256-92427ae41e4649b934ca495991b7852b855e3b0c44298fc1c149afbf4c8996fb",
        "4d": {
            effectiveness: "4.9 / 5",
            progress: "+16.1% test avg",
            satisfaction: "99% parent approval",
            reliability: "98.8% on-time"
        }
    },
    {
        id: "TUTOR-08",
        name: "Alex Tan",
        subject: "Chemistry",
        city: "Kuala Lumpur",
        price: 25,
        rating: 4.78,
        reviewCount: 14,
        responseTime: "Under 4 hrs",
        avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200&h=200",
        credentials: "BSc in Chemistry (Universiti Malaya)",
        safetyStatus: "Active Safeguarding DBS Cleared (June 2026)",
        badgeHash: "sha256-034e402868ff1c149afbf468fb9240c49599e3b0c4429fc197b9131d24cf45fd",
        "4d": {
            effectiveness: "4.6 / 5",
            progress: "+11.4% test avg",
            satisfaction: "92% parent approval",
            reliability: "96.4% on-time"
        }
    },
    {
        id: "TUTOR-09",
        name: "Elena Rostova",
        subject: "Music",
        city: "Singapore",
        price: 70,
        rating: 4.96,
        reviewCount: 35,
        responseTime: "Under 1 hr",
        avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=200&h=200",
        credentials: "MA in Piano Performance (Royal College of Music)",
        safetyStatus: "Active Safeguarding DBS Cleared (April 2026)",
        badgeHash: "sha256-a3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b856",
        "4d": {
            effectiveness: "4.9 / 5",
            progress: "+15.8% skill avg",
            satisfaction: "99% parent approval",
            reliability: "100% on-time"
        }
    },
    {
        id: "TUTOR-10",
        name: "Master Vikram Mehta",
        subject: "Chess",
        city: "Kuala Lumpur",
        price: 50,
        rating: 4.91,
        reviewCount: 48,
        responseTime: "Under 1 hr",
        avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200",
        credentials: "International Chess Master (FIDE Certified Coach)",
        safetyStatus: "Active Safeguarding DBS Cleared (June 2026)",
        badgeHash: "sha256-f8491854b732e41e4649b934ca495991b7852b856e3b0c4429fc197b9131d24c",
        "4d": {
            effectiveness: "4.9 / 5",
            progress: "+22.4 Elo avg",
            satisfaction: "98% parent approval",
            reliability: "100% on-time"
        }
    },
    {
        id: "TUTOR-11",
        name: "Sophia Chen",
        subject: "Drawing",
        city: "Online Only",
        price: 40,
        rating: 4.85,
        reviewCount: 19,
        responseTime: "Under 2 hrs",
        avatarUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=200&h=200",
        credentials: "BFA in Fine Arts (Goldsmiths, University of London)",
        safetyStatus: "Active Safeguarding DBS Cleared (May 2026)",
        badgeHash: "sha256-4c8996fb92427ae41e4649b934ca495991b7852b856e3b0c4429fc197b9131d2",
        "4d": {
            effectiveness: "4.8 / 5",
            progress: "+12.8% portfolio score",
            satisfaction: "95% parent approval",
            reliability: "98.2% on-time"
        }
    },
    {
        id: "TUTOR-12",
        name: "Lucas Moretti",
        subject: "Coding",
        city: "Penang",
        price: 55,
        rating: 4.93,
        reviewCount: 31,
        responseTime: "Under 30 mins",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
        credentials: "BSc in Software Engineering (Universiti Sains Malaysia)",
        safetyStatus: "Active Safeguarding DBS Cleared (July 2026)",
        badgeHash: "sha256-fc197b9131d24cf45fd034e402868ff1c149afbf468fb9240c49599e3b0c4429",
        "4d": {
            effectiveness: "5.0 / 5",
            progress: "+19.5% test avg",
            satisfaction: "99% parent approval",
            reliability: "100% on-time"
        }
    },
    {
        id: "TUTOR-13",
        name: "Zara Vance",
        subject: "Languages",
        city: "Online Only",
        price: 45,
        rating: 4.89,
        reviewCount: 26,
        responseTime: "Under 1 hr",
        avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
        credentials: "BA in Linguistics (University of Cambridge)",
        safetyStatus: "Active Safeguarding DBS Cleared (April 2026)",
        badgeHash: "sha256-e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        "4d": {
            effectiveness: "4.8 / 5",
            progress: "+18.1% fluency improvement",
            satisfaction: "97% parent approval",
            reliability: "99.0% on-time"
        }
    }
];

// Optimize Unsplash images globally for dynamic avatars (WebP, reduced resolution, optimized quality)
TUTORS.forEach(t => {
    if (t.avatarUrl && t.avatarUrl.includes('unsplash.com')) {
        t.avatarUrl = t.avatarUrl
            .replace('auto=format', 'auto=format&fm=webp')
            .replace('q=80', 'q=70')
            .replace('w=200', 'w=120')
            .replace('h=200', 'h=120');
    }
});

// ==========================================
// CLIENT-SIDE ROUTER ENGINE
// ==========================================
class Router {
    constructor() {
        this.routes = {
            'home': 'home-view',
            'how-it-works': 'how-it-works-view',
            'find-tutor': 'find-tutor-view',
            'become-tutor': 'become-tutor-view',
            'parent-portal': 'parent-portal-view',
            'contact': 'contact-view'
        };
        
        window.addEventListener('hashchange', () => this.handleHashChange());
        // Execute immediately during script execution to route before images finish loading
        this.handleHashChange();
    }

    handleHashChange() {
        const hash = window.location.hash.substring(2) || 'home';
        const targetViewId = this.routes[hash] || 'home-view';
        
        // Hide all views
        document.querySelectorAll('.view-route').forEach(view => {
            view.style.display = 'none';
            view.classList.remove('view-transition');
        });

        // Show the active view
        const activeView = document.getElementById(targetViewId);
        if (activeView) {
            activeView.style.display = 'block';
            // Force redraw for animation transition
            activeView.offsetHeight; 
            activeView.classList.add('view-transition');
        }

        // Update Nav Menu Links Active state
        document.querySelectorAll('.nav-link').forEach(link => {
            const route = link.getAttribute('data-route');
            if (route === hash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Close mobile nav on transition
        document.getElementById('nav-menu').classList.remove('active');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Trigger page-specific action hooks
        this.triggerPageHooks(hash);
    }

    triggerPageHooks(route) {
        if (route === 'find-tutor') {
            renderTutors(TUTORS);
        } else if (route === 'home') {
            animateHomeRatings();
        }
    }
}

// Instantiate router
const router = new Router();

// ==========================================
// MOBILE NAVIGATION HAMBURGER MENU
// ==========================================
const mobileToggle = document.getElementById('mobile-nav-toggle');
const navMenu = document.getElementById('nav-menu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
});

// ==========================================
// HOME PAGE: 4D SOLUTIONS INTERACTIVE PREVIEW
// ==========================================
const metricDetails = {
    effectiveness: "<strong>Teaching Effectiveness:</strong> Calculated based on post-lesson concept check quizzes, student classroom engagement logs, and direct parent reviews after every billing cycle.",
    progress: "<strong>Student Progress:</strong> Calculated by auditing standard conceptual progress metrics mapped against the student's initial baseline learning gap diagnostic tests.",
    satisfaction: "<strong>Parent Satisfaction:</strong> Generated from weekly parent feedback ratings, check-ins, and direct message responsiveness scores verified by our advisory team.",
    reliability: "<strong>Professional Reliability:</strong> Measures a tutor's real-time schedule compliance: lessons starting precisely on time, cancellation logs, and general response turnaround speeds."
};

function animateHomeRatings() {
    const bars = document.querySelectorAll('.rating-bar-fill');
    bars.forEach(bar => {
        // Simple animation delay effect
        setTimeout(() => {
            const width = bar.parentElement.previousElementSibling.querySelector('.rating-bar-value').textContent;
            if (width.includes('%')) {
                bar.style.width = width;
            } else if (width.includes('/')) {
                const ratio = parseFloat(width.split('/')[0]) / 5;
                bar.style.width = `${ratio * 100}%`;
            }
        }, 150);
    });
}

document.querySelectorAll('.rating-bar-item').forEach(item => {
    item.addEventListener('click', () => {
        // Toggle active states
        document.querySelectorAll('.rating-bar-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        
        // Update readout text
        const metric = item.getAttribute('data-metric');
        document.getElementById('rating-detail-text').innerHTML = metricDetails[metric];
    });
});

// ==========================================
// FIND A TUTOR: FILTER & DISPLAY MECHANICS
// ==========================================
const searchInput = document.getElementById('search-input');
const subjectSelect = document.getElementById('subject-select');
const citySelect = document.getElementById('city-select');
const priceRange = document.getElementById('price-range');
const priceVal = document.getElementById('price-val');
const sortSelect = document.getElementById('sort-select');
const tutorGrid = document.getElementById('tutor-grid-container');
const tutorCountText = document.getElementById('tutor-count-text');

if (priceRange) {
    priceRange.addEventListener('input', () => {
        priceVal.textContent = `$${priceRange.value}`;
        filterTutors();
    });
}

// Add general change listeners to filters
[searchInput, subjectSelect, citySelect, sortSelect].forEach(element => {
    if (element) {
        element.addEventListener('input', filterTutors);
        element.addEventListener('change', filterTutors);
    }
});

function filterTutors() {
    const searchVal = searchInput.value.toLowerCase();
    const subjectVal = subjectSelect.value;
    const cityVal = citySelect.value;
    const maxPrice = parseInt(priceRange.value);
    const sortVal = sortSelect.value;

    let filtered = TUTORS.filter(tutor => {
        const matchesSearch = tutor.name.toLowerCase().includes(searchVal) || tutor.credentials.toLowerCase().includes(searchVal);
        const matchesSubject = subjectVal === 'all' || tutor.subject === subjectVal;
        const matchesCity = cityVal === 'all' || tutor.city === cityVal;
        const matchesPrice = tutor.price <= maxPrice;

        return matchesSearch && matchesSubject && matchesCity && matchesPrice;
    });

    // Handle Sorting
    if (sortVal === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortVal === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else { // default: sort by rating
        filtered.sort((a, b) => b.rating - a.rating);
    }

    renderTutors(filtered);
}

function renderTutors(tutorsArray) {
    if (!tutorGrid) return;
    
    tutorGrid.innerHTML = '';
    tutorCountText.textContent = `Showing ${tutorsArray.length} verified tutor${tutorsArray.length === 1 ? '' : 's'}`;

    if (tutorsArray.length === 0) {
        tutorGrid.innerHTML = `
            <div class="col-span-full py-16 text-center bg-surface-container-low rounded-2xl border border-dashed border-outline-variant/60 max-w-2xl mx-auto px-6">
                <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                    <span class="material-symbols-outlined text-3xl">search_off</span>
                </div>
                <h3 class="font-headline-sm text-on-surface mb-3">No Tutors Match Your Filters</h3>
                <p class="text-on-surface-variant text-sm mb-6 max-w-md mx-auto">Join our pre-launch waitlist to be matched directly as soon as new verified educators in this category complete their background audits.</p>
                <form id="waitlist-form" class="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                    <input type="email" class="bg-white border border-outline-variant px-4 py-2.5 rounded-lg text-sm text-on-surface focus:ring-1 focus:ring-primary focus:border-primary outline-none flex-grow" placeholder="Enter your email address" required>
                    <button type="submit" class="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-label-md hover:shadow-md hover:shadow-primary/20 active:scale-95 transition-all text-sm font-semibold">Join Waitlist</button>
                </form>
                <span id="waitlist-success" class="text-success text-xs font-bold mt-4 hidden">Successfully registered for waitlist notification!</span>
            </div>
        `;
        
        // Connect waitlist success submit
        const waitlistForm = document.getElementById('waitlist-form');
        const waitlistSuccess = document.getElementById('waitlist-success');
        waitlistSuccess.classList.add('hidden');
        
        waitlistForm.addEventListener('submit', (e) => {
            e.preventDefault();
            waitlistForm.classList.add('hidden');
            waitlistSuccess.classList.remove('hidden');
        });
        return;
    }

    tutorsArray.forEach(tutor => {
        const card = document.createElement('div');
        card.className = 'bg-surface-container-lowest border border-outline-variant hover:border-primary/50 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col w-full';
        card.innerHTML = `
            <!-- Card Header -->
            <div class="p-6 flex gap-4 border-b border-outline-variant/30">
                <div class="relative flex-shrink-0">
                    <img src="${tutor.avatarUrl}" loading="lazy" class="w-16 h-16 rounded-full object-cover border border-outline-variant" alt="${tutor.name}">
                    <span class="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#4ade80] border-2 border-white"></span>
                </div>
                <div class="flex flex-col justify-center">
                    <div class="inline-flex items-center gap-1 bg-green-500/10 text-[#2e7d32] dark:text-[#4ade80] text-[10px] font-bold px-2 py-0.5 rounded-full mb-1 w-fit">
                        <span class="material-symbols-outlined text-[10px] font-bold">verified</span> VERIFIED
                    </div>
                    <h3 class="font-headline-sm text-on-surface leading-tight text-lg">${tutor.name}</h3>
                    <span class="font-label-sm text-primary font-semibold">${tutor.subject}</span>
                </div>
            </div>
            
            <!-- Card Details -->
            <div class="p-6 flex-grow space-y-3.5">
                <div class="flex justify-between items-center text-sm">
                    <span class="text-on-surface-variant font-medium">Location</span>
                    <span class="text-on-surface font-semibold">${tutor.city}</span>
                </div>
                <div class="flex justify-between items-start text-sm">
                    <span class="text-on-surface-variant font-medium">Credentials</span>
                    <span class="text-on-surface font-semibold text-right text-xs max-w-[180px] leading-tight">${tutor.credentials}</span>
                </div>
                <div class="flex justify-between items-center text-sm">
                    <span class="text-on-surface-variant font-medium">DBS Registry</span>
                    <span class="text-[#2e7d32] dark:text-[#4ade80] font-semibold flex items-center gap-1 text-xs">
                        <span class="material-symbols-outlined text-xs">check_circle</span> Active Clearance
                    </span>
                </div>
                <div class="flex justify-between items-center text-sm border-b border-outline-variant/30 pb-3.5">
                    <span class="text-on-surface-variant font-medium">Response Time</span>
                    <span class="text-on-surface font-semibold text-xs bg-surface-container px-2.5 py-1 rounded-full">${tutor.responseTime}</span>
                </div>
                
                <!-- 4D Ratings Breakdown -->
                <div class="pt-2">
                    <p class="text-[10px] text-on-surface-variant/70 font-bold uppercase tracking-wider mb-3">Audited 4D Ratings:</p>
                    <div class="grid grid-cols-2 gap-3">
                        <div class="bg-surface-container-low p-2.5 rounded-lg border border-outline-variant/30">
                            <p class="text-[9px] uppercase tracking-wider text-on-surface-variant font-bold mb-1">Effectiveness</p>
                            <p class="text-xs font-bold text-on-surface flex items-center gap-1">
                                <span class="material-symbols-outlined text-[10px] text-amber-500" style="font-variation-settings: 'FILL' 1;">star</span> ${tutor["4d"].effectiveness}
                            </p>
                        </div>
                        <div class="bg-surface-container-low p-2.5 rounded-lg border border-outline-variant/30">
                            <p class="text-[9px] uppercase tracking-wider text-on-surface-variant font-bold mb-1">Progress</p>
                            <p class="text-xs font-bold text-primary">${tutor["4d"].progress}</p>
                        </div>
                        <div class="bg-surface-container-low p-2.5 rounded-lg border border-outline-variant/30">
                            <p class="text-[9px] uppercase tracking-wider text-on-surface-variant font-bold mb-1">Satisfaction</p>
                            <p class="text-xs font-bold text-on-surface">${tutor["4d"].satisfaction}</p>
                        </div>
                        <div class="bg-surface-container-low p-2.5 rounded-lg border border-outline-variant/30">
                            <p class="text-[9px] uppercase tracking-wider text-on-surface-variant font-bold mb-1">Reliability</p>
                            <p class="text-xs font-bold text-on-surface">${tutor["4d"].reliability}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Card Actions -->
            <div class="p-6 bg-surface-container-low border-t border-outline-variant/30 flex justify-between items-center mt-auto">
                <div>
                    <span class="text-[10px] text-on-surface-variant/70 font-bold uppercase tracking-wide block leading-none">Hourly Rate</span>
                    <span class="text-xl font-bold text-on-surface">$${tutor.price}<span class="text-xs text-on-surface-variant font-medium">/hr</span></span>
                </div>
                <button class="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-label-md hover:shadow-md hover:shadow-primary/20 active:scale-95 transition-all text-sm font-semibold" onclick="openBookingSimulator('${tutor.id}')">Book Lesson</button>
            </div>
        `;
        tutorGrid.appendChild(card);
    });
}

// ==========================================
// BECOME A TUTOR: DYNAMIC EARNINGS CALCULATOR (REMOVED / INACTIVE)
// ==========================================
/*
const hoursRange = document.getElementById('calc-hours-range');
const hoursVal = document.getElementById('calc-hours-val');
const incomeReadout = document.getElementById('calc-income-readout');
let currentRate = 40; // Default: Professional

if (hoursRange) {
    hoursRange.addEventListener('input', updateCalculator);
}

document.querySelectorAll('#calc-level-container button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('#calc-level-container button').forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        currentRate = parseInt(button.getAttribute('data-rate'));
        updateCalculator();
    });
});

function updateCalculator() {
    if (!hoursRange || !hoursVal || !incomeReadout) return;
    
    const hours = parseInt(hoursRange.value);
    hoursVal.textContent = hours;
    
    // Formula: Weekly Hours * Rate * 4.3 Weeks/Month * 88% payout (subtracting 12% commission)
    const monthlyIncome = Math.round(hours * currentRate * 4.3 * 0.88);
    incomeReadout.textContent = `$${monthlyIncome.toLocaleString()}`;
}
*/

// ==========================================
// TRUST & SAFETY: ID VERIFICATION LEDGER LOOKUP
// ==========================================
const checkerInput = document.getElementById('checker-id-input');
const checkerVerifyBtn = document.getElementById('checker-verify-btn');
const chkName = document.getElementById('chk-name');
const chkHash = document.getElementById('chk-hash');

const checkerStates = {
    idle: document.getElementById('checker-status-idle'),
    loading: document.getElementById('checker-status-loading'),
    success: document.getElementById('checker-status-success'),
    error: document.getElementById('checker-status-error')
};

if (checkerVerifyBtn) {
    checkerVerifyBtn.addEventListener('click', runLedgerQuery);
}

function runLedgerQuery() {
    if (!checkerInput) return;
    
    const queryId = checkerInput.value.trim().toUpperCase();
    if (!queryId) return;

    // Show loading state
    setCheckerState('loading');

    setTimeout(() => {
        const found = TUTORS.find(tutor => tutor.id === queryId);
        
        if (found) {
            chkName.textContent = found.name;
            chkHash.textContent = found.badgeHash;
            setCheckerState('success');
        } else {
            setCheckerState('error');
        }
    }, 1200);
}

function setCheckerState(state) {
    Object.keys(checkerStates).forEach(key => {
        if (checkerStates[key]) {
            checkerStates[key].style.display = (key === state) ? 'block' : 'none';
        }
    });
}

// ==========================================
// INTERACTIVE TUTOR MATCHING QUIZ LOGIC
// ==========================================
const QUIZ_QUESTIONS = [
    {
        id: 1,
        question: "What subject does the student require support with?",
        options: [
            { text: "Mathematics", value: "Mathematics" },
            { text: "Physics / Chemistry / Biology", value: "Science" },
            { text: "Computer Programming / Tech", value: "Computer Science" },
            { text: "English Reading / Literature", value: "English Literature" },
            { text: "Music / Chess / Creative Skills", value: "Skills" }
        ]
    },
    {
        id: 2,
        question: "Where should lessons take place?",
        options: [
            { text: "Online Live Virtual Classroom", value: "Online Only" },
            { text: "In-Person (Kuala Lumpur Area)", value: "Kuala Lumpur" },
            { text: "In-Person (Singapore Area)", value: "Singapore" },
            { text: "In-Person (Penang Area)", value: "Penang" }
        ]
    },
    {
        id: 3,
        question: "What is your target hourly rate budget?",
        options: [
            { text: "Under $40/hr (Graduate level)", value: "low" },
            { text: "$40 to $60/hr (Professional level)", value: "mid" },
            { text: "Over $60/hr (Expert Master level)", value: "high" }
        ]
    }
];

let quizCurrentIndex = 0;
let quizAnswers = {};

const quizModal = document.getElementById('quiz-modal');
const quizCloseBtn = document.getElementById('quiz-close-btn');
const quizQuestionBox = document.getElementById('quiz-question-box');
const quizPrevBtn = document.getElementById('quiz-prev-btn');
const quizProgressFill = document.getElementById('quiz-progress-fill');

// Trigger events
document.querySelectorAll('#trigger-quiz, #trigger-quiz-hero').forEach(btn => {
    btn.addEventListener('click', openQuiz);
});

if (quizCloseBtn) {
    quizCloseBtn.addEventListener('click', closeQuiz);
}

if (quizPrevBtn) {
    quizPrevBtn.addEventListener('click', handleQuizBack);
}

function openQuiz() {
    quizCurrentIndex = 0;
    quizAnswers = {};
    if (quizPrevBtn) quizPrevBtn.style.display = 'none';
    if (quizModal) quizModal.classList.add('active');
    renderQuizStep();
}

function closeQuiz() {
    if (quizModal) quizModal.classList.remove('active');
}

function renderQuizStep() {
    if (!quizQuestionBox || !quizProgressFill) return;

    const progressPercent = (quizCurrentIndex / QUIZ_QUESTIONS.length) * 100;
    quizProgressFill.style.width = `${progressPercent}%`;

    if (quizCurrentIndex >= QUIZ_QUESTIONS.length) {
        renderQuizResults();
        return;
    }

    const current = QUIZ_QUESTIONS[quizCurrentIndex];
    
    quizQuestionBox.innerHTML = `
        <h4 class="quiz-question">${current.question}</h4>
        <div class="quiz-options">
            ${current.options.map((opt, i) => `
                <button class="quiz-option-btn" onclick="handleQuizAnswer('${opt.value}')">${opt.text}</button>
            `).join('')}
        </div>
    `;

    if (quizCurrentIndex > 0) {
        if (quizPrevBtn) quizPrevBtn.style.display = 'block';
    } else {
        if (quizPrevBtn) quizPrevBtn.style.display = 'none';
    }
}

window.handleQuizAnswer = function(value) {
    quizAnswers[quizCurrentIndex] = value;
    quizCurrentIndex++;
    renderQuizStep();
};

function handleQuizBack() {
    if (quizCurrentIndex > 0) {
        quizCurrentIndex--;
        renderQuizStep();
    }
}

function renderQuizResults() {
    if (!quizQuestionBox || !quizProgressFill) return;
    
    quizProgressFill.style.width = "100%";
    if (quizPrevBtn) quizPrevBtn.style.display = 'none';

    // Extraction matches
    const chosenSubject = quizAnswers[0];
    const chosenLocation = quizAnswers[1];
    const chosenPriceTier = quizAnswers[2];

    // Filter tutors based on quiz answers
    let matched = TUTORS.filter(t => {
        // Subject matches
        let matchSub = false;
        if (chosenSubject === 'Science') {
            matchSub = ['Physics', 'Chemistry', 'Biology'].includes(t.subject);
        } else if (chosenSubject === 'Skills') {
            matchSub = ['Music', 'Chess', 'Drawing', 'Dance', 'Coding', 'Photography', 'Languages'].includes(t.subject);
        } else {
            matchSub = t.subject === chosenSubject;
        }

        // Location matches
        const matchLoc = chosenLocation === 'Online Only' || t.city === chosenLocation || t.city === 'Online Only';

        // Price matches
        let matchPrice = false;
        if (chosenPriceTier === 'low') matchPrice = t.price <= 40;
        else if (chosenPriceTier === 'mid') matchPrice = t.price > 40 && t.price <= 60;
        else matchPrice = t.price > 60;

        return matchSub && matchLoc && matchPrice;
    });

    // Fallback if zero matches
    if (matched.length === 0) {
        // Relax price and location parameters
        matched = TUTORS.filter(t => {
            if (chosenSubject === 'Science') {
                return ['Physics', 'Chemistry', 'Biology'].includes(t.subject);
            }
            if (chosenSubject === 'Skills') {
                return ['Music', 'Chess', 'Drawing', 'Dance', 'Coding', 'Photography', 'Languages'].includes(t.subject);
            }
            return t.subject === chosenSubject;
        }).slice(0, 2);
    }

    quizQuestionBox.innerHTML = `
        <h4 class="quiz-question" style="text-align: center; color: var(--color-success);">We Matched Your Ideal Tutor!</h4>
        <p style="color: var(--text-secondary); text-align: center; font-size: 0.95rem; margin-bottom: 24px;">Based on your subject needs, budget, and location preferences.</p>
        
        <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px;">
            ${matched.map(tutor => `
                <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: var(--border-radius-md); padding: 16px; display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <img src="${tutor.avatarUrl}" loading="lazy" style="width: 44px; height: 44px; border-radius: 50%; border: 1px solid var(--border-color);" alt="${tutor.name}">
                        <div>
                            <h5 style="font-size: 0.95rem; font-weight: 600;">${tutor.name}</h5>
                            <span style="font-size: 0.8rem; color: var(--color-primary);">${tutor.subject} • $${tutor.price}/hr</span>
                        </div>
                    </div>
                    <button class="btn btn-primary" onclick="triggerQuizBooking('${tutor.id}')" style="padding: 6px 12px; font-size: 0.8rem; border-radius: var(--border-radius-sm);">Book Match</button>
                </div>
            `).join('')}
        </div>

        <div style="text-align: center;">
            <button class="btn btn-secondary" onclick="closeQuiz(); window.location.hash = '#/find-tutor';" style="font-size: 0.85rem;">View All Verified Tutors</button>
        </div>
    `;
}

window.triggerQuizBooking = function(tutorId) {
    closeQuiz();
    openBookingSimulator(tutorId);
};

// ==========================================
// BOOKING SIMULATOR LOGIC
// ==========================================
const bookingModal = document.getElementById('booking-modal');
const bookingCloseBtn = document.getElementById('booking-close-btn');
const bookingForm = document.getElementById('booking-form');
const bookingSuccessBox = document.getElementById('booking-success-box');
const bookingDoneBtn = document.getElementById('booking-done-btn');

const bookingAvatar = document.getElementById('booking-avatar');
const bookingTutorName = document.getElementById('booking-tutor-name');
const bookingTutorSubject = document.getElementById('booking-tutor-subject');

window.openBookingSimulator = function(tutorId) {
    const tutor = TUTORS.find(t => t.id === tutorId);
    if (!tutor) return;

    // Load tutor details into fields
    bookingAvatar.src = tutor.avatarUrl;
    bookingTutorName.textContent = tutor.name;
    bookingTutorSubject.textContent = `${tutor.subject} • $${tutor.price}/hr`;

    // Reset forms
    bookingForm.style.display = 'flex';
    bookingSuccessBox.style.display = 'none';

    // Show modal
    if (bookingModal) bookingModal.classList.add('active');
};

if (bookingCloseBtn) {
    bookingCloseBtn.addEventListener('click', () => {
        bookingModal.classList.remove('active');
    });
}

if (bookingDoneBtn) {
    bookingDoneBtn.addEventListener('click', () => {
        bookingModal.classList.remove('active');
    });
}

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        bookingForm.style.display = 'none';
        bookingSuccessBox.style.display = 'block';
    });
}

// ==========================================
// DYNAMIC CONTACT & NEWSLETTER WAITLISTS (REMOVED / MERGED WITH AUDIENCE-TARGETED HANDLERS)
// ==========================================
/*
const contactForm = document.getElementById('contact-form');
const contactSuccessState = document.getElementById('contact-success-state');
const resetContactBtn = document.getElementById('reset-contact-btn');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        contactForm.style.display = 'none';
        contactSuccessState.style.display = 'block';
    });
}

if (resetContactBtn) {
    resetContactBtn.addEventListener('click', () => {
        contactForm.reset();
        contactForm.style.display = 'grid';
        contactSuccessState.style.display = 'none';
    });
}
*/

const newsletterForm = document.getElementById('newsletter-form');
const newsletterSuccess = document.getElementById('newsletter-success');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        newsletterForm.style.display = 'none';
        newsletterSuccess.style.display = 'block';
    });
}

// ==========================================
// INTERACTIVE CONSULTANT CHAT WIDGET
// ==========================================
const chatBody = document.getElementById('chat-body-container');
const chatInput = document.getElementById('chat-input');
const chatSendBtn = document.getElementById('chat-send-btn');

if (chatSendBtn && chatInput) {
    chatSendBtn.addEventListener('click', handleChatSubmit);
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            handleChatSubmit();
        }
    });
}

function handleChatSubmit() {
    if (!chatInput || !chatBody) return;
    const text = chatInput.value.trim();
    if (!text) return;

    // Render User Message
    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble chat-bubble-user leading-relaxed self-end text-xs max-w-[80%]';
    userBubble.textContent = text;
    chatBody.appendChild(userBubble);

    // Scroll chat body down
    chatBody.scrollTop = chatBody.scrollHeight;
    
    // Clear input
    chatInput.value = '';

    // Get active role
    const activeTab = document.querySelector('[id^="contact-tab-"].active');
    const role = activeTab ? activeTab.id.replace('contact-tab-', '') : 'student';

    // Create and append typing indicator bubble
    const typingIndicator = document.createElement('div');
    typingIndicator.id = 'chat-typing-indicator';
    typingIndicator.className = "chat-bubble chat-bubble-agent leading-relaxed self-start text-xs max-w-[80%] flex items-center gap-1";
    typingIndicator.innerHTML = `
        <span class="w-1 h-1 rounded-full bg-on-surface-variant/40 animate-bounce"></span>
        <span class="w-1 h-1 rounded-full bg-on-surface-variant/40 animate-bounce [animation-delay:0.2s]"></span>
        <span class="w-1 h-1 rounded-full bg-on-surface-variant/40 animate-bounce [animation-delay:0.4s]"></span>
    `;
    chatBody.appendChild(typingIndicator);
    chatBody.scrollTop = chatBody.scrollHeight;

    // Generate response based on role keywords
    let replyText = "";
    const lowerText = text.toLowerCase();
    
    if (role === 'parent') {
        if (lowerText.includes('math') || lowerText.includes('science') || lowerText.includes('english') || lowerText.includes('tutor') || lowerText.includes('help')) {
            replyText = "We have Stanford, Ivy League, and top-tier verified educators specializing in that field. Drop your requirements in the Placement Form and I will match your child with our top profiles immediately!";
        } else if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('fee') || lowerText.includes('budget') || lowerText.includes('rate')) {
            replyText = "Hourly rates average $40 to $80 depending on the subject complexity and educator background. Since we route 88% of your payment to the tutor, you get unmatched quality. Fill out the budget field in the form to get matched.";
        } else if (lowerText.includes('safe') || lowerText.includes('safeguard') || lowerText.includes('check') || lowerText.includes('verify')) {
            replyText = "Every educator on Tuition4All undergoes rigorous degree transcript audits and comprehensive national background checks. We also support monitored live streams and HD archives for parent safety.";
        } else {
            replyText = "That is a great question! I am here to help you coordinate the best placement. Please submit the Placement Form on the left so our academic advisory board can match you within 24 hours.";
        }
    } else if (role === 'tutor') {
        if (lowerText.includes('pay') || lowerText.includes('rate') || lowerText.includes('money') || lowerText.includes('percent')) {
            replyText = "Educators keep 88% of their hourly billing rates on Tuition4All. Payouts are deposited directly to your bank account weekly. Make sure to input your target billing rate in the application!";
        } else if (lowerText.includes('vet') || lowerText.includes('verify') || lowerText.includes('degree') || lowerText.includes('transcript')) {
            replyText = "We verify degree credentials and transcripts for all educators. Once you submit the Educator Form, our board will review it and clear your profile within 48 hours.";
        } else {
            replyText = "Excellent! We are always looking for stellar educators to join our vetted academic network. Fill out your qualifications in the form on the left to start the onboarding process.";
        }
    } else {
        // student role
        if (lowerText.includes('homework') || lowerText.includes('struggle') || lowerText.includes('math') || lowerText.includes('science') || lowerText.includes('hard')) {
            replyText = "No worries! Learning doesn't have to be stressful. Our mentors are incredibly supportive and make hard topics like algebra, calculus, or writing fun. Submit the mastery request and let's get you paired!";
        } else {
            replyText = "Hey! We are here to help you study confidently. Tell us what subjects are hard for you in the form, and we'll get you matched with a friendly mentor who gets it!";
        }
    }

    // Simulate Agent Typing & Reply
    setTimeout(() => {
        const indicator = document.getElementById('chat-typing-indicator');
        if (indicator) indicator.remove();

        const agentBubble = document.createElement('div');
        agentBubble.className = 'chat-bubble chat-bubble-agent leading-relaxed self-start text-xs max-w-[80%]';
        agentBubble.textContent = replyText;
        chatBody.appendChild(agentBubble);

        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1200);
}

// ==========================================
// HOW IT WORKS: AUDIENCE PERSPECTIVE TOGGLE
// ==========================================
const btnTabStudents = document.getElementById('btn-tab-students');
const btnTabTutors = document.getElementById('btn-tab-tutors');
const panelStudents = document.getElementById('panel-students');
const panelTutors = document.getElementById('panel-tutors');
const timelineStudents = document.getElementById('timeline-students');
const timelineTutors = document.getElementById('timeline-tutors');

if (btnTabStudents && btnTabTutors) {
    btnTabStudents.addEventListener('click', () => {
        btnTabStudents.classList.add('active');
        btnTabTutors.classList.remove('active');
        
        panelStudents.classList.remove('hidden');
        panelTutors.classList.add('hidden');
        
        timelineStudents.classList.remove('hidden');
        timelineTutors.classList.add('hidden');

        // Dynamically change visual graphic to Parent & Student focus
        const heroImg = document.getElementById('how-it-works-hero-img');
        if (heroImg) {
            heroImg.src = 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fm=webp&fit=crop&q=70&w=500';
            heroImg.alt = 'Parent and child studying together';
        }
    });

    btnTabTutors.addEventListener('click', () => {
        btnTabTutors.classList.add('active');
        btnTabStudents.classList.remove('active');
        
        panelTutors.classList.remove('hidden');
        panelStudents.classList.add('hidden');
        
        timelineTutors.classList.remove('hidden');
        timelineStudents.classList.add('hidden');

        // Dynamically change visual graphic to Professional Tutor focus
        const heroImg = document.getElementById('how-it-works-hero-img');
        if (heroImg) {
            heroImg.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fm=webp&fit=crop&q=70&w=500';
            heroImg.alt = 'Professional educator smiling face';
        }
    });
}

// ==========================================
// HOW IT WORKS: 4D RATING INTERACTIVE MOCKUP
// ==========================================
const ratingDims = {
    'effectiveness': {
        title: "Teaching Effectiveness",
        score: "4.95 / 5",
        badge: "Top 3% Global",
        desc: "Calculated based on post-lesson concept check quizzes, student classroom engagement logs, and direct parent reviews after every billing cycle. This ensures that the ratings are a true reflection of pedagogic quality.",
        barLabel: "Success Rate",
        barVal: "99%",
        progress: "99%"
    },
    'progress': {
        title: "Student Progress Tracking",
        score: "+16.4%",
        badge: "Average Improvement",
        desc: "Measures milestone academic progress by comparing current conceptual achievement metrics against the student's initial baseline learning diagnostic assessment. High-performing teachers show proven score acceleration.",
        barLabel: "Grade Acceleration",
        barVal: "88%",
        progress: "88%"
    },
    'satisfaction': {
        title: "Parent & Student Satisfaction",
        score: "98.2%",
        badge: "Parent Approval",
        desc: "Generated from weekly parent check-ins, responsive communications, and student review cards. Ratings incentivize teachers to maintain excellent pedagogical standards and high engagement.",
        barLabel: "Positive Feedback",
        barVal: "98%",
        progress: "98%"
    },
    'reliability': {
        title: "Professional Reliability",
        score: "100%",
        badge: "On-Time Compliance",
        desc: "Strict tracking of scheduling precision. Calculates exact lesson start compliance, low cancellation metrics, and prompt messaging turnaround times to ensure a frictionless educational experience.",
        barLabel: "Time Compliance",
        barVal: "100%",
        progress: "100%"
    }
};

const dimBtns = {
    'effectiveness': document.getElementById('dim-effectiveness'),
    'progress': document.getElementById('dim-progress'),
    'satisfaction': document.getElementById('dim-satisfaction'),
    'reliability': document.getElementById('dim-reliability')
};

const ratingPreviewTitle = document.getElementById('rating-preview-title');
const ratingPreviewScore = document.getElementById('rating-preview-score');
const ratingPreviewBadge = document.getElementById('rating-preview-badge');
const ratingPreviewDesc = document.getElementById('rating-preview-desc');
const ratingPreviewBarLabel = document.getElementById('rating-preview-bar-label');
const ratingPreviewBarVal = document.getElementById('rating-preview-bar-val');
const ratingPreviewProgress = document.getElementById('rating-preview-progress');
const ratingSvgRing = document.getElementById('rating-svg-ring');
const ratingSvgText = document.getElementById('rating-svg-text');

function select4DDimension(key) {
    // Reset all buttons
    Object.keys(dimBtns).forEach(k => {
        const btn = dimBtns[k];
        if (btn) {
            btn.classList.remove('active');
            // Reset icon container bg and text colors
            const iconDiv = btn.querySelector('.w-10');
            if (iconDiv) {
                iconDiv.classList.remove('bg-primary', 'text-white');
                iconDiv.classList.add('bg-outline-variant', 'text-on-surface-variant');
            }
        }
    });

    // Activate selected button
    const activeBtn = dimBtns[key];
    if (activeBtn) {
        activeBtn.classList.add('active');
        const iconDiv = activeBtn.querySelector('.w-10');
        if (iconDiv) {
            iconDiv.classList.remove('bg-outline-variant', 'text-on-surface-variant');
            iconDiv.classList.add('bg-primary', 'text-white');
        }
    }

    // Update mockup dashboard preview
    const data = ratingDims[key];
    if (data) {
        if (ratingPreviewTitle) ratingPreviewTitle.textContent = data.title;
        if (ratingPreviewScore) ratingPreviewScore.textContent = data.score;
        if (ratingPreviewBadge) ratingPreviewBadge.textContent = data.badge;
        if (ratingPreviewDesc) ratingPreviewDesc.textContent = data.desc;
        if (ratingPreviewBarLabel) ratingPreviewBarLabel.textContent = data.barLabel;
        if (ratingPreviewBarVal) ratingPreviewBarVal.textContent = data.barVal;
        if (ratingPreviewProgress) ratingPreviewProgress.style.width = data.progress;
        
        // Update SVG circle path and text overlay
        if (ratingSvgRing) {
            const pct = parseInt(data.progress);
            ratingSvgRing.setAttribute('stroke-dasharray', `${pct}, 100`);
        }
        if (ratingSvgText) {
            ratingSvgText.textContent = data.progress;
        }
    }
}

// Bind click events to 4D rating selector buttons
Object.keys(dimBtns).forEach(key => {
    const btn = dimBtns[key];
    if (btn) {
        btn.addEventListener('click', () => select4DDimension(key));
    }
});

// ==========================================
// AUDIENCE-TARGETED CONTACT TABS CONTROLLER
// ==========================================
const contactTabs = {
    parent: document.getElementById('contact-tab-parent'),
    tutor: document.getElementById('contact-tab-tutor'),
    student: document.getElementById('contact-tab-student')
};

const formSections = {
    parent: document.getElementById('form-fields-parent'),
    tutor: document.getElementById('form-fields-tutor'),
    student: document.getElementById('form-fields-student')
};

// UI elements that change text/styles dynamically based on the audience
const contactHeroTag = document.getElementById('contact-hero-tag');
const contactHeroTitle = document.getElementById('contact-hero-title');
const contactHeroDesc = document.getElementById('contact-hero-desc');
const contactFormTitle = document.getElementById('contact-form-title');
const contactFormDesc = document.getElementById('contact-form-desc');
const contactFormAccent = document.getElementById('contact-form-accent');
const contactSubmitBtn = document.getElementById('contact-submit-btn');
const contactMessageLabel = document.getElementById('contact-message-label');

const contactSidebarTitle = document.getElementById('contact-sidebar-title');
const sidebarChannelName1 = document.getElementById('sidebar-channel-name-1');
const sidebarChannelVal1 = document.getElementById('sidebar-channel-val-1');
const sidebarChannelBadge1 = document.getElementById('sidebar-channel-badge-1');
const sidebarChannelIcon1 = document.getElementById('sidebar-channel-icon-1');

const sidebarChannelName2 = document.getElementById('sidebar-channel-name-2');
const sidebarChannelVal2 = document.getElementById('sidebar-channel-val-2');
const sidebarChannelBadge2 = document.getElementById('sidebar-channel-badge-2');
const sidebarChannelIcon2 = document.getElementById('sidebar-channel-icon-2');

const chatHeaderAccent = document.getElementById('chat-header-accent');
const chatWelcomeBubble = document.getElementById('chat-welcome-bubble');

// Custom copy data for each role to evoke maximum trust and hope
const audienceData = {
    parent: {
        themeColor: '#2e7d32', // Safe Green
        heroTag: 'Guardian Shield & Safeguarding Standard',
        heroTitle: 'Secure Your Child\'s <span class="text-[#2e7d32]">Academic Future.</span>',
        heroDesc: 'Every Tuition4All educator is manually vetted. We verify academic degrees, scan official university transcripts, and perform comprehensive background checks to guarantee absolute quality and child safety.',
        formTitle: 'Secure Placement Request',
        formDesc: 'Submit your requirements and an academic coordinator will contact you with matched, vetted tutor profiles.',
        submitText: 'Submit Safe Placement Request',
        messageLabel: 'Tell us about your child\'s learning goals and needs',
        sidebarTitle: 'Parental Trust Lines',
        channel1: {
            name: 'Safeguarding Board',
            val: 'safeguarding@tuition4all.com',
            badge: 'Urgent Child Safety Escalations',
            icon: 'security'
        },
        channel2: {
            name: 'Admissions & Placement Support',
            val: 'placements@tuition4all.com',
            badge: 'Reply within 2 hours',
            icon: 'contact_mail'
        },
        chatWelcome: 'Hello! I\'m your Tuition4All parental placement coordinator. I can help find the perfect vetted tutor matching your child\'s needs.'
    },
    tutor: {
        themeColor: '#d97706', // Warm Amber/Yellow
        heroTag: 'Educator Network Application',
        heroTitle: 'Get Paid the Value <span class="text-[#d97706]">You Deserve.</span>',
        heroDesc: 'Tuition4All honors professional pedagogical expertise. Apply to access automated weekly bank payments, premium billing rates, free teaching SaaS tools, and zero marketing headaches.',
        formTitle: 'Educator Application Portal',
        formDesc: 'Provide your primary qualifications. Our admissions board clears applications within 48 hours.',
        submitText: 'Submit Educator Application',
        messageLabel: 'Describe your pedagogy style and experience',
        sidebarTitle: 'Educator Support lines',
        channel1: {
            name: 'weekly Payouts Coordinator',
            val: 'finance@tuition4all.com',
            badge: 'Payment & Invoice Escalation',
            icon: 'payments'
        },
        channel2: {
            name: 'Teaching Board Helpdesk',
            val: 'pedagogy@tuition4all.com',
            badge: 'Tutor tools & whiteboard setup help',
            icon: 'support_agent'
        },
        chatWelcome: 'Hello! I\'m your Tuition4All tutor support partner. Ready to join our verified teaching network? Ask me about payouts and vetting!'
    },
    student: {
        themeColor: '#4d40db', // Indigo
        heroTag: 'Personal Academic Accelerator',
        heroTitle: 'Learn Confidently. <span class="text-[#4d40db]">Zero Stress.</span>',
        heroDesc: 'No more confusing homework sessions. Connect directly with the world\'s best mentors who make learning algebra, calculus, or writing fun, supportive, and completely stress-free.',
        formTitle: 'Concept Mastery Request',
        formDesc: 'Tell us what subjects are stressing you out. We\'ll pair you with a friendly mentor who gets it.',
        submitText: 'Find My Learning Mentor',
        messageLabel: 'Describe what topics you need help with',
        sidebarTitle: 'Student Help Desk',
        channel1: {
            name: 'Homework Helper Desk',
            val: 'homework@tuition4all.com',
            badge: 'Quick conceptual assistance line',
            icon: 'help_center'
        },
        channel2: {
            name: 'Student Community Line',
            val: 'community@tuition4all.com',
            badge: 'Events & peer collaboration',
            icon: 'forum'
        },
        chatWelcome: 'Hey there! I\'m your Tuition4All student match mentor. What subjects are giving you a hard time? I\'ll help match you with a fun tutor!'
    }
};

function selectContactTab(role) {
    // Reset all tabs
    Object.keys(contactTabs).forEach(key => {
        const tab = contactTabs[key];
        if (tab) tab.classList.remove('active');
        const form = formSections[key];
        if (form) form.classList.add('hidden');
    });

    // Activate current tab
    const activeTab = contactTabs[role];
    if (activeTab) activeTab.classList.add('active');
    const activeForm = formSections[role];
    if (activeForm) activeForm.classList.remove('hidden');

    // Update dynamic texts and themes
    const data = audienceData[role];
    if (data) {
        // Form accent border color
        if (contactFormAccent) contactFormAccent.style.backgroundColor = data.themeColor;
        
        // Hero section strings - disabled to keep the unified contact hero copy active
        // if (contactHeroTag) contactHeroTag.textContent = data.heroTag;
        // if (contactHeroTitle) contactHeroTitle.innerHTML = data.heroTitle;
        // if (contactHeroDesc) contactHeroDesc.textContent = data.heroDesc;
        
        // Form panel strings
        if (contactFormTitle) contactFormTitle.textContent = data.formTitle;
        if (contactFormDesc) contactFormDesc.textContent = data.formDesc;
        if (contactSubmitBtn) {
            contactSubmitBtn.textContent = data.submitText;
            contactSubmitBtn.style.backgroundColor = data.themeColor;
            // Update hover box shadow styling programmatically
            contactSubmitBtn.onmouseover = () => {
                contactSubmitBtn.style.boxShadow = `0 10px 20px -5px ${data.themeColor}44`;
            };
            contactSubmitBtn.onmouseout = () => {
                contactSubmitBtn.style.boxShadow = 'none';
            };
        }
        if (contactMessageLabel) contactMessageLabel.textContent = data.messageLabel;

        // Sidebar elements
        if (contactSidebarTitle) contactSidebarTitle.textContent = data.sidebarTitle;
        
        if (sidebarChannelName1) sidebarChannelName1.textContent = data.channel1.name;
        if (sidebarChannelVal1) sidebarChannelVal1.textContent = data.channel1.val;
        if (sidebarChannelBadge1) {
            sidebarChannelBadge1.textContent = data.channel1.badge;
            sidebarChannelBadge1.style.color = data.themeColor;
            sidebarChannelBadge1.style.backgroundColor = `${data.themeColor}0a`;
        }
        if (sidebarChannelName2) sidebarChannelName2.textContent = data.channel2.name;
        if (sidebarChannelVal2) sidebarChannelVal2.textContent = data.channel2.val;
        if (sidebarChannelBadge2) {
            sidebarChannelBadge2.textContent = data.channel2.badge;
            sidebarChannelBadge2.style.color = data.themeColor;
            sidebarChannelBadge2.style.backgroundColor = `${data.themeColor}0a`;
        }

        // Live Chat Widget theme and welcome bubble
        if (chatHeaderAccent) chatHeaderAccent.style.backgroundColor = data.themeColor;
        if (chatWelcomeBubble) chatWelcomeBubble.textContent = data.chatWelcome;
        
        // Reset chat status dot color
        const chatStatusDot = document.getElementById('chat-status-dot');
        if (chatStatusDot) chatStatusDot.style.borderColor = data.themeColor;
    }
}

// Bind contact selector tabs
Object.keys(contactTabs).forEach(role => {
    const tab = contactTabs[role];
    if (tab) {
        tab.addEventListener('click', () => selectContactTab(role));
    }
});

// Submit logic handling for success states
const contactFormElement = document.getElementById('contact-form');
const contactFormContainer = document.getElementById('contact-form-container');
const contactSuccessState = document.getElementById('contact-success-state');
const resetContactBtn = document.getElementById('reset-contact-btn');

if (contactFormElement) {
    contactFormElement.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Configure Success Details based on active role
        const activeTab = document.querySelector('[id^="contact-tab-"].active');
        const role = activeTab ? activeTab.id.replace('contact-tab-', '') : 'parent';
        const successData = audienceData[role];
        
        const successTitle = document.getElementById('contact-success-title');
        const successDesc = document.getElementById('contact-success-desc');
        const successIconBg = document.getElementById('contact-success-icon-bg');
        
        if (successTitle) successTitle.textContent = "You're In";
        if (successDesc) {
            successDesc.textContent = "A Tuition4All advisor has your request and will follow up within 24 hours — no chasing required.";
        }
        if (successIconBg) {
            successIconBg.style.color = successData.themeColor;
            successIconBg.style.backgroundColor = `${successData.themeColor}1a`;
        }
        
        if (contactFormContainer) contactFormContainer.style.display = 'none';
        if (contactSuccessState) contactSuccessState.style.display = 'block';
    });
}

if (resetContactBtn) {
    resetContactBtn.addEventListener('click', () => {
        if (contactFormElement) contactFormElement.reset();
        if (contactFormContainer) contactFormContainer.style.display = 'block';
        if (contactSuccessState) contactSuccessState.style.display = 'none';
    });
}

// Initialize contact page to Student view on load
selectContactTab('student');

// ==========================================
// PARENT PORTAL SIMULATOR CONTROLLERS
// ==========================================

// Smooth scroll to dashboard
window.scrollToDashboard = function() {
    const dashboard = document.getElementById('parent-dashboard-demo');
    if (dashboard) {
        dashboard.scrollIntoView({ behavior: 'smooth' });
    }
};

// Toggle Parent Demo Tabs
window.switchParentDemoTab = function(tabId) {
    // Deactivate all tabs
    document.querySelectorAll('.parent-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    // Hide all panels
    document.querySelectorAll('.parent-demo-panel').forEach(panel => {
        panel.classList.add('hidden');
        panel.classList.remove('active');
    });

    // Activate selected tab & panel
    const tabBtn = document.getElementById(`parent-demo-tab-${tabId}`);
    if (tabBtn) tabBtn.classList.add('active');

    const contentPanel = document.getElementById(`parent-demo-content-${tabId}`);
    if (contentPanel) {
        contentPanel.classList.remove('hidden');
        contentPanel.classList.add('active');
    }

    // Stop any playing demo clip
    stopCurrentDemoAudio();
};

// Simulated Audio Clips Playing logic
let demoAudioTimer = null;
let currentDemoClipId = null;

window.playDemoClip = function(clipId, durationSeconds) {
    const playBtn = document.getElementById(`play-btn-${clipId}`);
    const playIcon = document.getElementById(`play-icon-${clipId}`);
    const playerWidget = document.getElementById('demo-audio-player-widget');
    const playerTitle = document.getElementById('demo-player-title');
    const playerTime = document.getElementById('demo-player-time');
    const playerProgress = document.getElementById('demo-player-progress');

    // If currently playing the same clip, toggle it off
    if (currentDemoClipId === clipId) {
        stopCurrentDemoAudio();
        return;
    }

    // Stop other clips
    stopCurrentDemoAudio();

    // Start playing
    currentDemoClipId = clipId;
    if (playIcon) playIcon.textContent = "stop";
    if (playBtn) playBtn.classList.replace('bg-[#304ddb]', 'bg-[#d32f2f]');
    if (playerWidget) playerWidget.classList.remove('hidden');
    
    // Set titles
    const titles = {
        clip1: "Clip: Advanced Math - Linear Transformations (Dr. Eleanor)",
        clip2: "Clip: Physics - Wave-Particle Duality (Jonathan H.)",
        clip3: "Clip: Chemistry - Organic Rings (Siti Aminah)"
    };
    if (playerTitle) playerTitle.textContent = titles[clipId] || "Playing clip...";

    let elapsed = 0;
    if (playerTime) playerTime.textContent = `0:00 / 0:${durationSeconds.toString().padStart(2, '0')}`;
    if (playerProgress) playerProgress.style.width = '0%';

    demoAudioTimer = setInterval(() => {
        elapsed++;
        if (playerTime) playerTime.textContent = `0:${elapsed.toString().padStart(2, '0')} / 0:${durationSeconds.toString().padStart(2, '0')}`;
        if (playerProgress) playerProgress.style.width = `${(elapsed / durationSeconds) * 100}%`;

        if (elapsed >= durationSeconds) {
            stopCurrentDemoAudio();
        }
    }, 1000);
};

function stopCurrentDemoAudio() {
    if (demoAudioTimer) {
        clearInterval(demoAudioTimer);
        demoAudioTimer = null;
    }
    if (currentDemoClipId) {
        const playBtn = document.getElementById(`play-btn-${currentDemoClipId}`);
        const playIcon = document.getElementById(`play-icon-${currentDemoClipId}`);
        if (playIcon) playIcon.textContent = "play_arrow";
        if (playBtn) playBtn.classList.replace('bg-[#d32f2f]', 'bg-[#304ddb]');
    }
    currentDemoClipId = null;
    const playerWidget = document.getElementById('demo-audio-player-widget');
    if (playerWidget) playerWidget.classList.add('hidden');
}

// Query Demo Vetting Ledger
window.queryDemoLedger = function() {
    const input = document.getElementById('demo-ledger-input');
    const results = document.getElementById('demo-ledger-results');
    if (!input || !results) return;

    const query = input.value.trim().toUpperCase();
    if (!query) return;

    results.innerHTML = `
        <div class="flex items-center justify-center gap-3">
            <span class="w-2 h-2 rounded-full bg-[#304ddb] animate-ping"></span>
            <span class="text-xs text-[#405261] font-semibold">Running ledger search query...</span>
        </div>
    `;

    setTimeout(() => {
        const found = TUTORS.find(t => t.id === query);
        if (found) {
            results.innerHTML = `
                <div class="flex items-start gap-4 text-left">
                    <div class="w-10 h-10 rounded-full bg-[#e8f5e9] text-[#2e7d32] border border-[#a5d6a7]/40 flex items-center justify-center shrink-0">
                        <span class="material-symbols-outlined text-xl">verified</span>
                    </div>
                    <div class="space-y-1">
                        <h4 class="text-sm font-bold text-[#131b24] font-label-md">${found.name} (ID: ${found.id})</h4>
                        <p class="text-xs text-[#405261]"><strong class="text-[#131b24]">Credentials:</strong> ${found.credentials}</p>
                        <p class="text-xs text-[#405261]"><strong class="text-[#131b24]">Clearance Status:</strong> ${found.safetyStatus}</p>
                        <p class="text-[10px] font-mono bg-[#faf8f7] border border-[#ede8e6] p-2 rounded text-[#405261] truncate max-w-lg select-all" title="${found.badgeHash}">
                            <strong class="text-[#131b24]">Ledger Hash:</strong> ${found.badgeHash}
                        </p>
                    </div>
                </div>
            `;
        } else {
            results.innerHTML = `
                <div class="flex items-start gap-4 text-left">
                    <div class="w-10 h-10 rounded-full bg-[#ffebee] text-[#c62828] border border-[#ffcdd2]/40 flex items-center justify-center shrink-0">
                        <span class="material-symbols-outlined text-xl">error</span>
                    </div>
                    <div>
                        <h4 class="text-sm font-bold text-[#131b24] font-label-md">Tutor ID Not Found</h4>
                        <p class="text-xs text-[#405261] mt-0.5">Please check spelling (e.g. TUTOR-01, TUTOR-02, TUTOR-03) and try query again.</p>
                    </div>
                </div>
            `;
        }
    }, 1000);
};

// Hero audio playback simulator
let heroAudioTimer = null;
let isHeroAudioPlaying = false;
const heroDuration = 18;

window.toggleMockAudioHero = function() {
    const playIcon = document.getElementById('hero-audio-icon');
    const playBtn = document.getElementById('hero-audio-play-btn');
    const timer = document.getElementById('hero-audio-timer');
    const waveform = document.getElementById('hero-waveform');

    if (isHeroAudioPlaying) {
        // Stop
        clearInterval(heroAudioTimer);
        isHeroAudioPlaying = false;
        if (playIcon) playIcon.textContent = "play_arrow";
        if (playBtn) playBtn.classList.replace('bg-[#d32f2f]', 'bg-[#304ddb]');
        if (timer) timer.textContent = `0:00 / 0:${heroDuration}`;
        // reset waveform styling
        if (waveform) {
            Array.from(waveform.children).forEach(bar => {
                bar.classList.replace('bg-[#304ddb]', 'bg-[#304ddb]/20');
            });
        }
    } else {
        // Start
        isHeroAudioPlaying = true;
        if (playIcon) playIcon.textContent = "stop";
        if (playBtn) playBtn.classList.replace('bg-[#304ddb]', 'bg-[#d32f2f]');
        
        let elapsed = 0;
        heroAudioTimer = setInterval(() => {
            elapsed++;
            if (timer) timer.textContent = `0:${elapsed.toString().padStart(2, '0')} / 0:${heroDuration}`;
            
            // animate waveform bars based on elapsed percent
            if (waveform) {
                const totalBars = waveform.children.length;
                const activeCount = Math.min(totalBars, Math.round((elapsed / heroDuration) * totalBars));
                Array.from(waveform.children).forEach((bar, index) => {
                    if (index < activeCount) {
                        bar.classList.replace('bg-[#304ddb]/20', 'bg-[#304ddb]');
                    }
                });
            }

            if (elapsed >= heroDuration) {
                clearInterval(heroAudioTimer);
                isHeroAudioPlaying = false;
                if (playIcon) playIcon.textContent = "play_arrow";
                if (playBtn) playBtn.classList.replace('bg-[#d32f2f]', 'bg-[#304ddb]');
                if (timer) timer.textContent = `0:00 / 0:${heroDuration}`;
                if (waveform) {
                    Array.from(waveform.children).forEach(bar => {
                        bar.classList.replace('bg-[#304ddb]', 'bg-[#304ddb]/20');
                    });
                }
            }
        }, 1000);
    }
};
