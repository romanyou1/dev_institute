const STORAGE_KEY = 'l1ve.v2.front.state';
const STATE_VERSION = 11;
const PARIS_TZ = 'Europe/Paris';
const MARSEILLE_CENTER = { lat: 43.2965, lng: 5.3698 };
const MAX_PROFILE_PHOTOS = 6;

const plans = {
  BASIC: {
    label: 'Basic',
    price: 'Free',
    swipeLimit: 50,
    activityLimit: 4,
    vip: false,
    description: 'Un seul univers au choix.',
  },
  INTERMEDIATE: {
    label: 'Intermédiaire',
    price: '9,99€/mois',
    swipeLimit: 100,
    activityLimit: 6,
    vip: false,
    description: 'Les 4 espaces débloqués.',
  },
  PREMIUM: {
    label: 'Premium',
    price: '15,99€/mois',
    swipeLimit: Infinity,
    activityLimit: Infinity,
    vip: false,
    description: 'Usage illimité et plus de friction.',
  },
  PLATINUM: {
    label: 'Platinum',
    price: '29,99€/mois',
    swipeLimit: Infinity,
    activityLimit: Infinity,
    vip: true,
    featured: true,
    description: 'Illimité, VIP et visibilité maximale.',
  },
};

const LANGUAGES = {
  fr: { flag: '🇫🇷', label: 'FR', name: 'Francais' },
  en: { flag: '🇬🇧', label: 'EN', name: 'English' },
  es: { flag: '🇪🇸', label: 'ES', name: 'Espanol' },
  it: { flag: '🇮🇹', label: 'IT', name: 'Italiano' },
};

const LOCALES = {
  fr: 'fr-FR',
  en: 'en-GB',
  es: 'es-ES',
  it: 'it-IT',
};

const translations = {
  fr: {
    'title.app': 'L1VE.v2',
    'title.landing': 'L1VE - Landing',
    'title.login': 'L1VE - Connexion',
    'title.register': 'L1VE - Inscription',
    'title.account': 'L1VE - Compte',
    'title.profile': 'L1VE - Profil',
    'language.label': 'Langue',
    'nav.profile': 'Mon profil',
    'nav.account': 'Compte & abonnement',
    'nav.backToApp': "Retour a l'app",
    'app.hero.eyebrow': 'Marseille only',
    'app.hero.title': 'Rencontre. Amitie. Sport. Opportunites. En vrai, dans ta ville.',
    'app.hero.text': 'L1VE orchestre tes rencontres locales avec quatre univers distincts, une navigation fluide et des experiences pensees mobile-first.',
    'app.metrics.profilesLabel': 'Profils actifs',
    'app.metrics.profilesSub': 'Dating + Pro',
    'app.metrics.activitiesLabel': 'Activites ouvertes',
    'app.metrics.activitiesSub': 'Amical + Sport + Pro',
    'app.metrics.convosLabel': 'Conversations live',
    'app.metrics.convosSub': 'Cette session',
    'app.ticker.label': 'Trending Marseille',
    'app.upsell.title': 'Acces limite',
    'app.upsell.default': 'Passe a un plan superieur pour debloquer cette fonctionnalite.',
    'app.upsell.button': 'Voir les plans',
    'space.dating': 'Dating',
    'space.amical': 'Rencontre amicale',
    'space.sport': 'Rencontre sportive',
    'space.pro': 'Rencontre pro',
    'tab.dating.swipe': '🔥 Swipe',
    'tab.dating.matches': '💬 Matches',
    'tab.dating.messages': '✉️ Messages',
    'tab.amical.activities': '🗺️ Activites',
    'tab.amical.create': '➕ Creer',
    'tab.amical.messages': '💬 Messages',
    'tab.sport.activities': '🗺️ Sessions',
    'tab.sport.create': '➕ Creer',
    'tab.sport.messages': '💬 Messages',
    'tab.pro.events': '🗺️ Evenements',
    'tab.pro.create': '➕ Creer',
    'tab.pro.feed': '📰 Feed',
    'tab.pro.messages': '💬 Messages',
    'welcome.hello': 'Bonjour, {name}',
    'welcome.guest': 'Mode visiteur',
    'status.active': '{plan} actif',
    'status.inactive': '{plan} inactif',
    'usage.swipes': "Swipes aujourd'hui : {value}",
    'usage.registrations': 'Inscriptions ce mois : {value}',
    'ticker.plan': 'Plan',
    'ticker.referral': 'Parrainage',
    'landing.hero.eyebrow': 'Marseille, en vrai',
    'landing.hero.title': 'Rencontre. Amitie. Sport. Opportunites. En vrai, a Marseille.',
    'landing.hero.text': 'Une plateforme locale pour vivre des rencontres romantiques, amicales, sportives et professionnelles dans les lieux les plus vivants de la ville.',
    'landing.hero.login': 'Se connecter',
    'landing.hero.register': 'Creer un compte',
    'landing.presentation.eyebrow': 'Presentation',
    'landing.presentation.title': "Qu'est-ce que L1VE ?",
    'landing.spaces.eyebrow': 'Espaces',
    'landing.spaces.title': 'Quatre espaces, un seul abonnement',
    'login.eyebrow': 'Connexion',
    'login.title': 'Reprends la main sur tes rencontres marseillaises.',
    'login.email': 'Email',
    'login.emailPlaceholder': 'toi@exemple.com',
    'login.password': 'Mot de passe',
    'login.submit': 'Se connecter',
    'login.forgot': 'Mot de passe oublie ?',
    'login.register': "Pas encore de compte ? S'inscrire",
    'register.eyebrow': 'Inscription',
    'register.title': 'Cree ton compte et prepare ton profil.',
    'register.firstName': 'Prenom',
    'register.lastName': 'Nom',
    'register.email': 'Email',
    'register.password': 'Mot de passe',
    'register.confirm': 'Confirmation',
    'register.birthdate': 'Date de naissance',
    'register.terms': "J'accepte les CGU et la politique de confidentialite.",
    'register.submit': 'Creer mon compte',
    'register.login': 'Deja un compte ? Se connecter',
    'account.eyebrow': 'Compte',
    'account.title': 'Mon profil',
    'account.currentPlan': 'Plan actuel :',
    'account.status': 'Statut abonnement :',
    'account.email': 'Email :',
    'account.toggle': "Activer / desactiver l'abonnement",
    'account.plansEyebrow': 'Plans',
    'account.plansTitle': 'Choisir un plan',
    'account.basicEyebrow': 'Basic',
    'account.basicTitle': 'Parametre Basic',
    'account.basicDesc': "Tu peux changer l'onglet autorise une fois par mois.",
    'account.referralEyebrow': 'Parrainage',
    'account.referralTitle': 'Premium par parrainage',
    'account.referralText': 'Parrainage Premium : {count}/5 amis parraines',
    'account.referralPlaceholder': 'Entrer un code de parrainage',
    'account.referralAdd': 'Ajouter',
    'account.claimPremium': 'Obtenir Premium gratuitement',
    'account.active': 'Actif',
    'account.inactive': 'Inactif',
    'account.choose': 'Choisir',
    'account.current': 'Actif',
    'profile.eyebrow': 'Profil',
    'profile.title': 'Construis une presence claire et credible',
    'profile.photosDrop': "Glisse des images ici ou clique sur un slot pour simuler l'upload.",
    'profile.infoEyebrow': 'Infos',
    'profile.infoTitle': 'Informations personnelles',
    'profile.firstName': 'Prenom',
    'profile.lastName': 'Nom',
    'profile.birthdate': 'Date de naissance',
    'profile.age': 'Age',
    'profile.gender': 'Genre',
    'profile.city': 'Ville',
    'profile.bio': 'Bio',
    'profile.bioPlaceholder': 'Decris ton style, ton energie, ce que tu recherches...',
    'profile.interestsEyebrow': 'Interets',
    'profile.interestsTitle': "Centres d'interet",
    'profile.customInterestPlaceholder': 'Ajouter un interet custom',
    'profile.add': 'Ajouter',
    'profile.positioningEyebrow': 'Positionnement',
    'profile.positioningTitle': 'Type de profil',
    'profile.personal': 'Profil personnel',
    'profile.pro': 'Profil pro',
    'profile.company': 'Profil entreprise',
    'profile.companyName': "Nom de l'entreprise",
    'profile.jobTitle': 'Poste',
    'profile.companyField': 'Entreprise',
    'profile.sector': 'Secteur',
    'profile.website': 'Site web',
    'profile.trustEyebrow': 'Confiance',
    'profile.trustTitle': "Verification d'identite",
    'profile.trustText': 'Verifie ton identite pour obtenir le badge ✓ et ameliorer ta visibilite sur L1VE Pro.',
    'profile.identityUpload': "Uploader une piece d'identite",
    'profile.identityChecking': 'Verification en cours...',
    'profile.identityVerified': 'Identite verifiee ✓',
    'profile.identityVerifiedPro': 'Identite verifiee ✓ · Profil Pro certifie 💙',
    'profile.identityPending': 'Non verifie',
    'profile.save': 'Sauvegarder le profil',
    'plan.basic': 'Basic',
    'plan.intermediate': 'Intermediaire',
    'plan.premium': 'Premium',
    'plan.platinum': 'Platinum',
    'planDesc.basic': 'Un seul univers au choix.',
    'planDesc.intermediate': 'Les 4 espaces debloques.',
    'planDesc.premium': 'Usage illimite et plus de friction.',
    'planDesc.platinum': 'Illimite, VIP et visibilite maximale.',
    'common.unlimited': 'illimite',
    'common.edit': 'Modifier',
    'common.delete': 'Supprimer',
    'common.swipesPerDay': 'Swipes {value}/jour',
    'common.activitiesPerMonth': 'Activites {value}/mois',
    'toast.login.invalidEmail': 'Entre un email valide pour continuer.',
    'toast.login.emptyPassword': 'Le mot de passe ne peut pas etre vide.',
    'toast.register.nameRequired': 'Le prenom et le nom sont obligatoires.',
    'toast.register.invalidEmail': 'Entre un email valide.',
    'toast.register.passwordLength': 'Le mot de passe doit contenir au moins 6 caracteres.',
    'toast.register.passwordMismatch': 'La confirmation du mot de passe ne correspond pas.',
    'toast.register.birthdate': 'Ajoute ta date de naissance.',
    'toast.register.terms': 'Tu dois accepter les CGU pour continuer.',
    'toast.account.reactivated': 'Abonnement reactive.',
    'toast.account.paused': 'Abonnement mis en pause.',
    'toast.account.referralEmpty': 'Entre un code de parrainage pour le simuler.',
    'toast.account.referralAdded': 'Parrainage ajoute. Encore un pas vers Premium.',
    'toast.account.premiumClaimed': 'Premium offert active.',
    'toast.account.planChanged': 'Plan change vers {plan}.',
    'toast.account.basicBlocked': "Le plan Basic autorise un seul changement d'onglet par mois.",
    'toast.account.basicChanged': 'Onglet autorise mis sur {space}.',
    'toast.profile.identityVerified': 'Identite verifiee.',
  },
  en: {
    'title.app': 'L1VE.v2',
    'title.landing': 'L1VE - Home',
    'title.login': 'L1VE - Login',
    'title.register': 'L1VE - Sign up',
    'title.account': 'L1VE - Account',
    'title.profile': 'L1VE - Profile',
    'language.label': 'Language',
    'nav.profile': 'My profile',
    'nav.account': 'Account & plan',
    'nav.backToApp': 'Back to app',
    'app.hero.eyebrow': 'Marseille only',
    'app.hero.title': 'Dating. Friendship. Sport. Opportunities. For real, in your city.',
    'app.hero.text': 'L1VE coordinates your local connections through four distinct worlds, fluid navigation and a mobile-first experience.',
    'app.metrics.profilesLabel': 'Active profiles',
    'app.metrics.profilesSub': 'Dating + Pro',
    'app.metrics.activitiesLabel': 'Open activities',
    'app.metrics.activitiesSub': 'Friendship + Sport + Pro',
    'app.metrics.convosLabel': 'Live conversations',
    'app.metrics.convosSub': 'This session',
    'app.ticker.label': 'Trending Marseille',
    'app.upsell.title': 'Limited access',
    'app.upsell.default': 'Upgrade your plan to unlock this feature.',
    'app.upsell.button': 'View plans',
    'space.dating': 'Dating',
    'space.amical': 'Friendship',
    'space.sport': 'Sport',
    'space.pro': 'Professional',
    'tab.dating.swipe': '🔥 Swipe',
    'tab.dating.matches': '💬 Matches',
    'tab.dating.messages': '✉️ Messages',
    'tab.amical.activities': '🗺️ Activities',
    'tab.amical.create': '➕ Create',
    'tab.amical.messages': '💬 Messages',
    'tab.sport.activities': '🗺️ Sessions',
    'tab.sport.create': '➕ Create',
    'tab.sport.messages': '💬 Messages',
    'tab.pro.events': '🗺️ Events',
    'tab.pro.create': '➕ Create',
    'tab.pro.feed': '📰 Feed',
    'tab.pro.messages': '💬 Messages',
    'welcome.hello': 'Hello, {name}',
    'welcome.guest': 'Guest mode',
    'status.active': '{plan} active',
    'status.inactive': '{plan} inactive',
    'usage.swipes': 'Swipes today: {value}',
    'usage.registrations': 'Signups this month: {value}',
    'ticker.plan': 'Plan',
    'ticker.referral': 'Referrals',
    'landing.hero.eyebrow': 'Marseille, for real',
    'landing.hero.title': 'Dating. Friendship. Sport. Opportunities. In real life, in Marseille.',
    'landing.hero.text': 'A local platform to experience romantic, friendly, sports and professional connections in the liveliest places across the city.',
    'landing.hero.login': 'Log in',
    'landing.hero.register': 'Create account',
    'landing.presentation.eyebrow': 'Overview',
    'landing.presentation.title': 'What is L1VE?',
    'landing.spaces.eyebrow': 'Spaces',
    'landing.spaces.title': 'Four spaces, one subscription',
    'login.eyebrow': 'Login',
    'login.title': 'Take back control of your Marseille connections.',
    'login.email': 'Email',
    'login.emailPlaceholder': 'you@example.com',
    'login.password': 'Password',
    'login.submit': 'Log in',
    'login.forgot': 'Forgot password?',
    'login.register': "Don't have an account yet? Sign up",
    'register.eyebrow': 'Sign up',
    'register.title': 'Create your account and set up your profile.',
    'register.firstName': 'First name',
    'register.lastName': 'Last name',
    'register.email': 'Email',
    'register.password': 'Password',
    'register.confirm': 'Confirm',
    'register.birthdate': 'Birthdate',
    'register.terms': 'I accept the Terms and Privacy Policy.',
    'register.submit': 'Create my account',
    'register.login': 'Already have an account? Log in',
    'account.eyebrow': 'Account',
    'account.title': 'My profile',
    'account.currentPlan': 'Current plan:',
    'account.status': 'Subscription status:',
    'account.email': 'Email:',
    'account.toggle': 'Enable / disable subscription',
    'account.plansEyebrow': 'Plans',
    'account.plansTitle': 'Choose a plan',
    'account.basicEyebrow': 'Basic',
    'account.basicTitle': 'Basic setting',
    'account.basicDesc': 'You can change the allowed tab once per month.',
    'account.referralEyebrow': 'Referral',
    'account.referralTitle': 'Premium via referrals',
    'account.referralText': 'Premium referral: {count}/5 referred friends',
    'account.referralPlaceholder': 'Enter a referral code',
    'account.referralAdd': 'Add',
    'account.claimPremium': 'Unlock Premium for free',
    'account.active': 'Active',
    'account.inactive': 'Inactive',
    'account.choose': 'Choose',
    'account.current': 'Current',
    'profile.eyebrow': 'Profile',
    'profile.title': 'Build a clear and credible presence',
    'profile.photosDrop': 'Drop images here or click a slot to simulate upload.',
    'profile.infoEyebrow': 'Info',
    'profile.infoTitle': 'Personal information',
    'profile.firstName': 'First name',
    'profile.lastName': 'Last name',
    'profile.birthdate': 'Birthdate',
    'profile.age': 'Age',
    'profile.gender': 'Gender',
    'profile.city': 'City',
    'profile.bio': 'Bio',
    'profile.bioPlaceholder': 'Describe your vibe, your energy, what you are looking for...',
    'profile.interestsEyebrow': 'Interests',
    'profile.interestsTitle': 'Interests',
    'profile.customInterestPlaceholder': 'Add a custom interest',
    'profile.add': 'Add',
    'profile.positioningEyebrow': 'Positioning',
    'profile.positioningTitle': 'Profile type',
    'profile.personal': 'Personal profile',
    'profile.pro': 'Professional profile',
    'profile.company': 'Company profile',
    'profile.companyName': 'Company name',
    'profile.jobTitle': 'Job title',
    'profile.companyField': 'Company',
    'profile.sector': 'Sector',
    'profile.website': 'Website',
    'profile.trustEyebrow': 'Trust',
    'profile.trustTitle': 'Identity verification',
    'profile.trustText': 'Verify your identity to unlock the ✓ badge and improve your visibility on L1VE Pro.',
    'profile.identityUpload': 'Upload an ID document',
    'profile.identityChecking': 'Verification in progress...',
    'profile.identityVerified': 'Identity verified ✓',
    'profile.identityVerifiedPro': 'Identity verified ✓ · Certified Pro profile 💙',
    'profile.identityPending': 'Not verified',
    'profile.save': 'Save profile',
    'plan.basic': 'Basic',
    'plan.intermediate': 'Intermediate',
    'plan.premium': 'Premium',
    'plan.platinum': 'Platinum',
    'planDesc.basic': 'One universe of your choice.',
    'planDesc.intermediate': 'All 4 spaces unlocked.',
    'planDesc.premium': 'Unlimited usage and less friction.',
    'planDesc.platinum': 'Unlimited, VIP and maximum visibility.',
    'common.unlimited': 'unlimited',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.swipesPerDay': 'Swipes {value}/day',
    'common.activitiesPerMonth': 'Activities {value}/month',
    'toast.login.invalidEmail': 'Enter a valid email to continue.',
    'toast.login.emptyPassword': 'Password cannot be empty.',
    'toast.register.nameRequired': 'First name and last name are required.',
    'toast.register.invalidEmail': 'Enter a valid email.',
    'toast.register.passwordLength': 'Password must contain at least 6 characters.',
    'toast.register.passwordMismatch': 'Password confirmation does not match.',
    'toast.register.birthdate': 'Add your birthdate.',
    'toast.register.terms': 'You need to accept the Terms to continue.',
    'toast.account.reactivated': 'Subscription reactivated.',
    'toast.account.paused': 'Subscription paused.',
    'toast.account.referralEmpty': 'Enter a referral code to simulate it.',
    'toast.account.referralAdded': 'Referral added. One step closer to Premium.',
    'toast.account.premiumClaimed': 'Free Premium activated.',
    'toast.account.planChanged': 'Plan switched to {plan}.',
    'toast.account.basicBlocked': 'Basic allows only one tab change per month.',
    'toast.account.basicChanged': 'Allowed tab switched to {space}.',
    'toast.profile.identityVerified': 'Identity verified.',
  },
  es: {
    'title.app': 'L1VE.v2',
    'title.landing': 'L1VE - Inicio',
    'title.login': 'L1VE - Acceso',
    'title.register': 'L1VE - Registro',
    'title.account': 'L1VE - Cuenta',
    'title.profile': 'L1VE - Perfil',
    'language.label': 'Idioma',
    'nav.profile': 'Mi perfil',
    'nav.account': 'Cuenta y plan',
    'nav.backToApp': 'Volver a la app',
    'app.hero.eyebrow': 'Solo Marsella',
    'app.hero.title': 'Citas. Amistad. Deporte. Oportunidades. De verdad, en tu ciudad.',
    'app.hero.text': 'L1VE organiza tus encuentros locales con cuatro universos distintos, navegacion fluida y una experiencia pensada mobile-first.',
    'app.metrics.profilesLabel': 'Perfiles activos',
    'app.metrics.profilesSub': 'Dating + Pro',
    'app.metrics.activitiesLabel': 'Actividades abiertas',
    'app.metrics.activitiesSub': 'Amistad + Deporte + Pro',
    'app.metrics.convosLabel': 'Conversaciones en vivo',
    'app.metrics.convosSub': 'Esta sesion',
    'app.ticker.label': 'Trending Marsella',
    'app.upsell.title': 'Acceso limitado',
    'app.upsell.default': 'Sube de plan para desbloquear esta funcion.',
    'app.upsell.button': 'Ver planes',
    'space.dating': 'Dating',
    'space.amical': 'Amistad',
    'space.sport': 'Deporte',
    'space.pro': 'Profesional',
    'tab.dating.swipe': '🔥 Swipe',
    'tab.dating.matches': '💬 Matches',
    'tab.dating.messages': '✉️ Mensajes',
    'tab.amical.activities': '🗺️ Actividades',
    'tab.amical.create': '➕ Crear',
    'tab.amical.messages': '💬 Mensajes',
    'tab.sport.activities': '🗺️ Sesiones',
    'tab.sport.create': '➕ Crear',
    'tab.sport.messages': '💬 Mensajes',
    'tab.pro.events': '🗺️ Eventos',
    'tab.pro.create': '➕ Crear',
    'tab.pro.feed': '📰 Feed',
    'tab.pro.messages': '💬 Mensajes',
    'welcome.hello': 'Hola, {name}',
    'welcome.guest': 'Modo visitante',
    'status.active': '{plan} activo',
    'status.inactive': '{plan} inactivo',
    'usage.swipes': 'Swipes hoy: {value}',
    'usage.registrations': 'Inscripciones este mes: {value}',
    'ticker.plan': 'Plan',
    'ticker.referral': 'Referidos',
    'landing.hero.eyebrow': 'Marsella, de verdad',
    'landing.hero.title': 'Citas. Amistad. Deporte. Oportunidades. En Marsella, en la vida real.',
    'landing.hero.text': 'Una plataforma local para vivir encuentros romanticos, amistosos, deportivos y profesionales en los lugares mas vivos de la ciudad.',
    'landing.hero.login': 'Iniciar sesion',
    'landing.hero.register': 'Crear cuenta',
    'landing.presentation.eyebrow': 'Presentacion',
    'landing.presentation.title': 'Que es L1VE?',
    'landing.spaces.eyebrow': 'Espacios',
    'landing.spaces.title': 'Cuatro espacios, una sola suscripcion',
    'login.eyebrow': 'Acceso',
    'login.title': 'Recupera el control de tus encuentros en Marsella.',
    'login.email': 'Email',
    'login.emailPlaceholder': 'tu@ejemplo.com',
    'login.password': 'Contrasena',
    'login.submit': 'Entrar',
    'login.forgot': 'Has olvidado tu contrasena?',
    'login.register': 'Aun no tienes cuenta? Registrate',
    'register.eyebrow': 'Registro',
    'register.title': 'Crea tu cuenta y prepara tu perfil.',
    'register.firstName': 'Nombre',
    'register.lastName': 'Apellido',
    'register.email': 'Email',
    'register.password': 'Contrasena',
    'register.confirm': 'Confirmacion',
    'register.birthdate': 'Fecha de nacimiento',
    'register.terms': 'Acepto los Terminos y la politica de privacidad.',
    'register.submit': 'Crear mi cuenta',
    'register.login': 'Ya tienes cuenta? Inicia sesion',
    'account.eyebrow': 'Cuenta',
    'account.title': 'Mi perfil',
    'account.currentPlan': 'Plan actual:',
    'account.status': 'Estado de suscripcion:',
    'account.email': 'Email:',
    'account.toggle': 'Activar / desactivar suscripcion',
    'account.plansEyebrow': 'Planes',
    'account.plansTitle': 'Elegir un plan',
    'account.basicEyebrow': 'Basic',
    'account.basicTitle': 'Parametro Basic',
    'account.basicDesc': 'Puedes cambiar la pestana autorizada una vez al mes.',
    'account.referralEyebrow': 'Referidos',
    'account.referralTitle': 'Premium por referidos',
    'account.referralText': 'Premium por referidos: {count}/5 amigos referidos',
    'account.referralPlaceholder': 'Introduce un codigo de referido',
    'account.referralAdd': 'Agregar',
    'account.claimPremium': 'Obtener Premium gratis',
    'account.active': 'Activo',
    'account.inactive': 'Inactivo',
    'account.choose': 'Elegir',
    'account.current': 'Actual',
    'profile.eyebrow': 'Perfil',
    'profile.title': 'Construye una presencia clara y creible',
    'profile.photosDrop': 'Suelta imagenes aqui o haz clic en una casilla para simular la carga.',
    'profile.infoEyebrow': 'Info',
    'profile.infoTitle': 'Informacion personal',
    'profile.firstName': 'Nombre',
    'profile.lastName': 'Apellido',
    'profile.birthdate': 'Fecha de nacimiento',
    'profile.age': 'Edad',
    'profile.gender': 'Genero',
    'profile.city': 'Ciudad',
    'profile.bio': 'Bio',
    'profile.bioPlaceholder': 'Describe tu estilo, tu energia, lo que buscas...',
    'profile.interestsEyebrow': 'Intereses',
    'profile.interestsTitle': 'Intereses',
    'profile.customInterestPlaceholder': 'Anadir un interes personalizado',
    'profile.add': 'Agregar',
    'profile.positioningEyebrow': 'Posicionamiento',
    'profile.positioningTitle': 'Tipo de perfil',
    'profile.personal': 'Perfil personal',
    'profile.pro': 'Perfil profesional',
    'profile.company': 'Perfil empresa',
    'profile.companyName': 'Nombre de la empresa',
    'profile.jobTitle': 'Puesto',
    'profile.companyField': 'Empresa',
    'profile.sector': 'Sector',
    'profile.website': 'Sitio web',
    'profile.trustEyebrow': 'Confianza',
    'profile.trustTitle': 'Verificacion de identidad',
    'profile.trustText': 'Verifica tu identidad para obtener la insignia ✓ y mejorar tu visibilidad en L1VE Pro.',
    'profile.identityUpload': 'Subir documento de identidad',
    'profile.identityChecking': 'Verificacion en curso...',
    'profile.identityVerified': 'Identidad verificada ✓',
    'profile.identityVerifiedPro': 'Identidad verificada ✓ · Perfil Pro certificado 💙',
    'profile.identityPending': 'No verificado',
    'profile.save': 'Guardar perfil',
    'plan.basic': 'Basic',
    'plan.intermediate': 'Intermedio',
    'plan.premium': 'Premium',
    'plan.platinum': 'Platinum',
    'planDesc.basic': 'Un solo universo a elegir.',
    'planDesc.intermediate': 'Los 4 espacios desbloqueados.',
    'planDesc.premium': 'Uso ilimitado y menos friccion.',
    'planDesc.platinum': 'Ilimitado, VIP y visibilidad maxima.',
    'common.unlimited': 'ilimitado',
    'common.edit': 'Editar',
    'common.delete': 'Eliminar',
    'common.swipesPerDay': 'Swipes {value}/dia',
    'common.activitiesPerMonth': 'Actividades {value}/mes',
    'toast.login.invalidEmail': 'Introduce un email valido para continuar.',
    'toast.login.emptyPassword': 'La contrasena no puede estar vacia.',
    'toast.register.nameRequired': 'El nombre y el apellido son obligatorios.',
    'toast.register.invalidEmail': 'Introduce un email valido.',
    'toast.register.passwordLength': 'La contrasena debe tener al menos 6 caracteres.',
    'toast.register.passwordMismatch': 'La confirmacion no coincide.',
    'toast.register.birthdate': 'Anade tu fecha de nacimiento.',
    'toast.register.terms': 'Debes aceptar los Terminos para continuar.',
    'toast.account.reactivated': 'Suscripcion reactivada.',
    'toast.account.paused': 'Suscripcion pausada.',
    'toast.account.referralEmpty': 'Introduce un codigo de referido para simularlo.',
    'toast.account.referralAdded': 'Referido agregado. Un paso mas hacia Premium.',
    'toast.account.premiumClaimed': 'Premium gratis activado.',
    'toast.account.planChanged': 'Plan cambiado a {plan}.',
    'toast.account.basicBlocked': 'Basic solo permite un cambio de pestana por mes.',
    'toast.account.basicChanged': 'Pestana autorizada cambiada a {space}.',
    'toast.profile.identityVerified': 'Identidad verificada.',
  },
  it: {
    'title.app': 'L1VE.v2',
    'title.landing': 'L1VE - Home',
    'title.login': 'L1VE - Accesso',
    'title.register': 'L1VE - Registrazione',
    'title.account': 'L1VE - Account',
    'title.profile': 'L1VE - Profilo',
    'language.label': 'Lingua',
    'nav.profile': 'Il mio profilo',
    'nav.account': 'Account e piano',
    'nav.backToApp': "Torna all'app",
    'app.hero.eyebrow': 'Solo Marsiglia',
    'app.hero.title': 'Dating. Amicizia. Sport. Opportunita. Dal vivo, nella tua citta.',
    'app.hero.text': 'L1VE organizza i tuoi incontri locali con quattro universi distinti, navigazione fluida e un’esperienza mobile-first.',
    'app.metrics.profilesLabel': 'Profili attivi',
    'app.metrics.profilesSub': 'Dating + Pro',
    'app.metrics.activitiesLabel': 'Attivita aperte',
    'app.metrics.activitiesSub': 'Amicizia + Sport + Pro',
    'app.metrics.convosLabel': 'Conversazioni live',
    'app.metrics.convosSub': 'Questa sessione',
    'app.ticker.label': 'Trending Marsiglia',
    'app.upsell.title': 'Accesso limitato',
    'app.upsell.default': 'Passa a un piano superiore per sbloccare questa funzione.',
    'app.upsell.button': 'Vedi i piani',
    'space.dating': 'Dating',
    'space.amical': 'Amicizia',
    'space.sport': 'Sport',
    'space.pro': 'Professionale',
    'tab.dating.swipe': '🔥 Swipe',
    'tab.dating.matches': '💬 Matches',
    'tab.dating.messages': '✉️ Messaggi',
    'tab.amical.activities': '🗺️ Attivita',
    'tab.amical.create': '➕ Crea',
    'tab.amical.messages': '💬 Messaggi',
    'tab.sport.activities': '🗺️ Sessioni',
    'tab.sport.create': '➕ Crea',
    'tab.sport.messages': '💬 Messaggi',
    'tab.pro.events': '🗺️ Eventi',
    'tab.pro.create': '➕ Crea',
    'tab.pro.feed': '📰 Feed',
    'tab.pro.messages': '💬 Messaggi',
    'welcome.hello': 'Ciao, {name}',
    'welcome.guest': 'Modalita ospite',
    'status.active': '{plan} attivo',
    'status.inactive': '{plan} inattivo',
    'usage.swipes': 'Swipes oggi: {value}',
    'usage.registrations': 'Iscrizioni questo mese: {value}',
    'ticker.plan': 'Piano',
    'ticker.referral': 'Referral',
    'landing.hero.eyebrow': 'Marsiglia, dal vivo',
    'landing.hero.title': 'Dating. Amicizia. Sport. Opportunita. Nella vita reale, a Marsiglia.',
    'landing.hero.text': 'Una piattaforma locale per vivere incontri romantici, amicali, sportivi e professionali nei luoghi piu vivi della citta.',
    'landing.hero.login': 'Accedi',
    'landing.hero.register': 'Crea account',
    'landing.presentation.eyebrow': 'Presentazione',
    'landing.presentation.title': "Cos'e L1VE?",
    'landing.spaces.eyebrow': 'Spazi',
    'landing.spaces.title': 'Quattro spazi, un solo abbonamento',
    'login.eyebrow': 'Accesso',
    'login.title': 'Riprendi il controllo dei tuoi incontri a Marsiglia.',
    'login.email': 'Email',
    'login.emailPlaceholder': 'tu@example.com',
    'login.password': 'Password',
    'login.submit': 'Accedi',
    'login.forgot': 'Password dimenticata?',
    'login.register': 'Non hai ancora un account? Registrati',
    'register.eyebrow': 'Registrazione',
    'register.title': 'Crea il tuo account e prepara il tuo profilo.',
    'register.firstName': 'Nome',
    'register.lastName': 'Cognome',
    'register.email': 'Email',
    'register.password': 'Password',
    'register.confirm': 'Conferma',
    'register.birthdate': 'Data di nascita',
    'register.terms': 'Accetto i Termini e la privacy policy.',
    'register.submit': 'Crea il mio account',
    'register.login': 'Hai gia un account? Accedi',
    'account.eyebrow': 'Account',
    'account.title': 'Il mio profilo',
    'account.currentPlan': 'Piano attuale:',
    'account.status': 'Stato abbonamento:',
    'account.email': 'Email:',
    'account.toggle': 'Attiva / disattiva abbonamento',
    'account.plansEyebrow': 'Piani',
    'account.plansTitle': 'Scegli un piano',
    'account.basicEyebrow': 'Basic',
    'account.basicTitle': 'Parametro Basic',
    'account.basicDesc': 'Puoi cambiare la scheda consentita una volta al mese.',
    'account.referralEyebrow': 'Referral',
    'account.referralTitle': 'Premium tramite referral',
    'account.referralText': 'Referral Premium: {count}/5 amici invitati',
    'account.referralPlaceholder': 'Inserisci un codice referral',
    'account.referralAdd': 'Aggiungi',
    'account.claimPremium': 'Ottieni Premium gratis',
    'account.active': 'Attivo',
    'account.inactive': 'Inattivo',
    'account.choose': 'Scegli',
    'account.current': 'Attivo',
    'profile.eyebrow': 'Profilo',
    'profile.title': 'Costruisci una presenza chiara e credibile',
    'profile.photosDrop': "Trascina qui le immagini o clicca su uno slot per simulare l'upload.",
    'profile.infoEyebrow': 'Info',
    'profile.infoTitle': 'Informazioni personali',
    'profile.firstName': 'Nome',
    'profile.lastName': 'Cognome',
    'profile.birthdate': 'Data di nascita',
    'profile.age': 'Eta',
    'profile.gender': 'Genere',
    'profile.city': 'Citta',
    'profile.bio': 'Bio',
    'profile.bioPlaceholder': 'Descrivi il tuo stile, la tua energia, quello che cerchi...',
    'profile.interestsEyebrow': 'Interessi',
    'profile.interestsTitle': 'Interessi',
    'profile.customInterestPlaceholder': 'Aggiungi un interesse personalizzato',
    'profile.add': 'Aggiungi',
    'profile.positioningEyebrow': 'Posizionamento',
    'profile.positioningTitle': 'Tipo di profilo',
    'profile.personal': 'Profilo personale',
    'profile.pro': 'Profilo professionale',
    'profile.company': 'Profilo azienda',
    'profile.companyName': "Nome dell'azienda",
    'profile.jobTitle': 'Ruolo',
    'profile.companyField': 'Azienda',
    'profile.sector': 'Settore',
    'profile.website': 'Sito web',
    'profile.trustEyebrow': 'Fiducia',
    'profile.trustTitle': "Verifica dell'identita",
    'profile.trustText': "Verifica la tua identita per ottenere il badge ✓ e migliorare la tua visibilita su L1VE Pro.",
    'profile.identityUpload': "Carica un documento d'identita",
    'profile.identityChecking': 'Verifica in corso...',
    'profile.identityVerified': 'Identita verificata ✓',
    'profile.identityVerifiedPro': 'Identita verificata ✓ · Profilo Pro certificato 💙',
    'profile.identityPending': 'Non verificato',
    'profile.save': 'Salva profilo',
    'plan.basic': 'Basic',
    'plan.intermediate': 'Intermedio',
    'plan.premium': 'Premium',
    'plan.platinum': 'Platinum',
    'planDesc.basic': 'Un solo universo a scelta.',
    'planDesc.intermediate': 'Tutti e 4 gli spazi sbloccati.',
    'planDesc.premium': 'Uso illimitato e meno attrito.',
    'planDesc.platinum': 'Illimitato, VIP e visibilita massima.',
    'common.unlimited': 'illimitato',
    'common.edit': 'Modifica',
    'common.delete': 'Elimina',
    'common.swipesPerDay': 'Swipes {value}/giorno',
    'common.activitiesPerMonth': 'Attivita {value}/mese',
    'toast.login.invalidEmail': 'Inserisci un indirizzo email valido per continuare.',
    'toast.login.emptyPassword': 'La password non puo essere vuota.',
    'toast.register.nameRequired': 'Nome e cognome sono obbligatori.',
    'toast.register.invalidEmail': 'Inserisci un indirizzo email valido.',
    'toast.register.passwordLength': 'La password deve contenere almeno 6 caratteri.',
    'toast.register.passwordMismatch': 'La conferma password non corrisponde.',
    'toast.register.birthdate': 'Aggiungi la tua data di nascita.',
    'toast.register.terms': 'Devi accettare i Termini per continuare.',
    'toast.account.reactivated': 'Abbonamento riattivato.',
    'toast.account.paused': 'Abbonamento messo in pausa.',
    'toast.account.referralEmpty': 'Inserisci un codice referral per simularlo.',
    'toast.account.referralAdded': 'Referral aggiunto. Un passo in piu verso Premium.',
    'toast.account.premiumClaimed': 'Premium gratuito attivato.',
    'toast.account.planChanged': 'Piano cambiato in {plan}.',
    'toast.account.basicBlocked': 'Basic consente un solo cambio scheda al mese.',
    'toast.account.basicChanged': 'Scheda consentita cambiata in {space}.',
    'toast.profile.identityVerified': 'Identita verificata.',
  },
};

const extraTranslations = {
  fr: {
    'app.brand': 'L1VE Startup UI',
    'dating.header.eyebrow': 'Dating',
    'dating.header.title': 'Swipe, match, messages et rendez-vous qui donnent envie.',
    'dating.header.text': 'Profils carrés, photos multiples, compteurs de quota et recommandations locales autour de Marseille.',
    'dating.quotaTimezone': 'Quota Europe/Paris',
    'dating.pass': 'Pass',
    'dating.like': 'Like',
    'dating.featured': '⭐ Mis en avant',
    'dating.spotlight.title': 'Spotlight',
    'dating.pace.title': 'Rythme du jour',
    'dating.matches.title': 'Matches',
    'dating.matches.text': 'Clique sur une carte pour ouvrir la conversation.',
    'dating.conversations.title': 'Conversations',
    'dating.conversations.text': 'Tous tes matchs actifs.',
    'dating.chat.placeholder': 'Envoie un message précis pour obtenir une réponse utile...',
    'dating.typing': 'L1VE bot écrit...',
    'dating.emptyMatches': 'Aucun match pour l’instant. Swipes un peu plus pour lancer des conversations.',
    'dating.emptyConversations': 'Aucune conversation pour le moment.',
    'dating.chat.emptyTitle': 'Messagerie Dating',
    'dating.chat.emptySubtitle': 'Choisis un match pour commencer.',
    'dating.chat.emptyBody': 'Les messages apparaitront ici.',
    'dating.chat.with': 'Chat avec {name}',
    'dating.chat.direct': 'Messagerie directe',
    'dating.chat.platinum': 'Membre Platinum · conversation mise en avant',
    'dating.remaining': '{count} swipes restants aujourd’hui',
    'dating.remainingUnlimited': 'Swipes illimités aujourd’hui',
    'dating.spotlight.featured': '{name} est en Platinum, donc visible avant les autres profils.',
    'dating.spotlight.next': 'Profil suivant : {name}, {distance} de toi.',
    'dating.pace.unlimited': 'Tu peux swiper sans limite, garde juste du discernement.',
    'dating.pace.limited': 'Quota du jour en place. Encore {count} swipes avant minuit.',
    'amical.header.eyebrow': 'Rencontre amicale',
    'amical.header.title': 'Sorties, activités, groupes et rencontres locales à taille humaine.',
    'amical.header.text': 'Carte de Marseille, création d’activités, validation manuelle si besoin et messagerie de groupe.',
    'amical.map.title': 'Carte des activités',
    'amical.map.text': 'Pins prune pour l’amical, dorés pour les activités VIP.',
    'amical.pending.title': 'Demandes en attente',
    'amical.create.title': 'Créer une activité',
    'amical.create.text': 'Ajoute une sortie locale et configure la validation manuelle si besoin.',
    'amical.create.titlePlaceholder': "Titre de l'activité",
    'amical.create.descriptionPlaceholder': 'Description',
    'amical.create.placePlaceholder': 'Lieu à Marseille',
    'amical.create.tagsPlaceholder': 'Tags séparés par des virgules',
    'amical.create.vip': 'Activité VIP',
    'amical.create.approval': 'Valider les inscriptions manuellement',
    'amical.create.submit': "Créer l'activité",
    'amical.create.update': "Mettre à jour l'activité",
    'amical.list.title': 'Mes activités',
    'amical.list.text': 'Tu peux modifier, supprimer ou traiter les demandes en attente.',
    'amical.groups.title': 'Groupes',
    'amical.groups.text': 'Activités rejointes ou organisées.',
    'amical.chat.placeholder': "Pose une question sur le lieu, l'heure ou les places...",
    'amical.typing': 'L1VE bot écrit...',
    'amical.emptyCreated': 'Aucune activité créée pour l’instant.',
    'amical.emptyConversations': 'Rejoins ou crée une activité pour ouvrir un groupe.',
    'amical.chat.emptyTitle': 'Messagerie groupe',
    'amical.chat.emptySubtitle': 'Aucune conversation disponible.',
    'amical.chat.emptyBody': 'Les messages de groupe apparaitront ici.',
    'amical.chat.subtitle': '{place} · {count} participants',
    'amical.join.organizer': 'Tu organises cette activité',
    'amical.join.openChat': 'Ouvrir le chat de groupe',
    'amical.join.pending': 'Demande envoyée',
    'amical.join.request': 'Demander à rejoindre',
    'amical.join.direct': "S'inscrire",
    'amical.status.vip': 'VIP',
    'amical.status.manual': 'Validation manuelle',
    'amical.status.direct': 'Inscription directe',
    'sport.header.eyebrow': 'Rencontre sportive',
    'sport.header.title': 'Running, paddle, foot et sessions collectives pour bouger avec du monde.',
    'sport.header.text': 'Carte de Marseille, création de sessions sportives, validation manuelle si besoin et messagerie de groupe dédiée.',
    'sport.map.title': 'Carte des sessions',
    'sport.map.text': 'Pins verts pour le sport, dorés pour les sessions VIP.',
    'sport.pending.title': 'Demandes en attente',
    'sport.create.title': 'Créer une session',
    'sport.create.text': 'Running, paddle, foot ou tout autre format sport collectif à Marseille.',
    'sport.create.titlePlaceholder': 'Titre de la session',
    'sport.create.descriptionPlaceholder': 'Description',
    'sport.create.placePlaceholder': 'Lieu à Marseille',
    'sport.create.tagsPlaceholder': 'Tags séparés par des virgules',
    'sport.create.vip': 'Session VIP',
    'sport.create.approval': 'Valider les inscriptions manuellement',
    'sport.create.submit': 'Créer la session',
    'sport.create.update': 'Mettre à jour la session',
    'sport.list.title': 'Mes sessions sportives',
    'sport.list.text': 'Tu peux modifier, supprimer ou traiter les demandes en attente.',
    'sport.groups.title': 'Groupes',
    'sport.groups.text': 'Sessions rejointes ou organisées.',
    'sport.chat.placeholder': "Demande le lieu, l'heure, le niveau ou les places...",
    'sport.typing': 'L1VE bot écrit...',
    'sport.emptyCreated': 'Aucune session sportive créée pour l’instant.',
    'sport.emptyConversations': 'Rejoins ou crée une session pour ouvrir un groupe.',
    'sport.chat.emptyTitle': 'Messagerie sportive',
    'sport.chat.emptySubtitle': 'Aucune conversation disponible.',
    'sport.chat.emptyBody': 'Les messages du groupe apparaitront ici.',
    'sport.chat.subtitle': '{place} · {count} sportifs',
    'sport.join.organizer': 'Tu organises cette session',
    'sport.join.openChat': 'Ouvrir le chat du groupe',
    'sport.join.pending': 'Demande envoyée',
    'sport.join.request': 'Demander à rejoindre',
    'sport.join.direct': "S'inscrire",
    'sport.status.vip': 'VIP',
    'sport.status.manual': 'Validation manuelle',
    'sport.status.direct': 'Inscription directe',
    'pro.header.eyebrow': 'Rencontre pro',
    'pro.header.title': 'Événements, afterworks, feed et conversations orientées opportunités.',
    'pro.header.text': 'Une vue carte, un espace création, un feed social et des messages de groupe par événement.',
    'pro.map.title': 'Carte des événements',
    'pro.map.text': 'Pins bleus pour les événements, forme dédiée pour les afterworks.',
    'pro.pending.title': 'Demandes en attente',
    'pro.create.title': 'Créer un événement',
    'pro.create.text': 'Afterwork, réunion, formation ou masterclass avec validation manuelle en option.',
    'pro.create.titlePlaceholder': "Titre de l'événement",
    'pro.create.descriptionPlaceholder': 'Description',
    'pro.create.placePlaceholder': 'Lieu à Marseille',
    'pro.create.tagsPlaceholder': 'Tags séparés par des virgules',
    'pro.create.vip': 'Événement VIP',
    'pro.create.approval': 'Valider les inscriptions manuellement',
    'pro.create.submit': "Créer l'événement",
    'pro.create.update': "Mettre à jour l'événement",
    'pro.list.title': 'Mes événements',
    'pro.list.text': 'Historique, édition rapide et traitement des demandes en attente.',
    'pro.feed.createTitle': 'Créer un post',
    'pro.feed.createText': 'Publie une info, une annonce ou une quote à ton réseau.',
    'pro.feed.quotePlaceholder': 'Auteur de la quote (optionnel)',
    'pro.feed.contentPlaceholder': 'Ton contenu...',
    'pro.feed.publish': 'Publier',
    'pro.feed.filterTitle': 'Filtrer le feed',
    'pro.feed.filterText': 'Les posts Platinum sont marqués en doré.',
    'pro.feed.filter.all': 'Tout',
    'pro.feed.filter.post': 'Posts',
    'pro.feed.filter.quote': 'Quotes',
    'pro.groups.title': 'Salons',
    'pro.groups.text': 'Événements rejoints ou organisés.',
    'pro.chat.placeholder': "Demande le lieu exact, la capacité ou l'accès VIP...",
    'pro.typing': 'L1VE bot écrit...',
    'pro.emptyCreated': 'Aucun événement créé pour l’instant.',
    'pro.emptyFeed': 'Aucun contenu pour ce filtre.',
    'pro.emptyConversations': 'Rejoins ou crée un événement pour ouvrir un salon.',
    'pro.chat.emptyTitle': 'Messagerie pro',
    'pro.chat.emptySubtitle': 'Aucune conversation disponible.',
    'pro.chat.emptyBody': 'Les messages apparaitront ici.',
    'pro.chat.subtitle': '{kind} · {place}',
    'pro.join.organizer': 'Tu organises cet événement',
    'pro.join.openChat': 'Ouvrir le chat de groupe',
    'pro.join.pending': 'Demande envoyée',
    'pro.join.request': 'Demander à rejoindre',
    'pro.join.direct': "S'inscrire",
    'feed.like': 'Like ({count})',
    'feed.emptyComments': 'Aucun commentaire pour l’instant.',
    'feed.comment.placeholder': 'Ajouter un commentaire...',
    'feed.comment.send': 'Envoyer',
    'feed.comment.added': 'Commentaire ajouté.',
    'member.visible': 'profil visible',
    'member.private': 'Profil privé',
    'member.view': 'Voir le profil',
    'member.aria': 'Ouvrir le profil de {name}',
    'member.noBio': 'Ce membre n’a pas encore ajouté de bio détaillée.',
    'member.noTags': 'Aucun tag renseigné',
    'member.privateBio': 'Ce membre a choisi de garder son profil privé. Seules quelques informations minimales restent visibles dans le groupe.',
    'member.limited': 'Accès limité',
    'member.status': 'Statut',
    'member.city': 'Ville',
    'member.age': 'Âge',
    'member.info': 'Info',
    'request.none': 'Aucune demande en attente pour le moment.',
    'request.accept': 'Accepter',
    'request.reject': 'Refuser',
    'chat.empty': 'Aucun message.',
    'chat.seed.amical': 'Bienvenue dans {title}. Demande-moi le lieu, l’heure ou les places restantes.',
    'chat.seed.sport': 'Bienvenue dans {title}. Demande-moi le lieu, l’heure ou les places restantes.',
    'chat.seed.pro': 'Bienvenue sur {title}. Je peux t’aider avec le lieu, les places restantes ou l’accès VIP.',
    'toast.postPublished': 'Post publié.',
    'toast.swipeLimit': 'Limite de swipes atteinte.',
    'toast.platinumRequired': 'Accès Platinum requis.',
    'toast.requestSent': 'Demande envoyée.',
    'toast.joinConfirmed': 'Inscription confirmée.',
    'toast.formRequired': 'Titre, description et date sont obligatoires.',
    'toast.activityUpdated': 'Activité modifiée.',
    'toast.activityCreated': 'Activité créée.',
    'toast.sportUpdated': 'Session sportive modifiée.',
    'toast.sportCreated': 'Session sportive créée.',
    'toast.eventUpdated': 'Événement modifié.',
    'toast.eventCreated': 'Événement créé.',
    'toast.participantAccepted': 'Participant accepté.',
    'toast.requestRejected': 'Demande refusée.',
    'kind.MASTERCLASS': 'MASTERCLASS',
    'kind.FORMATION': 'FORMATION',
    'kind.REUNION': 'RÉUNION',
    'kind.AFTERWORK': 'AFTERWORK',
  },
  en: {
    'app.brand': 'L1VE Startup UI',
    'dating.header.eyebrow': 'Dating',
    'dating.header.title': 'Swipe, match, message and line up dates that actually feel worth it.',
    'dating.header.text': 'Square cards, multiple photos, quota counters and local recommendations around Marseille.',
    'dating.quotaTimezone': 'Europe/Paris quota',
    'dating.pass': 'Pass',
    'dating.like': 'Like',
    'dating.featured': '⭐ Featured',
    'dating.spotlight.title': 'Spotlight',
    'dating.pace.title': 'Today’s pace',
    'dating.matches.title': 'Matches',
    'dating.matches.text': 'Tap a card to open the conversation.',
    'dating.conversations.title': 'Conversations',
    'dating.conversations.text': 'All your active matches.',
    'dating.chat.placeholder': 'Send a precise message to get a useful reply...',
    'dating.typing': 'L1VE bot is typing...',
    'dating.emptyMatches': 'No matches yet. Swipe a little more to start conversations.',
    'dating.emptyConversations': 'No conversation yet.',
    'dating.chat.emptyTitle': 'Dating chat',
    'dating.chat.emptySubtitle': 'Pick a match to begin.',
    'dating.chat.emptyBody': 'Messages will appear here.',
    'dating.chat.with': 'Chat with {name}',
    'dating.chat.direct': 'Direct messaging',
    'dating.chat.platinum': 'Platinum member · highlighted conversation',
    'dating.remaining': '{count} swipes left today',
    'dating.remainingUnlimited': 'Unlimited swipes today',
    'dating.spotlight.featured': '{name} is on Platinum, so this profile is shown before others.',
    'dating.spotlight.next': 'Next profile: {name}, {distance} away from you.',
    'dating.pace.unlimited': 'You can swipe without limits, just keep some discernment.',
    'dating.pace.limited': 'Daily quota is on. {count} swipes left before midnight.',
    'amical.header.eyebrow': 'Friendship',
    'amical.header.title': 'Local hangouts, activities, groups and easy in-person connections.',
    'amical.header.text': 'Marseille map, activity creation, manual approval when needed and group chat.',
    'amical.map.title': 'Activity map',
    'amical.map.text': 'Plum pins for friendship, gold for VIP activities.',
    'amical.pending.title': 'Pending requests',
    'amical.create.title': 'Create an activity',
    'amical.create.text': 'Add a local outing and enable manual approval if needed.',
    'amical.create.titlePlaceholder': 'Activity title',
    'amical.create.descriptionPlaceholder': 'Description',
    'amical.create.placePlaceholder': 'Location in Marseille',
    'amical.create.tagsPlaceholder': 'Comma-separated tags',
    'amical.create.vip': 'VIP activity',
    'amical.create.approval': 'Manually approve signups',
    'amical.create.submit': 'Create activity',
    'amical.create.update': 'Update activity',
    'amical.list.title': 'My activities',
    'amical.list.text': 'You can edit, delete or process pending requests.',
    'amical.groups.title': 'Groups',
    'amical.groups.text': 'Joined or hosted activities.',
    'amical.chat.placeholder': 'Ask about the place, time or remaining spots...',
    'amical.typing': 'L1VE bot is typing...',
    'amical.emptyCreated': 'No activity created yet.',
    'amical.emptyConversations': 'Join or create an activity to open a group.',
    'amical.chat.emptyTitle': 'Group chat',
    'amical.chat.emptySubtitle': 'No conversation available.',
    'amical.chat.emptyBody': 'Group messages will appear here.',
    'amical.chat.subtitle': '{place} · {count} participants',
    'amical.join.organizer': 'You are hosting this activity',
    'amical.join.openChat': 'Open group chat',
    'amical.join.pending': 'Request sent',
    'amical.join.request': 'Request to join',
    'amical.join.direct': 'Join',
    'amical.status.vip': 'VIP',
    'amical.status.manual': 'Manual approval',
    'amical.status.direct': 'Instant join',
    'sport.header.eyebrow': 'Sport',
    'sport.header.title': 'Running, paddle, football and group sessions to move with new people.',
    'sport.header.text': 'Marseille map, sports session creation, manual approval when needed and dedicated group chat.',
    'sport.map.title': 'Session map',
    'sport.map.text': 'Green pins for sport, gold for VIP sessions.',
    'sport.pending.title': 'Pending requests',
    'sport.create.title': 'Create a session',
    'sport.create.text': 'Running, paddle, football or any collective sport format in Marseille.',
    'sport.create.titlePlaceholder': 'Session title',
    'sport.create.descriptionPlaceholder': 'Description',
    'sport.create.placePlaceholder': 'Location in Marseille',
    'sport.create.tagsPlaceholder': 'Comma-separated tags',
    'sport.create.vip': 'VIP session',
    'sport.create.approval': 'Manually approve signups',
    'sport.create.submit': 'Create session',
    'sport.create.update': 'Update session',
    'sport.list.title': 'My sport sessions',
    'sport.list.text': 'You can edit, delete or process pending requests.',
    'sport.groups.title': 'Groups',
    'sport.groups.text': 'Joined or hosted sessions.',
    'sport.chat.placeholder': 'Ask about the place, time, level or remaining spots...',
    'sport.typing': 'L1VE bot is typing...',
    'sport.emptyCreated': 'No sport session created yet.',
    'sport.emptyConversations': 'Join or create a session to open a group.',
    'sport.chat.emptyTitle': 'Sport chat',
    'sport.chat.emptySubtitle': 'No conversation available.',
    'sport.chat.emptyBody': 'Group messages will appear here.',
    'sport.chat.subtitle': '{place} · {count} athletes',
    'sport.join.organizer': 'You are hosting this session',
    'sport.join.openChat': 'Open group chat',
    'sport.join.pending': 'Request sent',
    'sport.join.request': 'Request to join',
    'sport.join.direct': 'Join',
    'sport.status.vip': 'VIP',
    'sport.status.manual': 'Manual approval',
    'sport.status.direct': 'Instant join',
    'pro.header.eyebrow': 'Professional',
    'pro.header.title': 'Events, afterworks, feed and conversations built around opportunities.',
    'pro.header.text': 'A map view, a creation space, a social feed and group messages for each event.',
    'pro.map.title': 'Event map',
    'pro.map.text': 'Blue pins for events, dedicated shape for afterworks.',
    'pro.pending.title': 'Pending requests',
    'pro.create.title': 'Create an event',
    'pro.create.text': 'Afterwork, meeting, training or masterclass, with optional manual approval.',
    'pro.create.titlePlaceholder': 'Event title',
    'pro.create.descriptionPlaceholder': 'Description',
    'pro.create.placePlaceholder': 'Location in Marseille',
    'pro.create.tagsPlaceholder': 'Comma-separated tags',
    'pro.create.vip': 'VIP event',
    'pro.create.approval': 'Manually approve signups',
    'pro.create.submit': 'Create event',
    'pro.create.update': 'Update event',
    'pro.list.title': 'My events',
    'pro.list.text': 'History, quick edits and pending request management.',
    'pro.feed.createTitle': 'Create a post',
    'pro.feed.createText': 'Publish an update, announcement or quote to your network.',
    'pro.feed.quotePlaceholder': 'Quote author (optional)',
    'pro.feed.contentPlaceholder': 'Your content...',
    'pro.feed.publish': 'Publish',
    'pro.feed.filterTitle': 'Filter the feed',
    'pro.feed.filterText': 'Platinum posts are highlighted in gold.',
    'pro.feed.filter.all': 'All',
    'pro.feed.filter.post': 'Posts',
    'pro.feed.filter.quote': 'Quotes',
    'pro.groups.title': 'Rooms',
    'pro.groups.text': 'Joined or hosted events.',
    'pro.chat.placeholder': 'Ask for the exact place, capacity or VIP access...',
    'pro.typing': 'L1VE bot is typing...',
    'pro.emptyCreated': 'No event created yet.',
    'pro.emptyFeed': 'No content for this filter.',
    'pro.emptyConversations': 'Join or create an event to open a room.',
    'pro.chat.emptyTitle': 'Pro chat',
    'pro.chat.emptySubtitle': 'No conversation available.',
    'pro.chat.emptyBody': 'Messages will appear here.',
    'pro.chat.subtitle': '{kind} · {place}',
    'pro.join.organizer': 'You are hosting this event',
    'pro.join.openChat': 'Open group chat',
    'pro.join.pending': 'Request sent',
    'pro.join.request': 'Request to join',
    'pro.join.direct': 'Join',
    'feed.like': 'Like ({count})',
    'feed.emptyComments': 'No comments yet.',
    'feed.comment.placeholder': 'Add a comment...',
    'feed.comment.send': 'Send',
    'feed.comment.added': 'Comment added.',
    'member.visible': 'visible profile',
    'member.private': 'Private profile',
    'member.view': 'View profile',
    'member.aria': 'Open profile for {name}',
    'member.noBio': 'This member has not added a detailed bio yet.',
    'member.noTags': 'No tags yet',
    'member.privateBio': 'This member chose to keep the profile private. Only minimal information stays visible inside the group.',
    'member.limited': 'Limited access',
    'member.status': 'Status',
    'member.city': 'City',
    'member.age': 'Age',
    'member.info': 'Info',
    'request.none': 'No pending requests right now.',
    'request.accept': 'Accept',
    'request.reject': 'Decline',
    'chat.empty': 'No messages.',
    'chat.seed.amical': 'Welcome to {title}. Ask me about the place, the time or the remaining spots.',
    'chat.seed.sport': 'Welcome to {title}. Ask me about the place, the time or the remaining spots.',
    'chat.seed.pro': 'Welcome to {title}. I can help with the location, remaining spots or VIP access.',
    'toast.postPublished': 'Post published.',
    'toast.swipeLimit': 'Swipe limit reached.',
    'toast.platinumRequired': 'Platinum access required.',
    'toast.requestSent': 'Request sent.',
    'toast.joinConfirmed': 'Signup confirmed.',
    'toast.formRequired': 'Title, description and date are required.',
    'toast.activityUpdated': 'Activity updated.',
    'toast.activityCreated': 'Activity created.',
    'toast.sportUpdated': 'Sport session updated.',
    'toast.sportCreated': 'Sport session created.',
    'toast.eventUpdated': 'Event updated.',
    'toast.eventCreated': 'Event created.',
    'toast.participantAccepted': 'Participant accepted.',
    'toast.requestRejected': 'Request declined.',
    'kind.MASTERCLASS': 'MASTERCLASS',
    'kind.FORMATION': 'TRAINING',
    'kind.REUNION': 'MEETING',
    'kind.AFTERWORK': 'AFTERWORK',
  },
  es: {
    'app.brand': 'L1VE Startup UI',
    'dating.header.eyebrow': 'Dating',
    'dating.header.title': 'Desliza, haz match, charla y prepara citas que de verdad apetecen.',
    'dating.header.text': 'Tarjetas cuadradas, varias fotos, límites diarios y recomendaciones locales por Marsella.',
    'dating.quotaTimezone': 'Cuota Europa/París',
    'dating.pass': 'Pasar',
    'dating.like': 'Like',
    'dating.featured': '⭐ Destacado',
    'dating.spotlight.title': 'Spotlight',
    'dating.pace.title': 'Ritmo del día',
    'dating.matches.title': 'Matches',
    'dating.matches.text': 'Pulsa una tarjeta para abrir la conversación.',
    'dating.conversations.title': 'Conversaciones',
    'dating.conversations.text': 'Todos tus matches activos.',
    'dating.chat.placeholder': 'Envía un mensaje preciso para obtener una respuesta útil...',
    'dating.typing': 'L1VE bot está escribiendo...',
    'dating.emptyMatches': 'Todavía no hay matches. Desliza un poco más para iniciar conversaciones.',
    'dating.emptyConversations': 'Todavía no hay conversaciones.',
    'dating.chat.emptyTitle': 'Chat Dating',
    'dating.chat.emptySubtitle': 'Elige un match para empezar.',
    'dating.chat.emptyBody': 'Los mensajes aparecerán aquí.',
    'dating.chat.with': 'Chat con {name}',
    'dating.chat.direct': 'Mensajería directa',
    'dating.chat.platinum': 'Miembro Platinum · conversación destacada',
    'dating.remaining': 'Te quedan {count} swipes hoy',
    'dating.remainingUnlimited': 'Swipes ilimitados hoy',
    'dating.spotlight.featured': '{name} está en Platinum, así que aparece antes que otros perfiles.',
    'dating.spotlight.next': 'Siguiente perfil: {name}, a {distance} de ti.',
    'dating.pace.unlimited': 'Puedes deslizar sin límites, solo mantén criterio.',
    'dating.pace.limited': 'La cuota diaria está activa. Te quedan {count} swipes antes de medianoche.',
    'amical.header.eyebrow': 'Amistad',
    'amical.header.title': 'Planes, actividades, grupos y encuentros locales a escala humana.',
    'amical.header.text': 'Mapa de Marsella, creación de actividades, validación manual si hace falta y chat de grupo.',
    'amical.map.title': 'Mapa de actividades',
    'amical.map.text': 'Pins ciruela para amistad y dorados para actividades VIP.',
    'amical.pending.title': 'Solicitudes pendientes',
    'amical.create.title': 'Crear una actividad',
    'amical.create.text': 'Añade una salida local y activa validación manual si hace falta.',
    'amical.create.titlePlaceholder': 'Título de la actividad',
    'amical.create.descriptionPlaceholder': 'Descripción',
    'amical.create.placePlaceholder': 'Lugar en Marsella',
    'amical.create.tagsPlaceholder': 'Etiquetas separadas por comas',
    'amical.create.vip': 'Actividad VIP',
    'amical.create.approval': 'Validar las inscripciones manualmente',
    'amical.create.submit': 'Crear actividad',
    'amical.create.update': 'Actualizar actividad',
    'amical.list.title': 'Mis actividades',
    'amical.list.text': 'Puedes editar, borrar o gestionar solicitudes pendientes.',
    'amical.groups.title': 'Grupos',
    'amical.groups.text': 'Actividades unidas u organizadas.',
    'amical.chat.placeholder': 'Pregunta por el lugar, la hora o las plazas...',
    'amical.typing': 'L1VE bot está escribiendo...',
    'amical.emptyCreated': 'Todavía no has creado ninguna actividad.',
    'amical.emptyConversations': 'Únete o crea una actividad para abrir un grupo.',
    'amical.chat.emptyTitle': 'Chat de grupo',
    'amical.chat.emptySubtitle': 'No hay ninguna conversación disponible.',
    'amical.chat.emptyBody': 'Los mensajes del grupo aparecerán aquí.',
    'amical.chat.subtitle': '{place} · {count} participantes',
    'amical.join.organizer': 'Tú organizas esta actividad',
    'amical.join.openChat': 'Abrir chat del grupo',
    'amical.join.pending': 'Solicitud enviada',
    'amical.join.request': 'Pedir unirse',
    'amical.join.direct': 'Unirse',
    'amical.status.vip': 'VIP',
    'amical.status.manual': 'Validación manual',
    'amical.status.direct': 'Inscripción directa',
    'sport.header.eyebrow': 'Deporte',
    'sport.header.title': 'Running, paddle, fútbol y sesiones colectivas para moverse con gente nueva.',
    'sport.header.text': 'Mapa de Marsella, creación de sesiones deportivas, validación manual si hace falta y chat de grupo dedicado.',
    'sport.map.title': 'Mapa de sesiones',
    'sport.map.text': 'Pins verdes para deporte y dorados para sesiones VIP.',
    'sport.pending.title': 'Solicitudes pendientes',
    'sport.create.title': 'Crear una sesión',
    'sport.create.text': 'Running, paddle, fútbol o cualquier formato deportivo colectivo en Marsella.',
    'sport.create.titlePlaceholder': 'Título de la sesión',
    'sport.create.descriptionPlaceholder': 'Descripción',
    'sport.create.placePlaceholder': 'Lugar en Marsella',
    'sport.create.tagsPlaceholder': 'Etiquetas separadas por comas',
    'sport.create.vip': 'Sesión VIP',
    'sport.create.approval': 'Validar las inscripciones manualmente',
    'sport.create.submit': 'Crear sesión',
    'sport.create.update': 'Actualizar sesión',
    'sport.list.title': 'Mis sesiones deportivas',
    'sport.list.text': 'Puedes editar, borrar o gestionar solicitudes pendientes.',
    'sport.groups.title': 'Grupos',
    'sport.groups.text': 'Sesiones unidas u organizadas.',
    'sport.chat.placeholder': 'Pregunta por el lugar, la hora, el nivel o las plazas...',
    'sport.typing': 'L1VE bot está escribiendo...',
    'sport.emptyCreated': 'Todavía no has creado ninguna sesión deportiva.',
    'sport.emptyConversations': 'Únete o crea una sesión para abrir un grupo.',
    'sport.chat.emptyTitle': 'Chat deportivo',
    'sport.chat.emptySubtitle': 'No hay ninguna conversación disponible.',
    'sport.chat.emptyBody': 'Los mensajes del grupo aparecerán aquí.',
    'sport.chat.subtitle': '{place} · {count} deportistas',
    'sport.join.organizer': 'Tú organizas esta sesión',
    'sport.join.openChat': 'Abrir chat del grupo',
    'sport.join.pending': 'Solicitud enviada',
    'sport.join.request': 'Pedir unirse',
    'sport.join.direct': 'Unirse',
    'sport.status.vip': 'VIP',
    'sport.status.manual': 'Validación manual',
    'sport.status.direct': 'Inscripción directa',
    'pro.header.eyebrow': 'Profesional',
    'pro.header.title': 'Eventos, afterworks, feed y conversaciones pensadas para oportunidades.',
    'pro.header.text': 'Vista mapa, espacio de creación, feed social y mensajes de grupo por evento.',
    'pro.map.title': 'Mapa de eventos',
    'pro.map.text': 'Pins azules para eventos y forma dedicada para afterworks.',
    'pro.pending.title': 'Solicitudes pendientes',
    'pro.create.title': 'Crear un evento',
    'pro.create.text': 'Afterwork, reunión, formación o masterclass con validación manual opcional.',
    'pro.create.titlePlaceholder': 'Título del evento',
    'pro.create.descriptionPlaceholder': 'Descripción',
    'pro.create.placePlaceholder': 'Lugar en Marsella',
    'pro.create.tagsPlaceholder': 'Etiquetas separadas por comas',
    'pro.create.vip': 'Evento VIP',
    'pro.create.approval': 'Validar las inscripciones manualmente',
    'pro.create.submit': 'Crear evento',
    'pro.create.update': 'Actualizar evento',
    'pro.list.title': 'Mis eventos',
    'pro.list.text': 'Historial, edición rápida y gestión de solicitudes pendientes.',
    'pro.feed.createTitle': 'Crear un post',
    'pro.feed.createText': 'Publica una novedad, anuncio o cita para tu red.',
    'pro.feed.quotePlaceholder': 'Autor de la cita (opcional)',
    'pro.feed.contentPlaceholder': 'Tu contenido...',
    'pro.feed.publish': 'Publicar',
    'pro.feed.filterTitle': 'Filtrar el feed',
    'pro.feed.filterText': 'Los posts Platinum aparecen marcados en dorado.',
    'pro.feed.filter.all': 'Todo',
    'pro.feed.filter.post': 'Posts',
    'pro.feed.filter.quote': 'Quotes',
    'pro.groups.title': 'Salas',
    'pro.groups.text': 'Eventos unidos u organizados.',
    'pro.chat.placeholder': 'Pregunta por el lugar exacto, la capacidad o el acceso VIP...',
    'pro.typing': 'L1VE bot está escribiendo...',
    'pro.emptyCreated': 'Todavía no has creado ningún evento.',
    'pro.emptyFeed': 'No hay contenido para este filtro.',
    'pro.emptyConversations': 'Únete o crea un evento para abrir una sala.',
    'pro.chat.emptyTitle': 'Chat pro',
    'pro.chat.emptySubtitle': 'No hay ninguna conversación disponible.',
    'pro.chat.emptyBody': 'Los mensajes aparecerán aquí.',
    'pro.chat.subtitle': '{kind} · {place}',
    'pro.join.organizer': 'Tú organizas este evento',
    'pro.join.openChat': 'Abrir chat de grupo',
    'pro.join.pending': 'Solicitud enviada',
    'pro.join.request': 'Pedir unirse',
    'pro.join.direct': 'Unirse',
    'feed.like': 'Like ({count})',
    'feed.emptyComments': 'Todavía no hay comentarios.',
    'feed.comment.placeholder': 'Añadir un comentario...',
    'feed.comment.send': 'Enviar',
    'feed.comment.added': 'Comentario añadido.',
    'member.visible': 'perfil visible',
    'member.private': 'Perfil privado',
    'member.view': 'Ver perfil',
    'member.aria': 'Abrir el perfil de {name}',
    'member.noBio': 'Este miembro todavía no ha añadido una bio detallada.',
    'member.noTags': 'Sin etiquetas',
    'member.privateBio': 'Este miembro ha decidido mantener su perfil privado. Solo queda visible información mínima dentro del grupo.',
    'member.limited': 'Acceso limitado',
    'member.status': 'Estado',
    'member.city': 'Ciudad',
    'member.age': 'Edad',
    'member.info': 'Info',
    'request.none': 'No hay solicitudes pendientes por ahora.',
    'request.accept': 'Aceptar',
    'request.reject': 'Rechazar',
    'chat.empty': 'No hay mensajes.',
    'chat.seed.amical': 'Bienvenido a {title}. Pregúntame por el lugar, la hora o las plazas restantes.',
    'chat.seed.sport': 'Bienvenido a {title}. Pregúntame por el lugar, la hora o las plazas restantes.',
    'chat.seed.pro': 'Bienvenido a {title}. Puedo ayudarte con el lugar, las plazas restantes o el acceso VIP.',
    'toast.postPublished': 'Post publicado.',
    'toast.swipeLimit': 'Límite de swipes alcanzado.',
    'toast.platinumRequired': 'Se requiere acceso Platinum.',
    'toast.requestSent': 'Solicitud enviada.',
    'toast.joinConfirmed': 'Inscripción confirmada.',
    'toast.formRequired': 'El título, la descripción y la fecha son obligatorios.',
    'toast.activityUpdated': 'Actividad actualizada.',
    'toast.activityCreated': 'Actividad creada.',
    'toast.sportUpdated': 'Sesión deportiva actualizada.',
    'toast.sportCreated': 'Sesión deportiva creada.',
    'toast.eventUpdated': 'Evento actualizado.',
    'toast.eventCreated': 'Evento creado.',
    'toast.participantAccepted': 'Participante aceptado.',
    'toast.requestRejected': 'Solicitud rechazada.',
    'kind.MASTERCLASS': 'MASTERCLASS',
    'kind.FORMATION': 'FORMACIÓN',
    'kind.REUNION': 'REUNIÓN',
    'kind.AFTERWORK': 'AFTERWORK',
  },
  it: {
    'app.brand': 'L1VE Startup UI',
    'dating.header.eyebrow': 'Dating',
    'dating.header.title': 'Swipe, match, messaggi e appuntamenti che vale davvero la pena vivere.',
    'dating.header.text': 'Card quadrate, foto multiple, quote giornaliere e raccomandazioni locali intorno a Marsiglia.',
    'dating.quotaTimezone': 'Quota Europa/Parigi',
    'dating.pass': 'Passa',
    'dating.like': 'Like',
    'dating.featured': '⭐ In evidenza',
    'dating.spotlight.title': 'Spotlight',
    'dating.pace.title': 'Ritmo del giorno',
    'dating.matches.title': 'Match',
    'dating.matches.text': 'Tocca una card per aprire la conversazione.',
    'dating.conversations.title': 'Conversazioni',
    'dating.conversations.text': 'Tutti i tuoi match attivi.',
    'dating.chat.placeholder': 'Invia un messaggio preciso per ottenere una risposta utile...',
    'dating.typing': 'L1VE bot sta scrivendo...',
    'dating.emptyMatches': 'Nessun match per ora. Fai ancora qualche swipe per iniziare a conversare.',
    'dating.emptyConversations': 'Nessuna conversazione al momento.',
    'dating.chat.emptyTitle': 'Chat Dating',
    'dating.chat.emptySubtitle': 'Scegli un match per iniziare.',
    'dating.chat.emptyBody': 'I messaggi appariranno qui.',
    'dating.chat.with': 'Chat con {name}',
    'dating.chat.direct': 'Messaggistica diretta',
    'dating.chat.platinum': 'Membro Platinum · conversazione evidenziata',
    'dating.remaining': 'Ti restano {count} swipe oggi',
    'dating.remainingUnlimited': 'Swipe illimitati oggi',
    'dating.spotlight.featured': '{name} è Platinum, quindi questo profilo viene mostrato prima degli altri.',
    'dating.spotlight.next': 'Prossimo profilo: {name}, a {distance} da te.',
    'dating.pace.unlimited': 'Puoi fare swipe senza limiti, basta mantenere un po’ di criterio.',
    'dating.pace.limited': 'La quota giornaliera è attiva. Ti restano {count} swipe prima di mezzanotte.',
    'amical.header.eyebrow': 'Amicizia',
    'amical.header.title': 'Uscite, attività, gruppi e incontri locali a misura d’uomo.',
    'amical.header.text': 'Mappa di Marsiglia, creazione attività, approvazione manuale se serve e chat di gruppo.',
    'amical.map.title': 'Mappa attività',
    'amical.map.text': 'Pin prugna per amicizia e dorati per attività VIP.',
    'amical.pending.title': 'Richieste in attesa',
    'amical.create.title': 'Crea un’attività',
    'amical.create.text': 'Aggiungi un’uscita locale e attiva l’approvazione manuale se serve.',
    'amical.create.titlePlaceholder': 'Titolo attività',
    'amical.create.descriptionPlaceholder': 'Descrizione',
    'amical.create.placePlaceholder': 'Luogo a Marsiglia',
    'amical.create.tagsPlaceholder': 'Tag separati da virgole',
    'amical.create.vip': 'Attività VIP',
    'amical.create.approval': 'Convalida manualmente le iscrizioni',
    'amical.create.submit': 'Crea attività',
    'amical.create.update': 'Aggiorna attività',
    'amical.list.title': 'Le mie attività',
    'amical.list.text': 'Puoi modificare, eliminare o gestire le richieste in attesa.',
    'amical.groups.title': 'Gruppi',
    'amical.groups.text': 'Attività a cui partecipi o che organizzi.',
    'amical.chat.placeholder': 'Chiedi del luogo, dell’ora o dei posti rimasti...',
    'amical.typing': 'L1VE bot sta scrivendo...',
    'amical.emptyCreated': 'Nessuna attività creata per ora.',
    'amical.emptyConversations': 'Partecipa o crea un’attività per aprire un gruppo.',
    'amical.chat.emptyTitle': 'Chat di gruppo',
    'amical.chat.emptySubtitle': 'Nessuna conversazione disponibile.',
    'amical.chat.emptyBody': 'I messaggi del gruppo appariranno qui.',
    'amical.chat.subtitle': '{place} · {count} partecipanti',
    'amical.join.organizer': 'Stai organizzando questa attività',
    'amical.join.openChat': 'Apri la chat di gruppo',
    'amical.join.pending': 'Richiesta inviata',
    'amical.join.request': 'Chiedi di partecipare',
    'amical.join.direct': 'Iscriviti',
    'amical.status.vip': 'VIP',
    'amical.status.manual': 'Approvazione manuale',
    'amical.status.direct': 'Iscrizione diretta',
    'sport.header.eyebrow': 'Sport',
    'sport.header.title': 'Running, paddle, calcio e sessioni collettive per muoversi insieme ad altra gente.',
    'sport.header.text': 'Mappa di Marsiglia, creazione sessioni sportive, approvazione manuale se serve e chat di gruppo dedicata.',
    'sport.map.title': 'Mappa sessioni',
    'sport.map.text': 'Pin verdi per sport e dorati per sessioni VIP.',
    'sport.pending.title': 'Richieste in attesa',
    'sport.create.title': 'Crea una sessione',
    'sport.create.text': 'Running, paddle, calcio o qualunque formato sportivo collettivo a Marsiglia.',
    'sport.create.titlePlaceholder': 'Titolo sessione',
    'sport.create.descriptionPlaceholder': 'Descrizione',
    'sport.create.placePlaceholder': 'Luogo a Marsiglia',
    'sport.create.tagsPlaceholder': 'Tag separati da virgole',
    'sport.create.vip': 'Sessione VIP',
    'sport.create.approval': 'Convalida manualmente le iscrizioni',
    'sport.create.submit': 'Crea sessione',
    'sport.create.update': 'Aggiorna sessione',
    'sport.list.title': 'Le mie sessioni sportive',
    'sport.list.text': 'Puoi modificare, eliminare o gestire le richieste in attesa.',
    'sport.groups.title': 'Gruppi',
    'sport.groups.text': 'Sessioni a cui partecipi o che organizzi.',
    'sport.chat.placeholder': 'Chiedi del luogo, dell’ora, del livello o dei posti rimasti...',
    'sport.typing': 'L1VE bot sta scrivendo...',
    'sport.emptyCreated': 'Nessuna sessione sportiva creata per ora.',
    'sport.emptyConversations': 'Partecipa o crea una sessione per aprire un gruppo.',
    'sport.chat.emptyTitle': 'Chat sportiva',
    'sport.chat.emptySubtitle': 'Nessuna conversazione disponibile.',
    'sport.chat.emptyBody': 'I messaggi del gruppo appariranno qui.',
    'sport.chat.subtitle': '{place} · {count} sportivi',
    'sport.join.organizer': 'Stai organizzando questa sessione',
    'sport.join.openChat': 'Apri la chat del gruppo',
    'sport.join.pending': 'Richiesta inviata',
    'sport.join.request': 'Chiedi di partecipare',
    'sport.join.direct': 'Iscriviti',
    'sport.status.vip': 'VIP',
    'sport.status.manual': 'Approvazione manuale',
    'sport.status.direct': 'Iscrizione diretta',
    'pro.header.eyebrow': 'Professionale',
    'pro.header.title': 'Eventi, afterwork, feed e conversazioni orientate alle opportunità.',
    'pro.header.text': 'Vista mappa, spazio creazione, feed social e messaggi di gruppo per ogni evento.',
    'pro.map.title': 'Mappa eventi',
    'pro.map.text': 'Pin blu per eventi e forma dedicata per gli afterwork.',
    'pro.pending.title': 'Richieste in attesa',
    'pro.create.title': 'Crea un evento',
    'pro.create.text': 'Afterwork, riunione, formazione o masterclass con approvazione manuale opzionale.',
    'pro.create.titlePlaceholder': 'Titolo evento',
    'pro.create.descriptionPlaceholder': 'Descrizione',
    'pro.create.placePlaceholder': 'Luogo a Marsiglia',
    'pro.create.tagsPlaceholder': 'Tag separati da virgole',
    'pro.create.vip': 'Evento VIP',
    'pro.create.approval': 'Convalida manualmente le iscrizioni',
    'pro.create.submit': 'Crea evento',
    'pro.create.update': 'Aggiorna evento',
    'pro.list.title': 'I miei eventi',
    'pro.list.text': 'Storico, modifiche rapide e gestione delle richieste in attesa.',
    'pro.feed.createTitle': 'Crea un post',
    'pro.feed.createText': 'Pubblica un aggiornamento, un annuncio o una citazione per il tuo network.',
    'pro.feed.quotePlaceholder': 'Autore della citazione (opzionale)',
    'pro.feed.contentPlaceholder': 'Il tuo contenuto...',
    'pro.feed.publish': 'Pubblica',
    'pro.feed.filterTitle': 'Filtra il feed',
    'pro.feed.filterText': 'I post Platinum sono evidenziati in oro.',
    'pro.feed.filter.all': 'Tutto',
    'pro.feed.filter.post': 'Post',
    'pro.feed.filter.quote': 'Quotes',
    'pro.groups.title': 'Salotti',
    'pro.groups.text': 'Eventi a cui partecipi o che organizzi.',
    'pro.chat.placeholder': 'Chiedi il luogo esatto, la capienza o l’accesso VIP...',
    'pro.typing': 'L1VE bot sta scrivendo...',
    'pro.emptyCreated': 'Nessun evento creato per ora.',
    'pro.emptyFeed': 'Nessun contenuto per questo filtro.',
    'pro.emptyConversations': 'Partecipa o crea un evento per aprire un salotto.',
    'pro.chat.emptyTitle': 'Chat pro',
    'pro.chat.emptySubtitle': 'Nessuna conversazione disponibile.',
    'pro.chat.emptyBody': 'I messaggi appariranno qui.',
    'pro.chat.subtitle': '{kind} · {place}',
    'pro.join.organizer': 'Stai organizzando questo evento',
    'pro.join.openChat': 'Apri la chat di gruppo',
    'pro.join.pending': 'Richiesta inviata',
    'pro.join.request': 'Chiedi di partecipare',
    'pro.join.direct': 'Iscriviti',
    'feed.like': 'Like ({count})',
    'feed.emptyComments': 'Nessun commento per ora.',
    'feed.comment.placeholder': 'Aggiungi un commento...',
    'feed.comment.send': 'Invia',
    'feed.comment.added': 'Commento aggiunto.',
    'member.visible': 'profilo visibile',
    'member.private': 'Profilo privato',
    'member.view': 'Vedi profilo',
    'member.aria': 'Apri il profilo di {name}',
    'member.noBio': 'Questo membro non ha ancora aggiunto una bio dettagliata.',
    'member.noTags': 'Nessun tag indicato',
    'member.privateBio': 'Questo membro ha scelto di mantenere privato il profilo. Nel gruppo restano visibili solo poche informazioni minime.',
    'member.limited': 'Accesso limitato',
    'member.status': 'Stato',
    'member.city': 'Città',
    'member.age': 'Età',
    'member.info': 'Info',
    'request.none': 'Nessuna richiesta in attesa al momento.',
    'request.accept': 'Accetta',
    'request.reject': 'Rifiuta',
    'chat.empty': 'Nessun messaggio.',
    'chat.seed.amical': 'Benvenuto in {title}. Chiedimi il luogo, l’ora o i posti rimasti.',
    'chat.seed.sport': 'Benvenuto in {title}. Chiedimi il luogo, l’ora o i posti rimasti.',
    'chat.seed.pro': 'Benvenuto in {title}. Posso aiutarti con il luogo, i posti rimasti o l’accesso VIP.',
    'toast.postPublished': 'Post pubblicato.',
    'toast.swipeLimit': 'Limite swipe raggiunto.',
    'toast.platinumRequired': 'Accesso Platinum richiesto.',
    'toast.requestSent': 'Richiesta inviata.',
    'toast.joinConfirmed': 'Iscrizione confermata.',
    'toast.formRequired': 'Titolo, descrizione e data sono obbligatori.',
    'toast.activityUpdated': 'Attività aggiornata.',
    'toast.activityCreated': 'Attività creata.',
    'toast.sportUpdated': 'Sessione sportiva aggiornata.',
    'toast.sportCreated': 'Sessione sportiva creata.',
    'toast.eventUpdated': 'Evento aggiornato.',
    'toast.eventCreated': 'Evento creato.',
    'toast.participantAccepted': 'Partecipante accettato.',
    'toast.requestRejected': 'Richiesta rifiutata.',
    'kind.MASTERCLASS': 'MASTERCLASS',
    'kind.FORMATION': 'FORMAZIONE',
    'kind.REUNION': 'RIUNIONE',
    'kind.AFTERWORK': 'AFTERWORK',
  },
};

Object.entries(extraTranslations).forEach(([lang, entries]) => {
  translations[lang] = {
    ...(translations[lang] || {}),
    ...entries,
  };
});

const patchTranslations = {
  fr: {
    'toast.profile.saved': 'Profil sauvegardé.',
    'toast.match': 'Match avec {name}.',
    'toast.likeSent': 'Like envoyé à {name}.',
    'toast.requestAlreadyPending': 'Ta demande est déjà en attente.',
    'toast.activityLimit': 'Limite mensuelle atteinte.',
    'toast.activityFull': 'Cette activité est déjà complète.',
    'toast.sportFull': 'Cette session est déjà complète.',
    'toast.eventFull': 'Cet événement est complet.',
    'toast.activityApprovalFull': 'Activité complète, impossible d’accepter plus de monde.',
    'toast.sportApprovalFull': 'Session complète, impossible d’accepter plus de monde.',
    'toast.eventApprovalFull': 'Événement complet, impossible d’accepter plus de monde.',
    'toast.subscriptionInactive': 'Abonnement inactif.',
    'toast.basicBlockedTab': 'Onglet bloqué par le plan Basic.',
    'upsell.swipeLimit': 'Tu as atteint ta limite de swipes. Passe en Premium ou Platinum pour respirer.',
    'upsell.activityLimit': 'Tu as atteint ta limite d’inscriptions mensuelles.',
    'upsell.vipActivity': 'Cette activité VIP est réservée au plan Platinum.',
    'upsell.vipSport': 'Cette session VIP est réservée au plan Platinum.',
    'upsell.vipEvent': 'Cet événement VIP est réservé aux membres Platinum.',
    'upsell.subscriptionInactive': 'Ton abonnement est actuellement inactif. Réactive-le depuis l’espace compte.',
    'upsell.basicBlocked': 'Le plan Basic bloque cet espace. Tu as choisi {space} comme seul onglet autorisé.',
    'confirm.delete': 'Supprimer "{title}" ?',
  },
  en: {
    'toast.profile.saved': 'Profile saved.',
    'toast.match': 'Match with {name}.',
    'toast.likeSent': 'Like sent to {name}.',
    'toast.requestAlreadyPending': 'Your request is already pending.',
    'toast.activityLimit': 'Monthly signup limit reached.',
    'toast.activityFull': 'This activity is already full.',
    'toast.sportFull': 'This session is already full.',
    'toast.eventFull': 'This event is full.',
    'toast.activityApprovalFull': 'Activity is full, no more participants can be accepted.',
    'toast.sportApprovalFull': 'Session is full, no more participants can be accepted.',
    'toast.eventApprovalFull': 'Event is full, no more participants can be accepted.',
    'toast.subscriptionInactive': 'Subscription inactive.',
    'toast.basicBlockedTab': 'This tab is blocked by the Basic plan.',
    'upsell.swipeLimit': 'You hit your swipe limit. Upgrade to Premium or Platinum for breathing room.',
    'upsell.activityLimit': 'You reached your monthly signup limit.',
    'upsell.vipActivity': 'This VIP activity is reserved for Platinum.',
    'upsell.vipSport': 'This VIP session is reserved for Platinum.',
    'upsell.vipEvent': 'This VIP event is reserved for Platinum members.',
    'upsell.subscriptionInactive': 'Your subscription is currently inactive. Reactivate it from the account page.',
    'upsell.basicBlocked': 'The Basic plan blocks this area. You picked {space} as your only unlocked tab.',
    'confirm.delete': 'Delete "{title}"?',
  },
  es: {
    'toast.profile.saved': 'Perfil guardado.',
    'toast.match': 'Match con {name}.',
    'toast.likeSent': 'Like enviado a {name}.',
    'toast.requestAlreadyPending': 'Tu solicitud ya está pendiente.',
    'toast.activityLimit': 'Has alcanzado el límite mensual de inscripciones.',
    'toast.activityFull': 'Esta actividad ya está completa.',
    'toast.sportFull': 'Esta sesión ya está completa.',
    'toast.eventFull': 'Este evento está completo.',
    'toast.activityApprovalFull': 'La actividad está completa, no se puede aceptar a más gente.',
    'toast.sportApprovalFull': 'La sesión está completa, no se puede aceptar a más gente.',
    'toast.eventApprovalFull': 'El evento está completo, no se puede aceptar a más gente.',
    'toast.subscriptionInactive': 'Suscripción inactiva.',
    'toast.basicBlockedTab': 'Esta pestaña está bloqueada por el plan Basic.',
    'upsell.swipeLimit': 'Has alcanzado tu límite de swipes. Sube a Premium o Platinum para ir sin fricción.',
    'upsell.activityLimit': 'Has alcanzado tu límite mensual de inscripciones.',
    'upsell.vipActivity': 'Esta actividad VIP está reservada al plan Platinum.',
    'upsell.vipSport': 'Esta sesión VIP está reservada al plan Platinum.',
    'upsell.vipEvent': 'Este evento VIP está reservado a miembros Platinum.',
    'upsell.subscriptionInactive': 'Tu suscripción está inactiva. Reactívala desde la cuenta.',
    'upsell.basicBlocked': 'El plan Basic bloquea este espacio. Elegiste {space} como única pestaña autorizada.',
    'confirm.delete': '¿Eliminar "{title}"?',
  },
  it: {
    'toast.profile.saved': 'Profilo salvato.',
    'toast.match': 'Match con {name}.',
    'toast.likeSent': 'Like inviato a {name}.',
    'toast.requestAlreadyPending': 'La tua richiesta è già in attesa.',
    'toast.activityLimit': 'Hai raggiunto il limite mensile di iscrizioni.',
    'toast.activityFull': 'Questa attività è già al completo.',
    'toast.sportFull': 'Questa sessione è già al completo.',
    'toast.eventFull': 'Questo evento è al completo.',
    'toast.activityApprovalFull': 'Attività completa, non è possibile accettare altre persone.',
    'toast.sportApprovalFull': 'Sessione completa, non è possibile accettare altre persone.',
    'toast.eventApprovalFull': 'Evento completo, non è possibile accettare altre persone.',
    'toast.subscriptionInactive': 'Abbonamento inattivo.',
    'toast.basicBlockedTab': 'Questa scheda è bloccata dal piano Basic.',
    'upsell.swipeLimit': 'Hai raggiunto il limite di swipe. Passa a Premium o Platinum per muoverti senza attrito.',
    'upsell.activityLimit': 'Hai raggiunto il limite mensile di iscrizioni.',
    'upsell.vipActivity': 'Questa attività VIP è riservata al piano Platinum.',
    'upsell.vipSport': 'Questa sessione VIP è riservata al piano Platinum.',
    'upsell.vipEvent': 'Questo evento VIP è riservato ai membri Platinum.',
    'upsell.subscriptionInactive': 'Il tuo abbonamento è inattivo. Riattivalo dalla pagina account.',
    'upsell.basicBlocked': 'Il piano Basic blocca quest’area. Hai scelto {space} come unica scheda autorizzata.',
    'confirm.delete': 'Eliminare "{title}"?',
  },
};

Object.entries(patchTranslations).forEach(([lang, entries]) => {
  translations[lang] = {
    ...(translations[lang] || {}),
    ...entries,
  };
});

const landingAndForgotTranslations = {
  fr: {
    'title.forgot': 'L1VE - Mot de passe oublié',
    'title.legal': 'L1VE - Mentions légales',
    'title.terms': 'L1VE - CGU',
    'title.privacy': 'L1VE - Politique de confidentialité',
    'title.contact': 'L1VE - Contact',
    'landing.presentation.body':
      'L1VE est une plateforme de rencontre locale centrée sur Marseille, qui connecte les gens dans 4 sphères de vie : romantique, amicale, sportive et professionnelle. Tout se passe en vrai, dans ta ville.',
    'landing.space.dating.text': 'Swipe, match, rencontre.',
    'landing.space.amical.text': 'Activités, groupes, sorties.',
    'landing.space.sport.text': 'Running, paddle, foot, sessions.',
    'landing.space.pro.text': 'Réseau, événements, afterworks.',
    'landing.universe.dating.text': 'Rencontres locales, profils mis en avant et messagerie précise.',
    'landing.universe.dating.f1': 'Swipe et recommandations Marseille',
    'landing.universe.dating.f2': 'Matches et conversations privées',
    'landing.universe.dating.f3': 'Visibilité boostée pour Platinum',
    'landing.universe.amical.text': 'Des activités concrètes pour sortir, se voir et créer des groupes.',
    'landing.universe.amical.f1': 'Carte Marseille et pins thématiques',
    'landing.universe.amical.f2': "Groupes d'activité et validation manuelle",
    'landing.universe.amical.f3': 'Organisation simple côté mobile',
    'landing.universe.sport.text': 'Des rencontres actives autour du running, du paddle et du foot.',
    'landing.universe.sport.f1': 'Carte Marseille et sessions sportives',
    'landing.universe.sport.f2': "Groupes d'entraînement et validations manuelles",
    'landing.universe.sport.f3': 'Messages dédiés par session',
    'landing.universe.pro.text': 'Afterworks, feed, événements et conversations axées opportunités.',
    'landing.universe.pro.f1': 'MASTERCLASS, RÉUNION, FORMATION, AFTERWORK',
    'landing.universe.pro.f2': 'Feed social et commentaires inline',
    'landing.universe.pro.f3': 'Messages de groupe par événement',
    'landing.pricing.eyebrow': 'Abonnements',
    'landing.pricing.title': 'Choisis ton niveau',
    'landing.plan.basic.meta': '1 seul onglet au choix',
    'landing.plan.basic.price': 'Free',
    'landing.plan.basic.f1': '50 swipes / jour',
    'landing.plan.basic.f2': '4 inscriptions / mois',
    'landing.plan.basic.f3': '1 espace autorisé',
    'landing.plan.basic.cta': 'Commencer',
    'landing.plan.intermediate.ribbon': 'Populaire',
    'landing.plan.intermediate.price': '9,99€/mois',
    'landing.plan.intermediate.meta': 'Les 4 espaces inclus',
    'landing.plan.intermediate.f1': '45 swipes / jour',
    'landing.plan.intermediate.f2': '6 inscriptions / mois',
    'landing.plan.intermediate.f3': "Accès complet à l'app",
    'landing.plan.intermediate.cta': 'Choisir',
    'landing.plan.premium.meta': 'Illimité',
    'landing.plan.premium.price': '15,99€/mois',
    'landing.plan.premium.f1': 'Swipes illimités',
    'landing.plan.premium.f2': 'Inscriptions illimitées',
    'landing.plan.premium.f3': 'Déblocable aussi par parrainage',
    'landing.plan.premium.cta': 'Choisir',
    'landing.plan.platinum.ribbon': 'VIP',
    'landing.plan.platinum.price': '29,99€/mois',
    'landing.plan.platinum.meta': 'Illimité + visibilité',
    'landing.plan.platinum.f1': 'Activités VIP',
    'landing.plan.platinum.f2': 'Profils et posts mis en avant',
    'landing.plan.platinum.f3': 'Badge premium distinctif',
    'landing.plan.platinum.cta': 'Choisir',
    'landing.footer.legal': 'Mentions légales',
    'landing.footer.terms': 'CGU',
    'landing.footer.privacy': 'Politique de confidentialité',
    'landing.footer.contact': 'Contact',
    'landing.footer.copyright': '© 2025 L1VE — Tous droits réservés',
    'forgot.eyebrow': 'Récupération',
    'forgot.title': 'Réinitialise ton mot de passe sans perdre ton élan.',
    'forgot.text':
      'Entre ton email. On simule l’envoi d’un lien de réinitialisation pour que ton parcours reste complet côté front.',
    'forgot.email': 'Email',
    'forgot.submit': 'Envoyer le lien',
    'forgot.back': 'Retour à la connexion',
    'toast.forgot.sent': 'Si un compte existe, un lien de réinitialisation vient d’être envoyé.',
  },
  en: {
    'title.forgot': 'L1VE - Forgot password',
    'title.legal': 'L1VE - Legal notice',
    'title.terms': 'L1VE - Terms',
    'title.privacy': 'L1VE - Privacy policy',
    'title.contact': 'L1VE - Contact',
    'landing.presentation.body':
      'L1VE is a local platform built around Marseille, connecting people across 4 parts of life: romantic, friendship, sport and professional. Everything happens in real life, in your city.',
    'landing.space.dating.text': 'Swipe, match, meet.',
    'landing.space.amical.text': 'Activities, groups, outings.',
    'landing.space.sport.text': 'Running, paddle, football, sessions.',
    'landing.space.pro.text': 'Network, events, afterworks.',
    'landing.universe.dating.text': 'Local dating, featured profiles and focused messaging.',
    'landing.universe.dating.f1': 'Swipe and Marseille recommendations',
    'landing.universe.dating.f2': 'Matches and private conversations',
    'landing.universe.dating.f3': 'Extra visibility for Platinum',
    'landing.universe.amical.text': 'Concrete activities to go out, meet up and build groups.',
    'landing.universe.amical.f1': 'Marseille map and themed pins',
    'landing.universe.amical.f2': 'Activity groups and manual approval',
    'landing.universe.amical.f3': 'Mobile-first organisation',
    'landing.universe.sport.text': 'Active meetups around running, paddle and football.',
    'landing.universe.sport.f1': 'Marseille map and sport sessions',
    'landing.universe.sport.f2': 'Training groups and manual approvals',
    'landing.universe.sport.f3': 'Dedicated messaging per session',
    'landing.universe.pro.text': 'Afterworks, feed, events and conversations built around opportunities.',
    'landing.universe.pro.f1': 'MASTERCLASS, MEETING, TRAINING, AFTERWORK',
    'landing.universe.pro.f2': 'Social feed and inline comments',
    'landing.universe.pro.f3': 'Group messages per event',
    'landing.pricing.eyebrow': 'Subscriptions',
    'landing.pricing.title': 'Choose your level',
    'landing.plan.basic.meta': 'One tab only',
    'landing.plan.basic.price': 'Free',
    'landing.plan.basic.f1': '50 swipes / day',
    'landing.plan.basic.f2': '4 signups / month',
    'landing.plan.basic.f3': '1 unlocked space',
    'landing.plan.basic.cta': 'Get started',
    'landing.plan.intermediate.ribbon': 'Popular',
    'landing.plan.intermediate.price': '€9.99/month',
    'landing.plan.intermediate.meta': 'All 4 spaces included',
    'landing.plan.intermediate.f1': '45 swipes / day',
    'landing.plan.intermediate.f2': '6 signups / month',
    'landing.plan.intermediate.f3': 'Full app access',
    'landing.plan.intermediate.cta': 'Choose',
    'landing.plan.premium.meta': 'Unlimited',
    'landing.plan.premium.price': '€15.99/month',
    'landing.plan.premium.f1': 'Unlimited swipes',
    'landing.plan.premium.f2': 'Unlimited signups',
    'landing.plan.premium.f3': 'Can also be unlocked through referrals',
    'landing.plan.premium.cta': 'Choose',
    'landing.plan.platinum.ribbon': 'VIP',
    'landing.plan.platinum.price': '€29.99/month',
    'landing.plan.platinum.meta': 'Unlimited + visibility',
    'landing.plan.platinum.f1': 'VIP activities',
    'landing.plan.platinum.f2': 'Featured profiles and posts',
    'landing.plan.platinum.f3': 'Distinct premium badge',
    'landing.plan.platinum.cta': 'Choose',
    'landing.footer.legal': 'Legal notice',
    'landing.footer.terms': 'Terms',
    'landing.footer.privacy': 'Privacy policy',
    'landing.footer.contact': 'Contact',
    'landing.footer.copyright': '© 2025 L1VE — All rights reserved',
    'forgot.eyebrow': 'Recovery',
    'forgot.title': 'Reset your password without losing momentum.',
    'forgot.text':
      'Enter your email. We simulate sending a reset link so the flow stays complete on the front end.',
    'forgot.email': 'Email',
    'forgot.submit': 'Send the link',
    'forgot.back': 'Back to login',
    'toast.forgot.sent': 'If an account exists, a reset link has just been sent.',
  },
  es: {
    'title.forgot': 'L1VE - Olvidé mi contraseña',
    'title.legal': 'L1VE - Aviso legal',
    'title.terms': 'L1VE - CGU',
    'title.privacy': 'L1VE - Política de privacidad',
    'title.contact': 'L1VE - Contacto',
    'landing.presentation.body':
      'L1VE es una plataforma local centrada en Marsella que conecta a la gente en 4 esferas de vida: romántica, amistosa, deportiva y profesional. Todo ocurre en la vida real, dentro de tu ciudad.',
    'landing.space.dating.text': 'Swipe, match, encuentro.',
    'landing.space.amical.text': 'Actividades, grupos, salidas.',
    'landing.space.sport.text': 'Running, pádel, fútbol, sesiones.',
    'landing.space.pro.text': 'Red, eventos, afterworks.',
    'landing.universe.dating.text': 'Encuentros locales, perfiles destacados y mensajería precisa.',
    'landing.universe.dating.f1': 'Swipe y recomendaciones en Marsella',
    'landing.universe.dating.f2': 'Matches y conversaciones privadas',
    'landing.universe.dating.f3': 'Visibilidad extra para Platinum',
    'landing.universe.amical.text': 'Actividades concretas para salir, verse y crear grupos.',
    'landing.universe.amical.f1': 'Mapa de Marsella y pins temáticos',
    'landing.universe.amical.f2': 'Grupos de actividad y validación manual',
    'landing.universe.amical.f3': 'Organización simple en móvil',
    'landing.universe.sport.text': 'Encuentros activos alrededor del running, el pádel y el fútbol.',
    'landing.universe.sport.f1': 'Mapa de Marsella y sesiones deportivas',
    'landing.universe.sport.f2': 'Grupos de entrenamiento y validaciones manuales',
    'landing.universe.sport.f3': 'Mensajes dedicados por sesión',
    'landing.universe.pro.text': 'Afterworks, feed, eventos y conversaciones centradas en oportunidades.',
    'landing.universe.pro.f1': 'MASTERCLASS, REUNIÓN, FORMACIÓN, AFTERWORK',
    'landing.universe.pro.f2': 'Feed social y comentarios inline',
    'landing.universe.pro.f3': 'Mensajes de grupo por evento',
    'landing.pricing.eyebrow': 'Suscripciones',
    'landing.pricing.title': 'Elige tu nivel',
    'landing.plan.basic.meta': 'Un solo espacio a elegir',
    'landing.plan.basic.price': 'Gratis',
    'landing.plan.basic.f1': '50 swipes / día',
    'landing.plan.basic.f2': '4 inscripciones / mes',
    'landing.plan.basic.f3': '1 espacio desbloqueado',
    'landing.plan.basic.cta': 'Empezar',
    'landing.plan.intermediate.ribbon': 'Popular',
    'landing.plan.intermediate.price': '9,99€/mes',
    'landing.plan.intermediate.meta': 'Los 4 espacios incluidos',
    'landing.plan.intermediate.f1': '45 swipes / día',
    'landing.plan.intermediate.f2': '6 inscripciones / mes',
    'landing.plan.intermediate.f3': 'Acceso completo a la app',
    'landing.plan.intermediate.cta': 'Elegir',
    'landing.plan.premium.meta': 'Ilimitado',
    'landing.plan.premium.price': '15,99€/mes',
    'landing.plan.premium.f1': 'Swipes ilimitados',
    'landing.plan.premium.f2': 'Inscripciones ilimitadas',
    'landing.plan.premium.f3': 'También se desbloquea por referidos',
    'landing.plan.premium.cta': 'Elegir',
    'landing.plan.platinum.ribbon': 'VIP',
    'landing.plan.platinum.price': '29,99€/mes',
    'landing.plan.platinum.meta': 'Ilimitado + visibilidad',
    'landing.plan.platinum.f1': 'Actividades VIP',
    'landing.plan.platinum.f2': 'Perfiles y posts destacados',
    'landing.plan.platinum.f3': 'Badge premium distintivo',
    'landing.plan.platinum.cta': 'Elegir',
    'landing.footer.legal': 'Aviso legal',
    'landing.footer.terms': 'CGU',
    'landing.footer.privacy': 'Política de privacidad',
    'landing.footer.contact': 'Contacto',
    'landing.footer.copyright': '© 2025 L1VE — Todos los derechos reservados',
    'forgot.eyebrow': 'Recuperación',
    'forgot.title': 'Restablece tu contraseña sin perder el ritmo.',
    'forgot.text':
      'Introduce tu email. Simulamos el envío de un enlace de restablecimiento para mantener el flujo completo en front.',
    'forgot.email': 'Email',
    'forgot.submit': 'Enviar enlace',
    'forgot.back': 'Volver al login',
    'toast.forgot.sent': 'Si existe una cuenta, acaba de enviarse un enlace de restablecimiento.',
  },
  it: {
    'title.forgot': 'L1VE - Password dimenticata',
    'title.legal': 'L1VE - Note legali',
    'title.terms': 'L1VE - CGU',
    'title.privacy': 'L1VE - Privacy policy',
    'title.contact': 'L1VE - Contatto',
    'landing.presentation.body':
      'L1VE è una piattaforma locale centrata su Marsiglia che connette le persone in 4 sfere di vita: romantica, amicale, sportiva e professionale. Tutto accade dal vivo, nella tua città.',
    'landing.space.dating.text': 'Swipe, match, incontro.',
    'landing.space.amical.text': 'Attività, gruppi, uscite.',
    'landing.space.sport.text': 'Running, padel, calcio, sessioni.',
    'landing.space.pro.text': 'Rete, eventi, afterwork.',
    'landing.universe.dating.text': 'Incontri locali, profili messi in evidenza e messaggistica precisa.',
    'landing.universe.dating.f1': 'Swipe e raccomandazioni a Marsiglia',
    'landing.universe.dating.f2': 'Match e conversazioni private',
    'landing.universe.dating.f3': 'Visibilità extra per Platinum',
    'landing.universe.amical.text': 'Attività concrete per uscire, vedersi e creare gruppi.',
    'landing.universe.amical.f1': 'Mappa di Marsiglia e pin tematici',
    'landing.universe.amical.f2': 'Gruppi attività e approvazione manuale',
    'landing.universe.amical.f3': 'Organizzazione semplice da mobile',
    'landing.universe.sport.text': 'Incontri attivi intorno a running, padel e calcio.',
    'landing.universe.sport.f1': 'Mappa di Marsiglia e sessioni sportive',
    'landing.universe.sport.f2': 'Gruppi di allenamento e approvazioni manuali',
    'landing.universe.sport.f3': 'Messaggi dedicati per sessione',
    'landing.universe.pro.text': 'Afterwork, feed, eventi e conversazioni orientate alle opportunità.',
    'landing.universe.pro.f1': 'MASTERCLASS, RIUNIONE, FORMAZIONE, AFTERWORK',
    'landing.universe.pro.f2': 'Feed social e commenti inline',
    'landing.universe.pro.f3': 'Messaggi di gruppo per evento',
    'landing.pricing.eyebrow': 'Abbonamenti',
    'landing.pricing.title': 'Scegli il tuo livello',
    'landing.plan.basic.meta': 'Un solo spazio a scelta',
    'landing.plan.basic.price': 'Gratis',
    'landing.plan.basic.f1': '50 swipe / giorno',
    'landing.plan.basic.f2': '4 iscrizioni / mese',
    'landing.plan.basic.f3': '1 spazio sbloccato',
    'landing.plan.basic.cta': 'Inizia',
    'landing.plan.intermediate.ribbon': 'Popolare',
    'landing.plan.intermediate.price': '9,99€/mese',
    'landing.plan.intermediate.meta': 'Tutti e 4 gli spazi inclusi',
    'landing.plan.intermediate.f1': '45 swipe / giorno',
    'landing.plan.intermediate.f2': '6 iscrizioni / mese',
    'landing.plan.intermediate.f3': 'Accesso completo all’app',
    'landing.plan.intermediate.cta': 'Scegli',
    'landing.plan.premium.meta': 'Illimitato',
    'landing.plan.premium.price': '15,99€/mese',
    'landing.plan.premium.f1': 'Swipe illimitati',
    'landing.plan.premium.f2': 'Iscrizioni illimitate',
    'landing.plan.premium.f3': 'Sbloccabile anche tramite referral',
    'landing.plan.premium.cta': 'Scegli',
    'landing.plan.platinum.ribbon': 'VIP',
    'landing.plan.platinum.price': '29,99€/mese',
    'landing.plan.platinum.meta': 'Illimitato + visibilità',
    'landing.plan.platinum.f1': 'Attività VIP',
    'landing.plan.platinum.f2': 'Profili e post in evidenza',
    'landing.plan.platinum.f3': 'Badge premium distintivo',
    'landing.plan.platinum.cta': 'Scegli',
    'landing.footer.legal': 'Note legali',
    'landing.footer.terms': 'CGU',
    'landing.footer.privacy': 'Privacy policy',
    'landing.footer.contact': 'Contatto',
    'landing.footer.copyright': '© 2025 L1VE — Tutti i diritti riservati',
    'forgot.eyebrow': 'Recupero',
    'forgot.title': 'Reimposta la password senza perdere slancio.',
    'forgot.text':
      'Inserisci la tua email. Simuliamo l’invio di un link di reset per mantenere completo il flusso lato front.',
    'forgot.email': 'Email',
    'forgot.submit': 'Invia il link',
    'forgot.back': 'Torna al login',
    'toast.forgot.sent': 'Se esiste un account, è stato appena inviato un link di reset.',
  },
};

Object.entries(landingAndForgotTranslations).forEach(([lang, entries]) => {
  translations[lang] = {
    ...(translations[lang] || {}),
    ...entries,
  };
});

const staticPageTranslations = {
  fr: {
    'nav.backToHome': "Retour à l'accueil",
    'legal.hero.eyebrow': 'Mentions légales',
    'legal.hero.title': 'Éditeur du site',
    'legal.hero.lead':
      'Le site L1VE.v2 est une démonstration produit front-only conçue comme MVP interactif. Les informations ci-dessous structurent un cadre légal de présentation pour le projet.',
    'legal.identification.title': 'Identification',
    'legal.identification.projectLabel': 'Nom du projet :',
    'legal.identification.projectValue': 'L1VE',
    'legal.identification.natureLabel': 'Nature :',
    'legal.identification.natureValue': 'Prototype / démonstration interactive',
    'legal.identification.publisherLabel': 'Responsable de publication :',
    'legal.identification.publisherValue': 'Équipe projet L1VE',
    'legal.identification.contactLabel': 'Contact :',
    'legal.hosting.title': 'Hébergement',
    'legal.hosting.text':
      'Le présent MVP est destiné à un usage local ou de démonstration. En cas de mise en ligne, l’hébergement devra être assuré par un prestataire garantissant la disponibilité, la sécurité et la protection des journaux techniques.',
    'legal.ip.title': 'Propriété intellectuelle',
    'legal.ip.p1':
      'L’ensemble des éléments visibles sur L1VE, notamment la marque, l’interface, les textes, les maquettes, les animations, les icônes et les visuels, relève du droit d’auteur ou du droit des signes distinctifs, sauf mention contraire.',
    'legal.ip.p2':
      'Toute reproduction, adaptation, diffusion ou exploitation, totale ou partielle, sans autorisation préalable, est interdite.',
    'legal.liability.title': 'Responsabilité',
    'legal.liability.p1':
      'L1VE est présenté ici comme un prototype fonctionnel. Malgré le soin apporté à son élaboration, certaines données, interactions ou contenus peuvent être simulés, incomplets ou évoluer sans préavis.',
    'legal.liability.p2':
      'Le projet ne saurait être tenu responsable d’un dommage indirect lié à l’usage du prototype ou à l’interprétation de ses contenus de démonstration.',
    'terms.hero.eyebrow': 'CGU',
    'terms.hero.title': 'Conditions générales d’utilisation',
    'terms.hero.lead':
      'Les présentes conditions encadrent l’accès et l’usage du service L1VE, plateforme de rencontres locales organisée autour de quatre univers : dating, amical, sport et pro.',
    'terms.access.title': '1. Accès au service',
    'terms.access.p1':
      'L’accès à certaines fonctionnalités peut dépendre d’un statut de compte, d’un niveau d’abonnement ou de limites d’usage configurées dans l’interface.',
    'terms.access.p2':
      'L’utilisateur s’engage à fournir des informations sincères lors de la création de son profil et à ne pas usurper l’identité d’un tiers.',
    'terms.behavior.title': '2. Règles de comportement',
    'terms.behavior.p1':
      'L’utilisateur s’engage à adopter un comportement respectueux, non discriminatoire et non agressif envers les autres membres.',
    'terms.behavior.p2':
      'Sont notamment interdits : le harcèlement, l’envoi de contenus illicites, la fraude, le spam, l’usurpation d’identité, la collecte non autorisée de données et toute tentative de détournement du service.',
    'terms.content.title': '3. Contenus et profils',
    'terms.content.p1':
      'Chaque utilisateur demeure responsable des contenus qu’il publie, notamment les textes, commentaires, descriptions, photos ou informations de profil.',
    'terms.content.p2':
      'L1VE se réserve la possibilité de masquer, limiter ou supprimer un contenu manifestement contraire aux présentes conditions ou à la réglementation applicable.',
    'terms.events.title': '4. Activités, événements et échanges',
    'terms.events.p1':
      'Les activités, sessions sportives et événements professionnels peuvent comporter des capacités limitées, des validations manuelles ou des restrictions liées au plan choisi.',
    'terms.events.p2':
      'Les échanges entre utilisateurs restent de leur seule responsabilité. Chaque membre demeure libre d’accepter, refuser ou interrompre une interaction.',
    'terms.suspension.title': '5. Suspension ou clôture',
    'terms.suspension.p1':
      'En cas de non-respect des présentes conditions, L1VE peut suspendre l’accès à tout ou partie du service, temporairement ou définitivement, sans préjudice de toute autre action nécessaire.',
    'privacy.hero.eyebrow': 'Confidentialité',
    'privacy.hero.title': 'Politique de confidentialité',
    'privacy.hero.lead':
      'Cette politique décrit les principes de traitement des données dans le cadre du MVP L1VE. Dans cette version front-only, certaines données sont stockées localement dans le navigateur afin de simuler une expérience complète.',
    'privacy.data.title': 'Données traitées',
    'privacy.data.p1':
      'Les informations susceptibles d’être manipulées incluent notamment : identité de profil, email, centres d’intérêt, photos, préférences, historique local d’interactions, langue choisie et état d’interface.',
    'privacy.modes.title': 'Base de fonctionnement du MVP',
    'privacy.modes.p1':
      'Dans cette version, une partie de la persistance repose sur le stockage local du navigateur. Les données restent donc principalement attachées à l’appareil utilisé pour la démonstration.',
    'privacy.modes.p2':
      'En cas d’évolution vers une version en ligne, les finalités, durées de conservation, fondements juridiques et sous-traitants devront être formalisés dans une politique actualisée.',
    'privacy.purpose.title': 'Finalités',
    'privacy.purpose.p1':
      'Les données sont utilisées pour : afficher les profils, mémoriser l’état du compte, personnaliser l’expérience, gérer les interactions entre espaces, conserver la langue choisie et simuler les parcours produit.',
    'privacy.rights.title': 'Droits des utilisateurs',
    'privacy.rights.p1':
      'Tout utilisateur peut demander l’accès, la rectification ou la suppression des données le concernant dans le cadre d’une version mise en production. Pour ce MVP local, la suppression peut notamment être obtenue en effaçant les données du navigateur ou en réinitialisant le stockage local.',
    'contact.hero.eyebrow': 'Contact',
    'contact.hero.title': 'Parler à l’équipe L1VE',
    'contact.hero.lead':
      'Pour une demande produit, partenariat, support ou presse, tu peux utiliser les points de contact ci-dessous.',
    'contact.support.title': 'Support général',
    'contact.support.emailLabel': 'Email :',
    'contact.support.delayLabel': 'Délai indicatif :',
    'contact.support.delayValue': 'réponse sous 48 heures ouvrées',
    'contact.partnerships.title': 'Partenariats & événements',
    'contact.partnerships.emailLabel': 'Email :',
    'contact.partnerships.text':
      'Pour les collaborations locales à Marseille, les lieux partenaires, les activations de marque ou les événements spéciaux.',
    'contact.press.title': 'Presse & communication',
    'contact.press.emailLabel': 'Email :',
    'contact.press.text':
      'Pour toute demande média, interview, dossier de présentation ou prise de parole autour du projet.',
    'contact.address.title': 'Adresse projet',
    'contact.address.line1': 'L1VE',
    'contact.address.line2': 'Marseille, France',
    'contact.address.meta': 'Adresse de démonstration fournie à titre de contexte produit.',
  },
  en: {
    'nav.backToHome': 'Back to home',
    'legal.hero.eyebrow': 'Legal notice',
    'legal.hero.title': 'Site publisher',
    'legal.hero.lead':
      'L1VE.v2 is a front-only product demonstration designed as an interactive MVP. The information below outlines a legal presentation framework for the project.',
    'legal.identification.title': 'Identification',
    'legal.identification.projectLabel': 'Project name:',
    'legal.identification.projectValue': 'L1VE',
    'legal.identification.natureLabel': 'Nature:',
    'legal.identification.natureValue': 'Prototype / interactive demonstration',
    'legal.identification.publisherLabel': 'Publishing director:',
    'legal.identification.publisherValue': 'L1VE project team',
    'legal.identification.contactLabel': 'Contact:',
    'legal.hosting.title': 'Hosting',
    'legal.hosting.text':
      'This MVP is intended for local or demonstration use. If published online, hosting should be provided by a vendor ensuring availability, security and protection of technical logs.',
    'legal.ip.title': 'Intellectual property',
    'legal.ip.p1':
      'All elements visible on L1VE, including the brand, interface, texts, mockups, animations, icons and visuals, are protected by copyright or distinctive sign rights unless stated otherwise.',
    'legal.ip.p2':
      'Any reproduction, adaptation, distribution or exploitation, in whole or in part, without prior authorization is prohibited.',
    'legal.liability.title': 'Liability',
    'legal.liability.p1':
      'L1VE is presented here as a functional prototype. Despite the care taken in its creation, some data, interactions or content may be simulated, incomplete or subject to change without notice.',
    'legal.liability.p2':
      'The project cannot be held liable for indirect damage linked to the use of the prototype or to the interpretation of its demonstration content.',
    'terms.hero.eyebrow': 'Terms',
    'terms.hero.title': 'Terms of use',
    'terms.hero.lead':
      'These terms govern access to and use of the L1VE service, a local connection platform organized around four worlds: dating, friendship, sport and pro.',
    'terms.access.title': '1. Access to the service',
    'terms.access.p1':
      'Access to certain features may depend on account status, subscription tier or usage limits configured in the interface.',
    'terms.access.p2':
      'The user agrees to provide accurate information when creating a profile and not to impersonate any third party.',
    'terms.behavior.title': '2. Code of conduct',
    'terms.behavior.p1':
      'The user agrees to behave respectfully, without discrimination and without aggression toward other members.',
    'terms.behavior.p2':
      'The following are prohibited in particular: harassment, illegal content, fraud, spam, identity theft, unauthorized data collection and any attempt to misuse the service.',
    'terms.content.title': '3. Content and profiles',
    'terms.content.p1':
      'Each user remains responsible for the content they publish, including texts, comments, descriptions, photos or profile information.',
    'terms.content.p2':
      'L1VE reserves the right to hide, restrict or remove content that is clearly contrary to these terms or applicable regulation.',
    'terms.events.title': '4. Activities, events and exchanges',
    'terms.events.p1':
      'Activities, sports sessions and professional events may have limited capacity, manual approval or restrictions linked to the selected plan.',
    'terms.events.p2':
      'Exchanges between users remain their sole responsibility. Each member is free to accept, refuse or stop an interaction.',
    'terms.suspension.title': '5. Suspension or closure',
    'terms.suspension.p1':
      'In the event of a breach of these terms, L1VE may suspend access to all or part of the service, temporarily or permanently, without prejudice to any other necessary action.',
    'privacy.hero.eyebrow': 'Privacy',
    'privacy.hero.title': 'Privacy policy',
    'privacy.hero.lead':
      'This policy describes the principles governing data handling within the L1VE MVP. In this front-only version, some data is stored locally in the browser to simulate a complete experience.',
    'privacy.data.title': 'Processed data',
    'privacy.data.p1':
      'The information that may be handled includes profile identity, email, interests, photos, preferences, local interaction history, selected language and interface state.',
    'privacy.modes.title': 'How the MVP works',
    'privacy.modes.p1':
      'In this version, part of the persistence relies on local browser storage. Data therefore remains primarily tied to the device used for the demonstration.',
    'privacy.modes.p2':
      'If the product evolves into an online version, purposes, retention periods, legal bases and processors will need to be formalized in an updated policy.',
    'privacy.purpose.title': 'Purposes',
    'privacy.purpose.p1':
      'Data is used to display profiles, remember account state, personalize the experience, manage interactions between spaces, store the selected language and simulate product journeys.',
    'privacy.rights.title': 'User rights',
    'privacy.rights.p1':
      'Any user may request access to, correction of or deletion of data concerning them in a production version. For this local MVP, deletion can notably be achieved by clearing browser data or resetting local storage.',
    'contact.hero.eyebrow': 'Contact',
    'contact.hero.title': 'Talk to the L1VE team',
    'contact.hero.lead':
      'For a product request, partnership, support or press inquiry, you can use the contact points below.',
    'contact.support.title': 'General support',
    'contact.support.emailLabel': 'Email:',
    'contact.support.delayLabel': 'Expected delay:',
    'contact.support.delayValue': 'reply within 48 business hours',
    'contact.partnerships.title': 'Partnerships & events',
    'contact.partnerships.emailLabel': 'Email:',
    'contact.partnerships.text':
      'For local collaborations in Marseille, partner venues, brand activations or special events.',
    'contact.press.title': 'Press & communications',
    'contact.press.emailLabel': 'Email:',
    'contact.press.text':
      'For any media request, interview, presentation deck or speaking opportunity around the project.',
    'contact.address.title': 'Project address',
    'contact.address.line1': 'L1VE',
    'contact.address.line2': 'Marseille, France',
    'contact.address.meta': 'Demonstration address provided for product context only.',
  },
  es: {
    'nav.backToHome': 'Volver al inicio',
    'legal.hero.eyebrow': 'Aviso legal',
    'legal.hero.title': 'Editor del sitio',
    'legal.hero.lead':
      'L1VE.v2 es una demostración de producto front-only diseñada como MVP interactivo. La información siguiente establece un marco legal de presentación para el proyecto.',
    'legal.identification.title': 'Identificación',
    'legal.identification.projectLabel': 'Nombre del proyecto:',
    'legal.identification.projectValue': 'L1VE',
    'legal.identification.natureLabel': 'Naturaleza:',
    'legal.identification.natureValue': 'Prototipo / demostración interactiva',
    'legal.identification.publisherLabel': 'Responsable de publicación:',
    'legal.identification.publisherValue': 'Equipo del proyecto L1VE',
    'legal.identification.contactLabel': 'Contacto:',
    'legal.hosting.title': 'Alojamiento',
    'legal.hosting.text':
      'Este MVP está destinado a un uso local o de demostración. En caso de publicación online, el alojamiento deberá ser proporcionado por un proveedor que garantice disponibilidad, seguridad y protección de los registros técnicos.',
    'legal.ip.title': 'Propiedad intelectual',
    'legal.ip.p1':
      'Todos los elementos visibles en L1VE, en particular la marca, la interfaz, los textos, las maquetas, las animaciones, los iconos y los visuales, están protegidos por derechos de autor o por derechos sobre signos distintivos, salvo indicación en contrario.',
    'legal.ip.p2':
      'Queda prohibida cualquier reproducción, adaptación, difusión o explotación, total o parcial, sin autorización previa.',
    'legal.liability.title': 'Responsabilidad',
    'legal.liability.p1':
      'L1VE se presenta aquí como un prototipo funcional. A pesar del cuidado puesto en su elaboración, algunos datos, interacciones o contenidos pueden ser simulados, incompletos o cambiar sin previo aviso.',
    'legal.liability.p2':
      'El proyecto no podrá ser considerado responsable de daños indirectos relacionados con el uso del prototipo o con la interpretación de sus contenidos de demostración.',
    'terms.hero.eyebrow': 'CGU',
    'terms.hero.title': 'Condiciones generales de uso',
    'terms.hero.lead':
      'Estas condiciones regulan el acceso y el uso del servicio L1VE, una plataforma local de encuentros organizada en torno a cuatro universos: dating, amistad, deporte y pro.',
    'terms.access.title': '1. Acceso al servicio',
    'terms.access.p1':
      'El acceso a ciertas funcionalidades puede depender del estado de la cuenta, del nivel de suscripción o de límites de uso configurados en la interfaz.',
    'terms.access.p2':
      'El usuario se compromete a proporcionar información veraz al crear su perfil y a no suplantar la identidad de terceros.',
    'terms.behavior.title': '2. Reglas de comportamiento',
    'terms.behavior.p1':
      'El usuario se compromete a mantener un comportamiento respetuoso, no discriminatorio y no agresivo con los demás miembros.',
    'terms.behavior.p2':
      'Quedan especialmente prohibidos: el acoso, el envío de contenidos ilícitos, el fraude, el spam, la suplantación de identidad, la recogida no autorizada de datos y cualquier intento de desviar el servicio de su finalidad.',
    'terms.content.title': '3. Contenidos y perfiles',
    'terms.content.p1':
      'Cada usuario sigue siendo responsable de los contenidos que publica, en particular textos, comentarios, descripciones, fotos o información de perfil.',
    'terms.content.p2':
      'L1VE se reserva la posibilidad de ocultar, limitar o eliminar un contenido manifiestamente contrario a estas condiciones o a la normativa aplicable.',
    'terms.events.title': '4. Actividades, eventos e intercambios',
    'terms.events.p1':
      'Las actividades, sesiones deportivas y eventos profesionales pueden tener aforo limitado, validación manual o restricciones ligadas al plan elegido.',
    'terms.events.p2':
      'Los intercambios entre usuarios quedan bajo su exclusiva responsabilidad. Cada miembro puede aceptar, rechazar o interrumpir una interacción.',
    'terms.suspension.title': '5. Suspensión o cierre',
    'terms.suspension.p1':
      'En caso de incumplimiento de estas condiciones, L1VE podrá suspender el acceso a todo o parte del servicio, de forma temporal o definitiva, sin perjuicio de cualquier otra acción necesaria.',
    'privacy.hero.eyebrow': 'Privacidad',
    'privacy.hero.title': 'Política de privacidad',
    'privacy.hero.lead':
      'Esta política describe los principios de tratamiento de datos en el marco del MVP L1VE. En esta versión front-only, algunos datos se almacenan localmente en el navegador para simular una experiencia completa.',
    'privacy.data.title': 'Datos tratados',
    'privacy.data.p1':
      'La información que puede manipularse incluye, entre otros elementos: identidad del perfil, email, intereses, fotos, preferencias, historial local de interacciones, idioma elegido y estado de la interfaz.',
    'privacy.modes.title': 'Funcionamiento del MVP',
    'privacy.modes.p1':
      'En esta versión, parte de la persistencia se basa en el almacenamiento local del navegador. Por tanto, los datos quedan principalmente vinculados al dispositivo utilizado para la demostración.',
    'privacy.modes.p2':
      'Si el producto evoluciona hacia una versión online, las finalidades, plazos de conservación, bases jurídicas y encargados del tratamiento deberán formalizarse en una política actualizada.',
    'privacy.purpose.title': 'Finalidades',
    'privacy.purpose.p1':
      'Los datos se utilizan para mostrar perfiles, memorizar el estado de la cuenta, personalizar la experiencia, gestionar las interacciones entre espacios, conservar el idioma elegido y simular los recorridos del producto.',
    'privacy.rights.title': 'Derechos de los usuarios',
    'privacy.rights.p1':
      'Todo usuario puede solicitar el acceso, la rectificación o la supresión de sus datos en una versión puesta en producción. Para este MVP local, la eliminación puede lograrse especialmente borrando los datos del navegador o reiniciando el almacenamiento local.',
    'contact.hero.eyebrow': 'Contacto',
    'contact.hero.title': 'Hablar con el equipo L1VE',
    'contact.hero.lead':
      'Para una solicitud de producto, partnership, soporte o prensa, puedes utilizar los puntos de contacto indicados a continuación.',
    'contact.support.title': 'Soporte general',
    'contact.support.emailLabel': 'Email:',
    'contact.support.delayLabel': 'Plazo orientativo:',
    'contact.support.delayValue': 'respuesta en un plazo de 48 horas laborables',
    'contact.partnerships.title': 'Partnerships y eventos',
    'contact.partnerships.emailLabel': 'Email:',
    'contact.partnerships.text':
      'Para colaboraciones locales en Marsella, lugares asociados, activaciones de marca o eventos especiales.',
    'contact.press.title': 'Prensa y comunicación',
    'contact.press.emailLabel': 'Email:',
    'contact.press.text':
      'Para cualquier solicitud de medios, entrevista, dossier de presentación o intervención alrededor del proyecto.',
    'contact.address.title': 'Dirección del proyecto',
    'contact.address.line1': 'L1VE',
    'contact.address.line2': 'Marsella, Francia',
    'contact.address.meta': 'Dirección de demostración proporcionada únicamente como contexto de producto.',
  },
  it: {
    'nav.backToHome': 'Torna alla home',
    'legal.hero.eyebrow': 'Note legali',
    'legal.hero.title': 'Editore del sito',
    'legal.hero.lead':
      'L1VE.v2 è una demo di prodotto front-only progettata come MVP interattivo. Le informazioni qui sotto definiscono un quadro legale di presentazione del progetto.',
    'legal.identification.title': 'Identificazione',
    'legal.identification.projectLabel': 'Nome del progetto:',
    'legal.identification.projectValue': 'L1VE',
    'legal.identification.natureLabel': 'Natura:',
    'legal.identification.natureValue': 'Prototipo / dimostrazione interattiva',
    'legal.identification.publisherLabel': 'Responsabile della pubblicazione:',
    'legal.identification.publisherValue': 'Team progetto L1VE',
    'legal.identification.contactLabel': 'Contatto:',
    'legal.hosting.title': 'Hosting',
    'legal.hosting.text':
      'Questo MVP è destinato a un utilizzo locale o dimostrativo. In caso di pubblicazione online, l’hosting dovrà essere affidato a un fornitore che garantisca disponibilità, sicurezza e protezione dei log tecnici.',
    'legal.ip.title': 'Proprietà intellettuale',
    'legal.ip.p1':
      'Tutti gli elementi visibili su L1VE, inclusi marchio, interfaccia, testi, mockup, animazioni, icone e visual, sono tutelati dal diritto d’autore o dai diritti sui segni distintivi, salvo diversa indicazione.',
    'legal.ip.p2':
      'Qualsiasi riproduzione, adattamento, diffusione o sfruttamento, totale o parziale, senza preventiva autorizzazione è vietato.',
    'legal.liability.title': 'Responsabilità',
    'legal.liability.p1':
      'L1VE è presentato qui come un prototipo funzionale. Nonostante la cura dedicata alla sua realizzazione, alcuni dati, interazioni o contenuti possono essere simulati, incompleti o soggetti a modifiche senza preavviso.',
    'legal.liability.p2':
      'Il progetto non potrà essere ritenuto responsabile per danni indiretti legati all’uso del prototipo o all’interpretazione dei suoi contenuti dimostrativi.',
    'terms.hero.eyebrow': 'CGU',
    'terms.hero.title': 'Condizioni generali d’uso',
    'terms.hero.lead':
      'Le presenti condizioni regolano l’accesso e l’uso del servizio L1VE, piattaforma locale di incontri organizzata attorno a quattro universi: dating, amicale, sport e pro.',
    'terms.access.title': '1. Accesso al servizio',
    'terms.access.p1':
      'L’accesso ad alcune funzionalità può dipendere dallo stato dell’account, dal livello di abbonamento o da limiti di utilizzo configurati nell’interfaccia.',
    'terms.access.p2':
      'L’utente si impegna a fornire informazioni veritiere durante la creazione del profilo e a non impersonare terzi.',
    'terms.behavior.title': '2. Regole di comportamento',
    'terms.behavior.p1':
      'L’utente si impegna ad adottare un comportamento rispettoso, non discriminatorio e non aggressivo verso gli altri membri.',
    'terms.behavior.p2':
      'Sono in particolare vietati: molestie, invio di contenuti illeciti, frode, spam, furto d’identità, raccolta non autorizzata di dati e qualsiasi tentativo di uso improprio del servizio.',
    'terms.content.title': '3. Contenuti e profili',
    'terms.content.p1':
      'Ogni utente resta responsabile dei contenuti pubblicati, inclusi testi, commenti, descrizioni, foto o informazioni del profilo.',
    'terms.content.p2':
      'L1VE si riserva la possibilità di nascondere, limitare o rimuovere contenuti manifestamente contrari a queste condizioni o alla normativa applicabile.',
    'terms.events.title': '4. Attività, eventi e scambi',
    'terms.events.p1':
      'Attività, sessioni sportive ed eventi professionali possono prevedere capacità limitata, validazione manuale o restrizioni legate al piano scelto.',
    'terms.events.p2':
      'Gli scambi tra utenti restano sotto la loro esclusiva responsabilità. Ogni membro è libero di accettare, rifiutare o interrompere un’interazione.',
    'terms.suspension.title': '5. Sospensione o chiusura',
    'terms.suspension.p1':
      'In caso di mancato rispetto delle presenti condizioni, L1VE può sospendere l’accesso a tutto o parte del servizio, temporaneamente o definitivamente, fatto salvo ogni altro intervento necessario.',
    'privacy.hero.eyebrow': 'Privacy',
    'privacy.hero.title': 'Informativa sulla privacy',
    'privacy.hero.lead':
      'Questa informativa descrive i principi di trattamento dei dati nel contesto del MVP L1VE. In questa versione front-only, alcuni dati vengono memorizzati localmente nel browser per simulare un’esperienza completa.',
    'privacy.data.title': 'Dati trattati',
    'privacy.data.p1':
      'Le informazioni che possono essere gestite includono in particolare: identità del profilo, email, interessi, foto, preferenze, storico locale delle interazioni, lingua selezionata e stato dell’interfaccia.',
    'privacy.modes.title': 'Funzionamento del MVP',
    'privacy.modes.p1':
      'In questa versione, parte della persistenza si basa sullo storage locale del browser. I dati restano quindi principalmente associati al dispositivo utilizzato per la demo.',
    'privacy.modes.p2':
      'In caso di evoluzione verso una versione online, finalità, tempi di conservazione, basi giuridiche e responsabili del trattamento dovranno essere formalizzati in una policy aggiornata.',
    'privacy.purpose.title': 'Finalità',
    'privacy.purpose.p1':
      'I dati vengono utilizzati per mostrare i profili, memorizzare lo stato dell’account, personalizzare l’esperienza, gestire le interazioni tra spazi, conservare la lingua scelta e simulare i percorsi di prodotto.',
    'privacy.rights.title': 'Diritti degli utenti',
    'privacy.rights.p1':
      'Ogni utente può richiedere accesso, rettifica o cancellazione dei dati che lo riguardano in una versione messa in produzione. Per questo MVP locale, la cancellazione può essere ottenuta soprattutto eliminando i dati del browser o reimpostando lo storage locale.',
    'contact.hero.eyebrow': 'Contatto',
    'contact.hero.title': 'Parla con il team L1VE',
    'contact.hero.lead':
      'Per una richiesta prodotto, partnership, supporto o stampa, puoi utilizzare i punti di contatto qui sotto.',
    'contact.support.title': 'Supporto generale',
    'contact.support.emailLabel': 'Email:',
    'contact.support.delayLabel': 'Tempo indicativo:',
    'contact.support.delayValue': 'risposta entro 48 ore lavorative',
    'contact.partnerships.title': 'Partnership ed eventi',
    'contact.partnerships.emailLabel': 'Email:',
    'contact.partnerships.text':
      'Per collaborazioni locali a Marsiglia, venue partner, attivazioni di brand o eventi speciali.',
    'contact.press.title': 'Stampa e comunicazione',
    'contact.press.emailLabel': 'Email:',
    'contact.press.text':
      'Per qualsiasi richiesta media, intervista, dossier di presentazione o intervento pubblico sul progetto.',
    'contact.address.title': 'Indirizzo progetto',
    'contact.address.line1': 'L1VE',
    'contact.address.line2': 'Marsiglia, Francia',
    'contact.address.meta': 'Indirizzo dimostrativo fornito esclusivamente come contesto prodotto.',
  },
};

Object.entries(staticPageTranslations).forEach(([lang, entries]) => {
  translations[lang] = {
    ...(translations[lang] || {}),
    ...entries,
  };
});

const marseilleStrategicPlaces = [
  { name: 'Vieux-Port', lat: 43.2951, lng: 5.3744 },
  { name: 'Mucem', lat: 43.2969, lng: 5.3612 },
  { name: 'Notre-Dame de la Garde', lat: 43.2842, lng: 5.3711 },
  { name: 'Gare Saint-Charles', lat: 43.303, lng: 5.3811 },
  { name: 'Orange Vélodrome', lat: 43.2699, lng: 5.3959 },
  { name: 'Parc Borely', lat: 43.2594, lng: 5.3858 },
  { name: 'Les Goudes', lat: 43.2144, lng: 5.3438 },
  { name: 'La Friche Belle de Mai', lat: 43.3114, lng: 5.3906 },
];

const placePhotos = {
  vieuxPort:
    'https://images.pexels.com/photos/15878303/pexels-photo-15878303.jpeg?auto=compress&cs=tinysrgb&w=1200',
  mucem:
    'https://images.pexels.com/photos/20121156/pexels-photo-20121156.jpeg?auto=compress&cs=tinysrgb&w=1200',
  notreDame:
    'https://images.pexels.com/photos/20520465/pexels-photo-20520465.jpeg?auto=compress&cs=tinysrgb&w=1200',
  marseilleView:
    'https://images.pexels.com/photos/28040955/pexels-photo-28040955.jpeg?auto=compress&cs=tinysrgb&w=1200',
  fortSaintJean:
    'https://images.pexels.com/photos/32572004/pexels-photo-32572004.jpeg?auto=compress&cs=tinysrgb&w=1200',
  businessMeeting:
    'https://images.pexels.com/photos/7644151/pexels-photo-7644151.jpeg?auto=compress&cs=tinysrgb&w=1200',
  friche:
    'https://images.pexels.com/photos/32255085/pexels-photo-32255085.jpeg?auto=compress&cs=tinysrgb&w=1200',
  rooftop:
    'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

const portraitSets = {
  romane: ['assets/Romane.jpeg'],
  raffaella: ['assets/raffaella.png'],
  lior: ['assets/Lior.png'],
  abdel: ['assets/abdel-1.jpg'],
  yanis: ['assets/abdel-2.png'],
  samy: ['assets/abdel-3.png'],
};

const removedDatingProfileIds = new Set(['p6']);
const removedDatingProfileNames = new Set(['Sacha', 'Samy']);

const communityPortraits = {
  lina: 'assets/Romane.jpeg',
  nora: 'assets/raffaella.png',
  iris: 'assets/Lior.png',
  nina: 'assets/Romane.jpeg',
  yanis: 'assets/abdel-2.png',
  leo: 'assets/abdel-1.jpg',
  tom: 'assets/abdel-2.png',
  younes: 'assets/abdel-3.png',
  karim: 'assets/abdel-1.jpg',
  alice: 'assets/Romane.jpeg',
  clara: 'assets/raffaella.png',
  oscar: 'assets/abdel-2.png',
  lea: 'assets/Lior.png',
  sam: 'assets/abdel-3.png',
};

const communityPortraitFrames = {
  [communityPortraits.lina]: { photoPosition: '50% 47%', photoScale: 1.84, thumbnailScale: 2.02 },
  [communityPortraits.nora]: { photoPosition: '50% 45%', photoScale: 1.78, thumbnailScale: 1.94 },
  [communityPortraits.iris]: { photoPosition: '50% 46%', photoScale: 1.9, thumbnailScale: 2.08 },
  [communityPortraits.yanis]: { photoPosition: '50% 45%', photoScale: 1.82, thumbnailScale: 1.98 },
  [communityPortraits.leo]: { photoPosition: '50% 36%', photoScale: 1.6, thumbnailScale: 1.76 },
  [communityPortraits.tom]: { photoPosition: '50% 45%', photoScale: 1.82, thumbnailScale: 1.98 },
  [communityPortraits.younes]: { photoPosition: '50% 45%', photoScale: 1.8, thumbnailScale: 1.96 },
  [communityPortraits.karim]: { photoPosition: '50% 36%', photoScale: 1.6, thumbnailScale: 1.76 },
  [communityPortraits.alice]: { photoPosition: '50% 47%', photoScale: 1.84, thumbnailScale: 2.02 },
  [communityPortraits.clara]: { photoPosition: '50% 45%', photoScale: 1.78, thumbnailScale: 1.94 },
  [communityPortraits.oscar]: { photoPosition: '50% 45%', photoScale: 1.82, thumbnailScale: 1.98 },
  [communityPortraits.lea]: { photoPosition: '50% 46%', photoScale: 1.9, thumbnailScale: 2.08 },
  [communityPortraits.sam]: { photoPosition: '50% 45%', photoScale: 1.8, thumbnailScale: 1.96 },
};

const localAssetPathFixes = {
  'assets/Romane.png': 'assets/Romane.jpeg',
  'assets/raffaella.jpeg': 'assets/raffaella.png',
  'assets/Lior.jpeg': 'assets/Lior.png',
  'assets/abdel-2.jpeg': 'assets/abdel-2.png',
  'assets/abdel-3.jpeg': 'assets/abdel-3.png',
};

const localSceneImages = {
  amical: 'assets/l1ve-amical-scene.svg',
  pro: 'assets/l1ve-pro-scene.svg',
  sportRunning: 'assets/l1ve-sport-running.svg',
  sportPadel: 'assets/l1ve-sport-padel.svg',
  sportFoot: 'assets/l1ve-sport-foot.svg',
};

const interestOptions = [
  'Sport',
  'Musique',
  'Art',
  'Tech',
  'Food',
  'Voyage',
  'Nature',
  'Photo',
  'Gaming',
  'Yoga',
  'Business',
  'Lecture',
  'Cinema',
  'Mode',
  'Cuisine',
];

const seedProfiles = [
  {
    id: 'p4',
    name: 'Romane',
    age: 24,
    bio: 'Etudiante en droit, grands chocolats chauds et terrasses tranquilles en fin de journee.',
    tags: ['Coffee', 'Musees', 'City walks'],
    likedYou: true,
    plan: 'PLATINUM',
    distance: '2 km',
    photoPosition: '50% 47%',
    photoScale: 1.82,
    photos: portraitSets.romane,
  },
  {
    id: 'p2',
    name: 'Raffaella',
    age: 26,
    bio: 'Styliste junior, adore les diners improvises, les bons looks et les discussions qui durent.',
    tags: ['Mode', 'Food', 'Sunset'],
    likedYou: false,
    plan: 'INTERMEDIATE',
    distance: '4 km',
    photoPosition: '50% 45%',
    photoScale: 1.76,
    photos: portraitSets.raffaella,
  },
  {
    id: 'p3',
    name: 'Lior',
    age: 23,
    bio: 'Curieuse, cine-club du dimanche et petites adresses cosy autour de Castellane.',
    tags: ['Cinema', 'Lecture', 'Art'],
    likedYou: true,
    plan: 'PREMIUM',
    distance: '3 km',
    photoPosition: '50% 46%',
    photoScale: 1.88,
    photos: portraitSets.lior,
  },
  {
    id: 'p1',
    name: 'Abdel',
    age: 27,
    bio: 'Commercial terrain, toujours partant pour un cafe en ville ou un apero sans prise de tete.',
    tags: ['Apero', 'Foot', 'Road trip'],
    likedYou: false,
    plan: 'BASIC',
    distance: '6 km',
    photoPosition: '50% 36%',
    photoScale: 1.52,
    photos: portraitSets.abdel,
  },
  {
    id: 'p5',
    name: 'Yanis',
    age: 25,
    bio: 'Bosse dans la logistique, fan de looks nets, de restos de quartier et de plans simples.',
    tags: ['Food', 'Style', 'Night city'],
    likedYou: true,
    plan: 'PLATINUM',
    distance: '5 km',
    photoPosition: '50% 45%',
    photoScale: 1.78,
    photos: portraitSets.yanis,
  },
];

const seedActivities = [
  {
    id: 'a1',
    title: 'Brunch panoramique au Vieux-Port',
    description: 'Table conviviale face aux quais pour rencontrer du monde sans pression.',
    placeName: 'Vieux-Port',
    lat: 43.2951,
    lng: 5.3744,
    imageUrl: placePhotos.vieuxPort,
    date: plusDays(2),
    tags: ['brunch', 'social', 'outdoor'],
    vip: false,
    requiresApproval: true,
    min: 2,
    max: 10,
    createdBy: 'You',
    pendingRequests: ['Ines', 'Paco'],
    approvedParticipants: ['Lina', 'Marco'],
    participants: ['Lina', 'Marco'],
  },
  {
    id: 'a2',
    title: 'Picnic networking au Parc Borely',
    description: 'Rencontre chill dans les jardins, entre cafe glacé et discussions ouvertes.',
    placeName: 'Parc Borely',
    lat: 43.2594,
    lng: 5.3858,
    imageUrl: placePhotos.marseilleView,
    date: plusDays(4),
    tags: ['nature', 'social', 'chill'],
    vip: false,
    requiresApproval: false,
    min: 2,
    max: 10,
    createdBy: 'Nora',
    pendingRequests: [],
    approvedParticipants: ['Nora', 'Yanis'],
    participants: ['Nora', 'Yanis'],
  },
  {
    id: 'a3',
    title: 'Diner secret aux Goudes',
    description: 'Experience VIP en bord de mer, coucher de soleil et petit groupe choisi.',
    placeName: 'Les Goudes',
    lat: 43.2144,
    lng: 5.3438,
    imageUrl: placePhotos.notreDame,
    date: plusDays(7),
    tags: ['vip', 'food', 'sea'],
    vip: true,
    requiresApproval: false,
    min: 2,
    max: 8,
    createdBy: 'Maya',
    pendingRequests: [],
    approvedParticipants: ['Maya', 'Iris'],
    participants: ['Maya', 'Iris'],
  },
];

const seedSportActivities = [
  {
    id: 's1',
    title: 'Running sunset Borely',
    description: 'Session running de 6 km, allure cool et finish au bord de l eau.',
    placeName: 'Parc Borely',
    lat: 43.2594,
    lng: 5.3858,
    imageUrl: placePhotos.marseilleView,
    date: plusDays(1),
    tags: ['running', 'endurance', 'sunset'],
    vip: false,
    requiresApproval: false,
    min: 2,
    max: 10,
    createdBy: 'Nina',
    pendingRequests: [],
    approvedParticipants: ['Nina', 'Leo'],
    participants: ['Nina', 'Leo'],
  },
  {
    id: 's2',
    title: 'Padel afterwork Prado',
    description: 'Matchs tournants en double pour jouer, rencontrer du monde et finir sur un verre.',
    placeName: 'Orange Velodrome',
    lat: 43.2699,
    lng: 5.3959,
    imageUrl: placePhotos.rooftop,
    date: plusDays(3),
    tags: ['padel', 'afterwork', 'double'],
    vip: false,
    requiresApproval: true,
    min: 4,
    max: 8,
    createdBy: 'You',
    pendingRequests: ['Anis'],
    approvedParticipants: ['Tom', 'Mila', 'Younes'],
    participants: ['Tom', 'Mila', 'Younes'],
  },
  {
    id: 's3',
    title: 'Five foot Saint-Charles',
    description: 'Foot a 5 en petit comite, niveau intermediaire et ambiance propre.',
    placeName: 'Gare Saint-Charles',
    lat: 43.303,
    lng: 5.3811,
    imageUrl: placePhotos.businessMeeting,
    date: plusDays(5),
    tags: ['foot', 'five', 'teamplay'],
    vip: false,
    requiresApproval: false,
    min: 8,
    max: 10,
    createdBy: 'Karim',
    pendingRequests: [],
    approvedParticipants: ['Karim', 'Sofiane', 'Luca'],
    participants: ['Karim', 'Sofiane', 'Luca'],
  },
];

const seedEvents = [
  {
    id: 'e1',
    kind: 'MASTERCLASS',
    title: 'Masterclass IA au Mucem',
    description: 'Session produit, demos et cas d’usage concrets pour builders marseillais.',
    placeName: 'Mucem',
    lat: 43.2969,
    lng: 5.3612,
    imageUrl: placePhotos.mucem,
    date: plusDays(3),
    tags: ['AI', 'Product', 'Build'],
    vip: false,
    max: 20,
    requiresApproval: false,
    createdBy: 'Alice',
    pendingRequests: [],
    approvedParticipants: ['Alice', 'Ben', 'Clara'],
    participants: ['Alice', 'Ben', 'Clara'],
  },
  {
    id: 'e2',
    kind: 'FORMATION',
    title: 'Formation Sales a Saint-Charles',
    description: 'Format operationnel pour structurer une strategie B2B avec exercices.',
    placeName: 'Gare Saint-Charles',
    lat: 43.303,
    lng: 5.3811,
    imageUrl: placePhotos.businessMeeting,
    date: plusDays(5),
    tags: ['Sales', 'B2B', 'Go-to-market'],
    vip: false,
    max: 20,
    requiresApproval: false,
    createdBy: 'Nina',
    pendingRequests: [],
    approvedParticipants: ['Nina', 'Oscar'],
    participants: ['Nina', 'Oscar'],
  },
  {
    id: 'e3',
    kind: 'REUNION',
    title: 'Cercle fondateurs au Velodrome',
    description: 'Session privee scaling et fundraising avec format table ronde.',
    placeName: 'Orange Velodrome',
    lat: 43.2699,
    lng: 5.3959,
    imageUrl: placePhotos.rooftop,
    date: plusDays(9),
    tags: ['VIP', 'Founders', 'Fundraising'],
    vip: true,
    max: 20,
    requiresApproval: true,
    createdBy: 'Kenza',
    pendingRequests: ['Matteo'],
    approvedParticipants: ['David'],
    participants: ['David'],
  },
  {
    id: 'e4',
    kind: 'AFTERWORK',
    title: 'Afterwork Startups Vieux-Port',
    description: 'Networking decontracte en terrasse face aux quais.',
    placeName: 'Vieux-Port',
    lat: 43.2951,
    lng: 5.3744,
    imageUrl: placePhotos.vieuxPort,
    date: plusDays(2),
    tags: ['Afterwork', 'Networking', 'Startups'],
    vip: false,
    max: 30,
    requiresApproval: true,
    createdBy: 'You',
    pendingRequests: ['Leonie', 'Tommy'],
    approvedParticipants: ['Lea', 'Tom'],
    participants: ['Lea', 'Tom'],
  },
  {
    id: 'e5',
    kind: 'AFTERWORK',
    title: 'Happy Hour Tech La Friche',
    description: 'Bieres et conversations tech dans le quartier creatif.',
    placeName: 'La Friche Belle de Mai',
    lat: 43.3114,
    lng: 5.3906,
    imageUrl: placePhotos.friche,
    date: plusDays(6),
    tags: ['Tech', 'Happy Hour', 'Creatif'],
    vip: false,
    max: 25,
    requiresApproval: false,
    createdBy: 'Sam',
    pendingRequests: [],
    approvedParticipants: ['Sam'],
    participants: ['Sam'],
  },
];

const localizedSeedContent = {
  profiles: {
    p1: {
      fr: {
        bio: 'Commercial terrain, toujours partant pour un cafe en ville ou un apero sans prise de tete.',
        tags: ['Apero', 'Foot', 'Road trip'],
      },
      en: {
        bio: 'Field sales guy, always up for a coffee in town or an easy aperitif.',
        tags: ['Drinks', 'Football', 'Road trips'],
      },
      es: {
        bio: 'Trabaja en ventas y siempre se apunta a un café en la ciudad o a un aperitivo sin complicaciones.',
        tags: ['Aperitivo', 'Fútbol', 'Road trips'],
      },
      it: {
        bio: 'Lavora nelle vendite ed è sempre pronto per un caffè in città o un aperitivo senza complicazioni.',
        tags: ['Aperitivo', 'Calcio', 'Road trip'],
      },
    },
    p2: {
      fr: {
        bio: 'Styliste junior, adore les diners improvises, les bons looks et les discussions qui durent.',
        tags: ['Mode', 'Food', 'Sunset'],
      },
      en: {
        bio: 'Junior stylist, into spontaneous dinners, sharp looks and conversations that actually last.',
        tags: ['Fashion', 'Food', 'Sunset'],
      },
      es: {
        bio: 'Estilista junior, le encantan las cenas improvisadas, los buenos looks y las conversaciones largas.',
        tags: ['Moda', 'Food', 'Atardecer'],
      },
      it: {
        bio: 'Stylist junior, ama le cene improvvisate, i bei look e le conversazioni che durano.',
        tags: ['Moda', 'Food', 'Tramonto'],
      },
    },
    p3: {
      fr: {
        bio: 'Curieuse, cine-club du dimanche et petites adresses cosy autour de Castellane.',
        tags: ['Cinema', 'Lecture', 'Art'],
      },
      en: {
        bio: 'Curious soul, Sunday film club regular and always scouting cosy spots around Castellane.',
        tags: ['Cinema', 'Reading', 'Art'],
      },
      es: {
        bio: 'Muy curiosa, fan del cine de domingo y de las direcciones cosy por Castellane.',
        tags: ['Cine', 'Lectura', 'Arte'],
      },
      it: {
        bio: 'Curiosa, cineforum della domenica e indirizzi cozy intorno a Castellane.',
        tags: ['Cinema', 'Lettura', 'Arte'],
      },
    },
    p4: {
      fr: {
        bio: 'Etudiante en droit, grands chocolats chauds et terrasses tranquilles en fin de journee.',
        tags: ['Chocolat chaud', 'Musees', 'Balades'],
      },
      en: {
        bio: 'Law student, into big hot chocolates and calm terraces at the end of the day.',
        tags: ['Hot chocolate', 'Museums', 'Walks'],
      },
      es: {
        bio: 'Estudia derecho y le encantan los chocolates calientes y las terrazas tranquilas al caer la tarde.',
        tags: ['Chocolate caliente', 'Museos', 'Paseos'],
      },
      it: {
        bio: 'Studentessa di giurisprudenza, amante della cioccolata calda e delle terrazze tranquille a fine giornata.',
        tags: ['Cioccolata calda', 'Musei', 'Passeggiate'],
      },
    },
    p5: {
      fr: {
        bio: 'Bosse dans la logistique, fan de looks nets, de restos de quartier et de plans simples.',
        tags: ['Food', 'Style', 'Night city'],
      },
      en: {
        bio: 'Works in logistics, likes clean style, neighbourhood spots and simple plans that just work.',
        tags: ['Food', 'Style', 'City nights'],
      },
      es: {
        bio: 'Trabaja en logística, le gustan los looks limpios, los restaurantes de barrio y los planes simples.',
        tags: ['Food', 'Estilo', 'Noche urbana'],
      },
      it: {
        bio: 'Lavora nella logistica, ama gli outfit puliti, i ristoranti di quartiere e i piani semplici.',
        tags: ['Food', 'Stile', 'Notti in città'],
      },
    },
    p6: {
      fr: {
        bio: 'Graphiste inde, humour sec, playlists pointues et longues discussions autour d un dessert.',
        tags: ['Photo', 'Music', 'Cafe'],
      },
      en: {
        bio: 'Freelance designer, dry humour, sharp playlists and long conversations over dessert.',
        tags: ['Photo', 'Music', 'Cafe'],
      },
      es: {
        bio: 'Diseñador freelance, humor seco, playlists finas y conversaciones largas alrededor de un postre.',
        tags: ['Foto', 'Música', 'Café'],
      },
      it: {
        bio: 'Grafico freelance, ironia secca, playlist curate e lunghe chiacchiere davanti a un dolce.',
        tags: ['Foto', 'Musica', 'Caffè'],
      },
    },
    p7: {
      fr: {
        bio: 'Architecte, fan de cinema, de bords de mer hors saison et de soirees calmes entre amis.',
        tags: ['Architecture', 'Mer', 'Cinema'],
      },
      en: {
        bio: 'Architect, into cinema, quiet seaside walks out of season and low-key evenings with friends.',
        tags: ['Architecture', 'Sea', 'Cinema'],
      },
      es: {
        bio: 'Arquitecto, fan del cine, del mar fuera de temporada y de las noches tranquilas entre amigos.',
        tags: ['Arquitectura', 'Mar', 'Cine'],
      },
      it: {
        bio: 'Architetto, amante del cinema, del mare fuori stagione e delle serate tranquille tra amici.',
        tags: ['Architettura', 'Mare', 'Cinema'],
      },
    },
  },
  activities: {
    a1: {
      fr: {
        title: 'Brunch panoramique au Vieux-Port',
        description: 'Table conviviale face aux quais pour rencontrer du monde sans pression.',
        tags: ['Brunch', 'Social', 'Outdoor'],
      },
      en: {
        title: 'Panoramic brunch at the Vieux-Port',
        description: 'A relaxed table by the quays to meet people without any pressure.',
        tags: ['Brunch', 'Social', 'Outdoor'],
      },
      es: {
        title: 'Brunch panorámico en el Vieux-Port',
        description: 'Mesa relajada frente a los muelles para conocer gente sin presión.',
        tags: ['Brunch', 'Social', 'Outdoor'],
      },
      it: {
        title: 'Brunch panoramico al Vieux-Port',
        description: 'Tavolo conviviale davanti ai moli per conoscere persone senza pressione.',
        tags: ['Brunch', 'Sociale', 'Outdoor'],
      },
    },
    a2: {
      fr: {
        title: 'Picnic networking au Parc Borely',
        description: 'Rencontre chill dans les jardins, entre cafe glace et discussions ouvertes.',
        tags: ['Nature', 'Social', 'Chill'],
      },
      en: {
        title: 'Networking picnic at Parc Borely',
        description: 'A chill meetup in the gardens with iced coffee and open conversations.',
        tags: ['Nature', 'Social', 'Chill'],
      },
      es: {
        title: 'Picnic networking en Parc Borely',
        description: 'Encuentro chill en los jardines entre café frío y conversaciones abiertas.',
        tags: ['Naturaleza', 'Social', 'Chill'],
      },
      it: {
        title: 'Picnic networking al Parc Borely',
        description: 'Incontro chill nei giardini tra caffè freddo e conversazioni aperte.',
        tags: ['Natura', 'Sociale', 'Chill'],
      },
    },
    a3: {
      fr: {
        title: 'Diner secret aux Goudes',
        description: 'Experience VIP en bord de mer, coucher de soleil et petit groupe choisi.',
        tags: ['VIP', 'Food', 'Mer'],
      },
      en: {
        title: 'Secret dinner in Les Goudes',
        description: 'A VIP seaside experience with sunset light and a handpicked small group.',
        tags: ['VIP', 'Food', 'Sea'],
      },
      es: {
        title: 'Cena secreta en Les Goudes',
        description: 'Experiencia VIP junto al mar, atardecer y grupo pequeño cuidadosamente elegido.',
        tags: ['VIP', 'Food', 'Mar'],
      },
      it: {
        title: 'Cena segreta alle Goudes',
        description: 'Esperienza VIP sul mare, tramonto e piccolo gruppo selezionato.',
        tags: ['VIP', 'Food', 'Mare'],
      },
    },
  },
  sportActivities: {
    s1: {
      fr: {
        title: 'Running sunset Borely',
        description: 'Session running de 6 km, allure cool et finish au bord de l eau.',
        tags: ['Running', 'Endurance', 'Sunset'],
      },
      en: {
        title: 'Sunset run at Borely',
        description: 'A 6 km run at an easy pace, finishing by the water.',
        tags: ['Running', 'Endurance', 'Sunset'],
      },
      es: {
        title: 'Running sunset en Borely',
        description: 'Sesión de running de 6 km, ritmo tranquilo y final junto al agua.',
        tags: ['Running', 'Resistencia', 'Atardecer'],
      },
      it: {
        title: 'Running sunset a Borely',
        description: 'Sessione running da 6 km, ritmo easy e arrivo sul lungomare.',
        tags: ['Running', 'Resistenza', 'Tramonto'],
      },
    },
    s2: {
      fr: {
        title: 'Padel afterwork Prado',
        description: 'Matchs tournants en double pour jouer, rencontrer du monde et finir sur un verre.',
        tags: ['Padel', 'Afterwork', 'Double'],
      },
      en: {
        title: 'Padel afterwork at Prado',
        description: 'Rotating doubles games to play, meet people and wrap up with a drink.',
        tags: ['Padel', 'Afterwork', 'Doubles'],
      },
      es: {
        title: 'Pádel afterwork en Prado',
        description: 'Partidos rotativos en dobles para jugar, conocer gente y terminar con una copa.',
        tags: ['Pádel', 'Afterwork', 'Dobles'],
      },
      it: {
        title: 'Padel afterwork al Prado',
        description: 'Partite in doppio a rotazione per giocare, conoscere gente e chiudere con un drink.',
        tags: ['Padel', 'Afterwork', 'Doppio'],
      },
    },
    s3: {
      fr: {
        title: 'Five foot Saint-Charles',
        description: 'Foot a 5 en petit comite, niveau intermediaire et ambiance propre.',
        tags: ['Foot', 'Five', 'Esprit d equipe'],
      },
      en: {
        title: 'Five-a-side at Saint-Charles',
        description: 'Small-group five-a-side football, intermediate level and a clean atmosphere.',
        tags: ['Football', 'Five-a-side', 'Team spirit'],
      },
      es: {
        title: 'Fútbol 5 en Saint-Charles',
        description: 'Fútbol 5 en grupo reducido, nivel intermedio y muy buen ambiente.',
        tags: ['Fútbol', 'Fútbol 5', 'Equipo'],
      },
      it: {
        title: 'Calcetto a Saint-Charles',
        description: 'Calcetto in piccolo gruppo, livello intermedio e atmosfera pulita.',
        tags: ['Calcio', 'Calcetto', 'Squadra'],
      },
    },
  },
  events: {
    e1: {
      fr: {
        title: 'Masterclass IA au Mucem',
        description: 'Session produit, demos et cas d’usage concrets pour builders marseillais.',
        tags: ['IA', 'Produit', 'Build'],
      },
      en: {
        title: 'AI masterclass at the Mucem',
        description: 'A product-focused session with demos and practical use cases for Marseille builders.',
        tags: ['AI', 'Product', 'Build'],
      },
      es: {
        title: 'Masterclass de IA en el Mucem',
        description: 'Sesión de producto, demos y casos de uso concretos para builders de Marsella.',
        tags: ['IA', 'Producto', 'Build'],
      },
      it: {
        title: 'Masterclass IA al Mucem',
        description: 'Sessione prodotto, demo e casi d’uso concreti per builder marsigliesi.',
        tags: ['IA', 'Prodotto', 'Build'],
      },
    },
    e2: {
      fr: {
        title: 'Formation Sales a Saint-Charles',
        description: 'Format operationnel pour structurer une strategie B2B avec exercices.',
        tags: ['Sales', 'B2B', 'Go-to-market'],
      },
      en: {
        title: 'Sales training at Saint-Charles',
        description: 'A practical format to structure a B2B strategy with hands-on exercises.',
        tags: ['Sales', 'B2B', 'Go-to-market'],
      },
      es: {
        title: 'Formación de sales en Saint-Charles',
        description: 'Formato práctico para estructurar una estrategia B2B con ejercicios.',
        tags: ['Sales', 'B2B', 'Go-to-market'],
      },
      it: {
        title: 'Formazione sales a Saint-Charles',
        description: 'Formato operativo per strutturare una strategia B2B con esercizi pratici.',
        tags: ['Sales', 'B2B', 'Go-to-market'],
      },
    },
    e3: {
      fr: {
        title: 'Cercle fondateurs au Velodrome',
        description: 'Session privee scaling et fundraising avec format table ronde.',
        tags: ['VIP', 'Fondateurs', 'Fundraising'],
      },
      en: {
        title: 'Founders circle at the Velodrome',
        description: 'A private round-table session focused on scaling and fundraising.',
        tags: ['VIP', 'Founders', 'Fundraising'],
      },
      es: {
        title: 'Círculo de founders en el Velodrome',
        description: 'Sesión privada sobre scaling y fundraising en formato mesa redonda.',
        tags: ['VIP', 'Founders', 'Fundraising'],
      },
      it: {
        title: 'Cerchio founders al Velodrome',
        description: 'Sessione privata su scaling e fundraising in formato tavola rotonda.',
        tags: ['VIP', 'Founders', 'Fundraising'],
      },
    },
    e4: {
      fr: {
        title: 'Afterwork Startups Vieux-Port',
        description: 'Networking decontracte en terrasse face aux quais.',
        tags: ['Afterwork', 'Networking', 'Startups'],
      },
      en: {
        title: 'Startup afterwork at the Vieux-Port',
        description: 'Relaxed networking on a terrace facing the harbour.',
        tags: ['Afterwork', 'Networking', 'Startups'],
      },
      es: {
        title: 'Afterwork startups en el Vieux-Port',
        description: 'Networking relajado en una terraza frente a los muelles.',
        tags: ['Afterwork', 'Networking', 'Startups'],
      },
      it: {
        title: 'Afterwork startup al Vieux-Port',
        description: 'Networking rilassato in terrazza affacciata sui moli.',
        tags: ['Afterwork', 'Networking', 'Startup'],
      },
    },
    e5: {
      fr: {
        title: 'Happy Hour Tech La Friche',
        description: 'Bieres et conversations tech dans le quartier creatif.',
        tags: ['Tech', 'Happy Hour', 'Creatif'],
      },
      en: {
        title: 'Tech happy hour at La Friche',
        description: 'Beers and tech conversations in Marseille’s creative district.',
        tags: ['Tech', 'Happy Hour', 'Creative'],
      },
      es: {
        title: 'Happy hour tech en La Friche',
        description: 'Cervezas y conversaciones tech en el barrio creativo.',
        tags: ['Tech', 'Happy Hour', 'Creativo'],
      },
      it: {
        title: 'Happy hour tech a La Friche',
        description: 'Birre e conversazioni tech nel quartiere creativo.',
        tags: ['Tech', 'Happy Hour', 'Creativo'],
      },
    },
  },
};

const seedPosts = [
  {
    id: 'post1',
    type: 'POST',
    author: 'Alice',
    authorPlan: 'INTERMEDIATE',
    content: 'Nous recrutons un Product Engineer oriente IA a Marseille.',
    quoteAuthor: '',
    likes: 7,
    comments: ['Interesse, je partage dans mon reseau.'],
    createdAt: new Date(Date.now() - 1000 * 60 * 18).toISOString(),
  },
  {
    id: 'post2',
    type: 'QUOTE',
    author: 'David',
    authorPlan: 'PLATINUM',
    content: 'Build fast, learn faster.',
    quoteAuthor: 'Founder anonymous',
    likes: 11,
    comments: ['Exactement le bon mindset en early stage.'],
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
  },
];

const communityProfiles = [
  {
    name: 'Lina',
    visibility: 'public',
    photoUrl: communityPortraits.lina,
    age: 26,
    city: 'Marseille 7e',
    headline: 'Curatrice de week-ends doux',
    bio: 'Aime organiser des sorties simples entre gens cools, avec un vrai faible pour les expos et les terrasses.',
    tags: ['Expos', 'Brunch', 'Terrasses'],
  },
  {
    name: 'Marco',
    visibility: 'private',
    city: 'Marseille',
    headline: 'Profil privé',
    bio: '',
    tags: [],
  },
  {
    name: 'Nora',
    visibility: 'public',
    photoUrl: communityPortraits.nora,
    age: 29,
    city: 'Marseille 6e',
    headline: 'Community builder',
    bio: 'Toujours partante pour créer des groupes qui se parlent vraiment, pas juste des sorties de façade.',
    tags: ['Food', 'Social', 'City life'],
  },
  {
    name: 'Yanis',
    visibility: 'public',
    photoUrl: communityPortraits.yanis,
    age: 25,
    city: 'Marseille 5e',
    headline: 'Analyste ops la semaine, bon vivant le reste du temps',
    bio: 'Aime les restos sans chichi, les plans de quartier et les gens qui arrivent avec une bonne énergie.',
    tags: ['Food', 'Sorties', 'Quartiers'],
  },
  {
    name: 'Maya',
    visibility: 'private',
    city: 'Marseille',
    headline: 'Profil privé',
    bio: '',
    tags: [],
  },
  {
    name: 'Iris',
    visibility: 'public',
    photoUrl: communityPortraits.iris,
    age: 27,
    city: 'Marseille 8e',
    headline: 'Photographe lifestyle',
    bio: 'Prépare des sorties qui mélangent horizon mer, bonnes discussions et gens qui savent profiter du moment.',
    tags: ['Photo', 'Sea', 'Sunset'],
  },
  {
    name: 'Nina',
    visibility: 'public',
    photoUrl: communityPortraits.nina,
    age: 30,
    city: 'Marseille 2e',
    headline: 'Sales lead & afterwork host',
    bio: 'Entre activités et événements pro, elle connaît les bons spots pour réunir les bonnes personnes.',
    tags: ['Sales', 'Networking', 'Events'],
  },
  {
    name: 'Leo',
    visibility: 'public',
    photoUrl: communityPortraits.leo,
    age: 28,
    city: 'Marseille 8e',
    headline: 'Runner du matin',
    bio: 'Toujours chaud pour une session sunset ou un run léger avant de démarrer la journée.',
    tags: ['Running', 'Sunrise', 'Outdoor'],
  },
  {
    name: 'Tom',
    visibility: 'public',
    photoUrl: communityPortraits.tom,
    age: 27,
    city: 'Marseille 9e',
    headline: 'Padel addict',
    bio: 'Monte des groupes sport propres, bon niveau d’énergie, zéro drama, juste du jeu et du rythme.',
    tags: ['Padel', 'Afterwork', 'Competition cool'],
  },
  {
    name: 'Mila',
    visibility: 'private',
    city: 'Marseille',
    headline: 'Profil privé',
    bio: '',
    tags: [],
  },
  {
    name: 'Younes',
    visibility: 'public',
    photoUrl: communityPortraits.younes,
    age: 26,
    city: 'Marseille 10e',
    headline: 'Sport & discipline',
    bio: 'Aime les sessions cadrées, les groupes motivés et les rencontres qui se font en bougeant vraiment.',
    tags: ['Training', 'Foot', 'Discipline'],
  },
  {
    name: 'Karim',
    visibility: 'public',
    photoUrl: communityPortraits.karim,
    age: 31,
    city: 'Marseille 3e',
    headline: 'Organisateur de five',
    bio: 'Monte des sessions foot équilibrées où le niveau reste bon et l’ambiance encore meilleure.',
    tags: ['Foot', 'Teamplay', 'Five'],
  },
  {
    name: 'Sofiane',
    visibility: 'private',
    city: 'Marseille',
    headline: 'Profil privé',
    bio: '',
    tags: [],
  },
  {
    name: 'Luca',
    visibility: 'private',
    age: 24,
    city: 'Marseille 4e',
    headline: 'Milieu box-to-box',
    bio: 'Vient pour jouer sérieusement, rencontrer du monde et garder des groupes sport qui tournent bien.',
    tags: ['Foot', 'Collectif', 'Regular'],
  },
  {
    name: 'Alice',
    visibility: 'public',
    photoUrl: communityPortraits.alice,
    age: 33,
    city: 'Marseille 2e',
    headline: 'Head of Product chez Phocaea AI',
    bio: 'Anime des événements produit et IA orientés échanges utiles, rencontres ciblées et exécution.',
    tags: ['AI', 'Product', 'SaaS'],
  },
  {
    name: 'Ben',
    visibility: 'private',
    city: 'Marseille',
    headline: 'Profil privé',
    bio: '',
    tags: [],
  },
  {
    name: 'Clara',
    visibility: 'public',
    photoUrl: communityPortraits.clara,
    age: 29,
    city: 'Marseille 1er',
    headline: 'Growth manager',
    bio: 'Va aux events pro pour faire des rencontres utiles, rapides à qualifier et agréables à prolonger.',
    tags: ['Growth', 'B2B', 'Strategy'],
  },
  {
    name: 'Oscar',
    visibility: 'public',
    photoUrl: communityPortraits.oscar,
    age: 34,
    city: 'Marseille 6e',
    headline: 'Revenue consultant',
    bio: 'Aime les formations concrètes, les formats courts et les gens qui vont droit au point.',
    tags: ['Sales', 'RevOps', 'B2B'],
  },
  {
    name: 'David',
    visibility: 'private',
    city: 'Marseille',
    headline: 'Profil privé',
    bio: '',
    tags: [],
  },
  {
    name: 'Lea',
    visibility: 'public',
    photoUrl: communityPortraits.lea,
    age: 28,
    city: 'Marseille 7e',
    headline: 'VC scout & connector',
    bio: 'Repère les bons profils vite et aime les formats où les rencontres se font sans rigidité.',
    tags: ['VC', 'Startups', 'Networking'],
  },
  {
    name: 'Sam',
    visibility: 'public',
    photoUrl: communityPortraits.sam,
    age: 31,
    city: 'Marseille 5e',
    headline: 'Lead developer',
    bio: 'Fréquent sur les afterworks tech et les formats qui mélangent builders, produit et exécution.',
    tags: ['Tech', 'Engineering', 'Builders'],
  },
  {
    name: 'Matteo',
    visibility: 'private',
    city: 'Marseille',
    headline: 'Profil privé',
    bio: '',
    tags: [],
  },
];

const page = document.body.dataset.page || 'app';
let state = loadState();
let toastTimer = null;
let typingTimers = {};
let pageRefs = null;
let appContext = {
  amicalMap: null,
  sportMap: null,
  proMap: null,
  amicalMarkers: [],
  sportMarkers: [],
  proMarkers: [],
};
let profileUploadSlot = 0;

document.addEventListener('DOMContentLoaded', init);

function currentLanguage() {
  return LANGUAGES[state.language] ? state.language : 'fr';
}

function currentLocale() {
  return LOCALES[currentLanguage()] || LOCALES.fr;
}

function t(key, vars = {}) {
  const lang = currentLanguage();
  const message = translations[lang]?.[key] ?? translations.fr[key] ?? key;
  return Object.entries(vars).reduce((output, [name, value]) => output.replaceAll(`{${name}}`, String(value)), message);
}

function getPageTitle() {
  if (page === 'landing') return t('title.landing');
  if (page === 'login') return t('title.login');
  if (page === 'forgot') return t('title.forgot');
  if (page === 'legal') return t('title.legal');
  if (page === 'terms') return t('title.terms');
  if (page === 'privacy') return t('title.privacy');
  if (page === 'contact') return t('title.contact');
  if (page === 'register') return t('title.register');
  if (page === 'account') return t('title.account');
  if (page === 'profile') return t('title.profile');
  return t('title.app');
}

function getPlanLabel(planKey) {
  if (!planKey) return '';
  return t(`plan.${String(planKey).toLowerCase()}`);
}

function getPlanDescription(planKey) {
  if (!planKey) return '';
  return t(`planDesc.${String(planKey).toLowerCase()}`);
}

function getKindLabel(kind) {
  return t(`kind.${kind}`);
}

function getLocalizedSeedItem(group, item) {
  if (!item?.id) return item;
  const entry = localizedSeedContent[group]?.[item.id];
  if (!entry) return item;
  const localized = entry[currentLanguage()] || entry.fr;
  if (!localized) return item;
  return {
    ...item,
    ...localized,
    tags: localized.tags ? [...localized.tags] : item.tags,
  };
}

function getLocalizedProfile(profile) {
  return getLocalizedSeedItem('profiles', profile);
}

function getLocalizedActivity(activity) {
  return getLocalizedSeedItem('activities', activity);
}

function getLocalizedSportActivity(activity) {
  return getLocalizedSeedItem('sportActivities', activity);
}

function getLocalizedEvent(event) {
  return getLocalizedSeedItem('events', event);
}

function syncLanguageUI() {
  document.documentElement.lang = currentLanguage();
  document.title = getPageTitle();
  renderLanguagePanels();

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((node) => {
    node.setAttribute('aria-label', t(node.dataset.i18nAriaLabel));
  });

  document.querySelectorAll('[data-i18n-title]').forEach((node) => {
    node.setAttribute('title', t(node.dataset.i18nTitle));
  });
}

function renderLanguagePanels() {
  const activeLanguage = currentLanguage();
  document.querySelectorAll('[data-language-panel]').forEach((panel) => {
    panel.innerHTML = `
      <span class="language-label">${escapeHtml(t('language.label'))}</span>
      <div class="language-options">
        ${Object.entries(LANGUAGES)
          .map(([code, item]) => {
            const active = code === activeLanguage ? ' active' : '';
            return `
              <button
                class="language-btn${active}"
                data-language-select="${code}"
                type="button"
                aria-label="${escapeHtml(`${t('language.label')} ${item.name}`)}"
                title="${escapeHtml(item.name)}"
              >
                <span class="language-flag">${item.flag}</span>
                <span class="language-code">${item.label}</span>
              </button>
            `;
          })
          .join('')}
      </div>
    `;
  });

  document.querySelectorAll('[data-language-select]').forEach((button) => {
    button.addEventListener('click', () => {
      const nextLanguage = button.dataset.languageSelect;
      if (!LANGUAGES[nextLanguage] || nextLanguage === state.language) return;
      state.language = nextLanguage;
      saveState();
      rerenderCurrentPage();
    });
  });
}

function rerenderCurrentPage() {
  syncLanguageUI();

  if (page === 'app' && pageRefs) {
    renderApp(pageRefs);
    return;
  }

  if (page === 'account' && pageRefs) {
    renderAccountPage(pageRefs);
    return;
  }

  if (page === 'profile' && pageRefs) {
    renderProfilePage(pageRefs);
  }
}

function init() {
  syncLanguageUI();

  if (page === 'landing') {
    initRevealObserver();
    return;
  }

  if (page === 'login') {
    initLoginPage();
    return;
  }

  if (page === 'forgot') {
    initForgotPage();
    return;
  }

  if (['legal', 'terms', 'privacy', 'contact'].includes(page)) {
    return;
  }

  if (page === 'register') {
    initRegisterPage();
    return;
  }

  if (page === 'profile') {
    initProfilePage();
    return;
  }

  if (page === 'account') {
    initAccountPage();
    return;
  }

  initAppPage();
}

function initLoginPage() {
  const form = document.getElementById('loginForm');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (!isValidEmail(email)) {
      toast(t('toast.login.invalidEmail'));
      return;
    }

    if (!password) {
      toast(t('toast.login.emptyPassword'));
      return;
    }

    state.loggedIn = true;
    state.authEmail = email;
    state.currentUser.email = state.currentUser.email || email;
    saveState();
    window.location.href = 'index.html';
  });
}

function initForgotPage() {
  const form = document.getElementById('forgotForm');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('forgotEmail').value.trim();

    if (!isValidEmail(email)) {
      toast(t('toast.login.invalidEmail'));
      return;
    }

    toast(t('toast.forgot.sent'));
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 900);
  });
}

function initRegisterPage() {
  const form = document.getElementById('registerForm');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('registerFirstName').value.trim();
    const lastName = document.getElementById('registerLastName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value.trim();
    const confirm = document.getElementById('registerPasswordConfirm').value.trim();
    const birthdate = document.getElementById('registerBirthdate').value;
    const terms = document.getElementById('registerTerms').checked;

    if (!firstName || !lastName) {
      toast(t('toast.register.nameRequired'));
      return;
    }

    if (!isValidEmail(email)) {
      toast(t('toast.register.invalidEmail'));
      return;
    }

    if (!password || password.length < 6) {
      toast(t('toast.register.passwordLength'));
      return;
    }

    if (password !== confirm) {
      toast(t('toast.register.passwordMismatch'));
      return;
    }

    if (!birthdate) {
      toast(t('toast.register.birthdate'));
      return;
    }

    if (!terms) {
      toast(t('toast.register.terms'));
      return;
    }

    state.loggedIn = true;
    state.authEmail = email;
    state.currentUser = {
      ...state.currentUser,
      firstName,
      lastName,
      email,
      birthdate,
      city: state.currentUser.city || 'Marseille',
      photos: normalizePhotoSlots(state.currentUser.photos),
    };
    saveState();
    window.location.href = 'profile.html';
  });
}

function initAccountPage() {
  const refs = {
    currentPlan: document.getElementById('accountCurrentPlan'),
    status: document.getElementById('accountStatus'),
    email: document.getElementById('accountEmail'),
    toggle: document.getElementById('accountToggleSubscription'),
    planGrid: document.getElementById('accountPlanGrid'),
    basicCard: document.getElementById('accountBasicCard'),
    basicButtons: document.getElementById('accountBasicButtons'),
    referralText: document.getElementById('accountReferralText'),
    referralProgress: document.getElementById('accountReferralProgress'),
    referralForm: document.getElementById('accountReferralForm'),
    referralCode: document.getElementById('accountReferralCode'),
    claimPremium: document.getElementById('accountClaimPremium'),
  };
  pageRefs = refs;

  refs.toggle?.addEventListener('click', () => {
    state.subscriptionActive = !state.subscriptionActive;
    saveState();
    renderAccountPage(refs);
    toast(state.subscriptionActive ? t('toast.account.reactivated') : t('toast.account.paused'));
  });

  refs.referralForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const code = refs.referralCode.value.trim();
    if (!code) {
      toast(t('toast.account.referralEmpty'));
      return;
    }

    state.referrals += 1;
    refs.referralCode.value = '';
    saveState();
    renderAccountPage(refs);
    toast(t('toast.account.referralAdded'));
  });

  refs.claimPremium?.addEventListener('click', () => {
    state.plan = 'PREMIUM';
    state.subscriptionActive = true;
    saveState();
    renderAccountPage(refs);
    toast(t('toast.account.premiumClaimed'));
  });

  renderAccountPage(refs);
}

function renderAccountPage(refs) {
  const plan = plans[state.plan];
  refs.currentPlan.textContent = `${getPlanLabel(state.plan)} (${plan.price})`;
  refs.status.textContent = state.subscriptionActive ? t('account.active') : t('account.inactive');
  refs.email.textContent = state.currentUser.email || state.authEmail || 'Aucun email renseigne';

  refs.planGrid.innerHTML = Object.entries(plans)
    .map(([key, item]) => {
      const featured = item.featured ? ' featured' : '';
      const active = state.plan === key ? ' active' : '';
      const swipeText = item.swipeLimit === Infinity ? t('common.unlimited') : item.swipeLimit;
      const activityText = item.activityLimit === Infinity ? t('common.unlimited') : item.activityLimit;

      return `
        <article class="plan-item${featured}${active}">
          <div>
            <strong>${escapeHtml(getPlanLabel(key))}</strong>
            <p class="meta">${item.price} · ${escapeHtml(t('common.swipesPerDay', { value: swipeText }))} · ${escapeHtml(t('common.activitiesPerMonth', { value: activityText }))}</p>
            <p class="meta">${escapeHtml(getPlanDescription(key))}</p>
          </div>
          <button class="btn btn-soft" data-plan-select="${key}" type="button">${state.plan === key ? t('account.current') : t('account.choose')}</button>
        </article>
      `;
    })
    .join('');

  refs.planGrid.querySelectorAll('[data-plan-select]').forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.planSelect;
      if (!plans[target]) return;

      state.plan = target;
      state.subscriptionActive = true;
      if (target === 'BASIC' && !state.basicAllowedTab) {
        state.basicAllowedTab = 'dating';
      }
      ensureActiveSpaceAllowed();
      saveState();
      renderAccountPage(refs);
      toast(t('toast.account.planChanged', { plan: getPlanLabel(target) }));
    });
  });

  refs.basicCard.classList.toggle('hidden', state.plan !== 'BASIC');
  refs.basicButtons.innerHTML = ['dating', 'amical', 'sport', 'pro']
    .map((space) => {
      const active = state.basicAllowedTab === space ? '' : ' btn-ghost';
      return `<button class="btn${active}" data-basic-space="${space}" type="button">${humanSpace(space)}</button>`;
    })
    .join('');

  refs.basicButtons.querySelectorAll('[data-basic-space]').forEach((button) => {
    button.addEventListener('click', () => {
      if (state.plan !== 'BASIC') return;
      const nextSpace = button.dataset.basicSpace;
      const currentMonth = getParisMonthKey();
      const changedThisMonth = state.basicTabChangedMonth === currentMonth;
      const isNewTab = state.basicAllowedTab !== nextSpace;

      if (changedThisMonth && isNewTab) {
        toast(t('toast.account.basicBlocked'));
        return;
      }

      state.basicAllowedTab = nextSpace;
      if (isNewTab) state.basicTabChangedMonth = currentMonth;
      ensureActiveSpaceAllowed();
      saveState();
      renderAccountPage(refs);
      toast(t('toast.account.basicChanged', { space: humanSpace(nextSpace) }));
    });
  });

  refs.referralText.textContent = t('account.referralText', { count: state.referrals });
  refs.referralProgress.style.width = `${Math.min(100, (state.referrals / 5) * 100)}%`;
  refs.claimPremium.classList.toggle(
    'hidden',
    !(state.referrals >= 5 && state.plan !== 'PREMIUM' && state.plan !== 'PLATINUM'),
  );
  syncLanguageUI();
}

function initProfilePage() {
  const refs = {
    form: document.getElementById('profileForm'),
    firstName: document.getElementById('profileFirstName'),
    lastName: document.getElementById('profileLastName'),
    birthdate: document.getElementById('profileBirthdate'),
    age: document.getElementById('profileAge'),
    gender: document.getElementById('profileGender'),
    city: document.getElementById('profileCity'),
    bio: document.getElementById('profileBio'),
    bioCount: document.getElementById('profileBioCount'),
    interestTags: document.getElementById('interestTags'),
    customInterestInput: document.getElementById('customInterestInput'),
    addCustomInterest: document.getElementById('addCustomInterest'),
    profileTypeRadios: document.getElementById('profileTypeRadios'),
    companyFields: document.getElementById('companyFields'),
    proFields: document.getElementById('proFields'),
    companyName: document.getElementById('profileCompanyName'),
    jobTitle: document.getElementById('profileJobTitle'),
    company: document.getElementById('profileCompany'),
    sector: document.getElementById('profileSector'),
    website: document.getElementById('profileWebsite'),
    identityFileInput: document.getElementById('identityFileInput'),
    identityUploadBtn: document.getElementById('identityUploadBtn'),
    identityStatus: document.getElementById('identityStatus'),
    photoGrid: document.getElementById('profilePhotoGrid'),
    photoInput: document.getElementById('profilePhotoInput'),
    dropzone: document.getElementById('profileDropzone'),
  };
  pageRefs = refs;

  bindProfilePhotoHandlers(refs);
  bindProfileInterestHandlers(refs);
  bindProfileVerificationHandlers(refs);

  refs.birthdate?.addEventListener('change', () => renderProfilePage(refs));
  refs.bio?.addEventListener('input', () => {
    refs.bioCount.textContent = `${refs.bio.value.length} / 300`;
  });
  refs.profileTypeRadios?.addEventListener('change', () => {
    state.currentUser.profileType = getSelectedProfileType();
    saveState();
    renderProfilePage(refs);
  });

  refs.form?.addEventListener('submit', (event) => {
    event.preventDefault();
    saveProfileFromForm(refs);
    saveState();
    toast(t('toast.profile.saved'));
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 500);
  });

  renderProfilePage(refs);
}

function bindProfilePhotoHandlers(refs) {
  refs.photoInput?.addEventListener('change', async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const dataUrl = await readFileAsDataUrl(file);
    state.currentUser.photos = normalizePhotoSlots(state.currentUser.photos);
    state.currentUser.photos[profileUploadSlot] = dataUrl;
    saveState();
    renderProfilePage(refs);
    refs.photoInput.value = '';
  });

  refs.dropzone?.addEventListener('dragover', (event) => {
    event.preventDefault();
    refs.dropzone.classList.add('is-dragover');
  });

  refs.dropzone?.addEventListener('dragleave', () => {
    refs.dropzone.classList.remove('is-dragover');
  });

  refs.dropzone?.addEventListener('drop', async (event) => {
    event.preventDefault();
    refs.dropzone.classList.remove('is-dragover');
    const file = event.dataTransfer?.files?.[0];
    if (!file) return;
    const dataUrl = await readFileAsDataUrl(file);
    state.currentUser.photos = normalizePhotoSlots(state.currentUser.photos);
    const nextSlot = state.currentUser.photos.findIndex((photo) => !photo);
    profileUploadSlot = nextSlot === -1 ? 0 : nextSlot;
    state.currentUser.photos[profileUploadSlot] = dataUrl;
    saveState();
    renderProfilePage(refs);
  });
}

function bindProfileInterestHandlers(refs) {
  refs.addCustomInterest?.addEventListener('click', () => {
    const value = refs.customInterestInput.value.trim();
    if (!value) return;
    if (!state.currentUser.customInterests.includes(value)) {
      state.currentUser.customInterests.push(value);
    }
    if (!state.currentUser.interests.includes(value)) {
      state.currentUser.interests.push(value);
    }
    refs.customInterestInput.value = '';
    saveState();
    renderProfilePage(refs);
  });
}

function bindProfileVerificationHandlers(refs) {
  refs.identityUploadBtn?.addEventListener('click', () => refs.identityFileInput.click());
  refs.identityFileInput?.addEventListener('change', () => {
    refs.identityStatus.textContent = t('profile.identityChecking');
    refs.identityStatus.className = 'badge badge-muted';
    setTimeout(() => {
      state.currentUser.identityVerified = true;
      state.currentUser.proVerified = state.currentUser.profileType !== 'PERSONAL';
      saveState();
      renderProfilePage(refs);
      toast(t('toast.profile.identityVerified'));
    }, 2000);
  });
}

function renderProfilePage(refs) {
  const user = state.currentUser;
  const profileType = user.profileType || 'PERSONAL';
  const allInterests = uniqueArray([...interestOptions, ...(user.customInterests || [])]);

  refs.firstName.value = user.firstName || '';
  refs.lastName.value = user.lastName || '';
  refs.firstName.readOnly = Boolean(user.firstName) && profileType !== 'COMPANY';
  refs.lastName.readOnly = Boolean(user.lastName) && profileType !== 'COMPANY';
  refs.firstName.closest('label').classList.toggle('hidden', profileType === 'COMPANY');
  refs.lastName.closest('label').classList.toggle('hidden', profileType === 'COMPANY');
  refs.birthdate.value = user.birthdate || '';
  refs.age.value = user.birthdate ? String(calculateAge(user.birthdate)) : '';
  refs.gender.value = user.gender || '';
  refs.city.value = user.city || 'Marseille';
  refs.bio.value = user.bio || '';
  refs.bioCount.textContent = `${(user.bio || '').length} / 300`;
  refs.companyName.value = user.companyName || '';
  refs.jobTitle.value = user.jobTitle || '';
  refs.company.value = user.company || '';
  refs.sector.value = user.sector || '';
  refs.website.value = user.website || '';

  refs.interestTags.innerHTML = allInterests
    .map((interest) => {
      const active = user.interests.includes(interest) ? ' active' : '';
      return `<button class="interest-tag${active}" data-interest="${escapeHtml(interest)}" type="button">${escapeHtml(interest)}</button>`;
    })
    .join('');

  refs.interestTags.querySelectorAll('[data-interest]').forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.dataset.interest;
      toggleArrayValue(state.currentUser.interests, value);
      saveState();
      renderProfilePage(refs);
    });
  });

  refs.profileTypeRadios.querySelectorAll('label').forEach((label) => {
    const input = label.querySelector('input');
    const active = input.value === profileType;
    input.checked = active;
    label.classList.toggle('active', active);
  });

  refs.companyFields.classList.toggle('hidden', profileType !== 'COMPANY');
  refs.proFields.classList.toggle('hidden', profileType === 'PERSONAL');

  refs.identityStatus.className = user.identityVerified ? 'badge badge-amical' : 'badge badge-muted';
  refs.identityStatus.textContent = user.identityVerified
    ? user.proVerified
      ? t('profile.identityVerifiedPro')
      : t('profile.identityVerified')
    : t('profile.identityPending');

  const photos = normalizePhotoSlots(user.photos);
  refs.photoGrid.innerHTML = photos
    .map((photo, index) => {
      const primary = index === 0 ? ' primary' : '';
      return `
        <div class="photo-slot${primary}">
          ${photo ? `<img src="${photo}" alt="Photo de profil ${index + 1}" />` : ''}
          <button type="button" data-photo-slot="${index}" aria-label="Ajouter ou modifier la photo ${index + 1}">+</button>
        </div>
      `;
    })
    .join('');

  syncLanguageUI();

  refs.photoGrid.querySelectorAll('[data-photo-slot]').forEach((button) => {
    button.addEventListener('click', () => {
      profileUploadSlot = Number(button.dataset.photoSlot);
      refs.photoInput.click();
    });
  });
}

function saveProfileFromForm(refs) {
  const profileType = getSelectedProfileType();
  state.currentUser = {
    ...state.currentUser,
    firstName: profileType === 'COMPANY' ? '' : refs.firstName.value.trim(),
    lastName: profileType === 'COMPANY' ? '' : refs.lastName.value.trim(),
    birthdate: refs.birthdate.value,
    gender: refs.gender.value,
    city: refs.city.value.trim() || 'Marseille',
    bio: refs.bio.value.trim(),
    profileType,
    companyName: refs.companyName.value.trim(),
    jobTitle: refs.jobTitle.value.trim(),
    company: refs.company.value.trim(),
    sector: refs.sector.value.trim(),
    website: refs.website.value.trim(),
    photos: normalizePhotoSlots(state.currentUser.photos),
  };
  state.loggedIn = true;
}

function initAppPage() {
  ensureActiveSpaceAllowed();
  ensureSelectionIntegrity();

  const refs = collectAppRefs();
  pageRefs = refs;
  bindAppEvents(refs);
  initMaps(refs);
  renderApp(refs);
}

function collectAppRefs() {
  return {
    statusChip: document.getElementById('subscriptionStatusChip'),
    welcomeChip: document.getElementById('welcomeChip'),
    upsellBanner: document.getElementById('upsellBanner'),
    upsellText: document.getElementById('upsellText'),
    liveProfilesCount: document.getElementById('liveProfilesCount'),
    liveActivitiesCount: document.getElementById('liveActivitiesCount'),
    liveConvosCount: document.getElementById('liveConvosCount'),
    liveTicker: document.getElementById('liveTicker'),
    datingUsage: document.getElementById('datingUsageText'),
    amicalUsage: document.getElementById('amicalUsageText'),
    sportUsage: document.getElementById('sportUsageText'),
    proUsage: document.getElementById('proUsageText'),
    datingProfileImage: document.getElementById('datingProfileImage'),
    datingFeaturedBadge: document.getElementById('datingFeaturedBadge'),
    datingDistanceBadge: document.getElementById('datingDistanceBadge'),
    datingPhotoDots: document.getElementById('datingPhotoDots'),
    datingPrevPhotoBtn: document.getElementById('datingPrevPhotoBtn'),
    datingNextPhotoBtn: document.getElementById('datingNextPhotoBtn'),
    datingProfileName: document.getElementById('datingProfileName'),
    datingProfileBio: document.getElementById('datingProfileBio'),
    datingProfileTags: document.getElementById('datingProfileTags'),
    datingSwipeRemaining: document.getElementById('datingSwipeRemaining'),
    datingSwipeProgress: document.getElementById('datingSwipeProgress'),
    datingNextProfileImage: document.getElementById('datingNextProfileImage'),
    datingNextProfileName: document.getElementById('datingNextProfileName'),
    datingSpotlightText: document.getElementById('datingSpotlightText'),
    datingPaceText: document.getElementById('datingPaceText'),
    swipeFlash: document.getElementById('swipeFlash'),
    passBtn: document.getElementById('passBtn'),
    likeBtn: document.getElementById('likeBtn'),
    datingMatchesGrid: document.getElementById('datingMatchesGrid'),
    datingConversationList: document.getElementById('datingConversationList'),
    datingChatTitle: document.getElementById('datingChatTitle'),
    datingChatSubtitle: document.getElementById('datingChatSubtitle'),
    datingChatMessages: document.getElementById('datingChatMessages'),
    datingTyping: document.getElementById('datingTyping'),
    datingChatForm: document.getElementById('datingChatForm'),
    datingChatInput: document.getElementById('datingChatInput'),
    amicalMapJumps: document.getElementById('amicalMapJumps'),
    amicalMap: document.getElementById('amicalMap'),
    amicalSelectedImage: document.getElementById('amicalSelectedImage'),
    amicalSelectedTitle: document.getElementById('amicalSelectedTitle'),
    amicalSelectedDesc: document.getElementById('amicalSelectedDesc'),
    amicalSelectedMeta: document.getElementById('amicalSelectedMeta'),
    amicalSelectedTags: document.getElementById('amicalSelectedTags'),
    amicalSelectedStatus: document.getElementById('amicalSelectedStatus'),
    amicalParticipants: document.getElementById('amicalParticipants'),
    amicalPendingSection: document.getElementById('amicalPendingSection'),
    amicalPendingRequests: document.getElementById('amicalPendingRequests'),
    amicalJoinBtn: document.getElementById('amicalJoinBtn'),
    amicalEditId: document.getElementById('amicalEditId'),
    amicalCreateForm: document.getElementById('amicalCreateForm'),
    amicalCreateTitle: document.getElementById('amicalCreateTitle'),
    amicalCreateDescription: document.getElementById('amicalCreateDescription'),
    amicalCreatePlace: document.getElementById('amicalCreatePlace'),
    amicalCreateDate: document.getElementById('amicalCreateDate'),
    amicalCreateTags: document.getElementById('amicalCreateTags'),
    amicalCreateVip: document.getElementById('amicalCreateVip'),
    amicalCreateApproval: document.getElementById('amicalCreateApproval'),
    amicalCreateSubmit: document.getElementById('amicalCreateSubmit'),
    amicalCreatedList: document.getElementById('amicalCreatedList'),
    amicalConversationList: document.getElementById('amicalConversationList'),
    amicalChatTitle: document.getElementById('amicalChatTitle'),
    amicalChatSubtitle: document.getElementById('amicalChatSubtitle'),
    amicalChatMessages: document.getElementById('amicalChatMessages'),
    amicalTyping: document.getElementById('amicalTyping'),
    amicalChatForm: document.getElementById('amicalChatForm'),
    amicalChatInput: document.getElementById('amicalChatInput'),
    sportMapJumps: document.getElementById('sportMapJumps'),
    sportMap: document.getElementById('sportMap'),
    sportSelectedImage: document.getElementById('sportSelectedImage'),
    sportSelectedTitle: document.getElementById('sportSelectedTitle'),
    sportSelectedDesc: document.getElementById('sportSelectedDesc'),
    sportSelectedMeta: document.getElementById('sportSelectedMeta'),
    sportSelectedTags: document.getElementById('sportSelectedTags'),
    sportSelectedStatus: document.getElementById('sportSelectedStatus'),
    sportParticipants: document.getElementById('sportParticipants'),
    sportPendingSection: document.getElementById('sportPendingSection'),
    sportPendingRequests: document.getElementById('sportPendingRequests'),
    sportJoinBtn: document.getElementById('sportJoinBtn'),
    sportEditId: document.getElementById('sportEditId'),
    sportCreateForm: document.getElementById('sportCreateForm'),
    sportCreateTitle: document.getElementById('sportCreateTitle'),
    sportCreateDescription: document.getElementById('sportCreateDescription'),
    sportCreatePlace: document.getElementById('sportCreatePlace'),
    sportCreateDate: document.getElementById('sportCreateDate'),
    sportCreateTags: document.getElementById('sportCreateTags'),
    sportCreateVip: document.getElementById('sportCreateVip'),
    sportCreateApproval: document.getElementById('sportCreateApproval'),
    sportCreateSubmit: document.getElementById('sportCreateSubmit'),
    sportCreatedList: document.getElementById('sportCreatedList'),
    sportConversationList: document.getElementById('sportConversationList'),
    sportChatTitle: document.getElementById('sportChatTitle'),
    sportChatSubtitle: document.getElementById('sportChatSubtitle'),
    sportChatMessages: document.getElementById('sportChatMessages'),
    sportTyping: document.getElementById('sportTyping'),
    sportChatForm: document.getElementById('sportChatForm'),
    sportChatInput: document.getElementById('sportChatInput'),
    proMapJumps: document.getElementById('proMapJumps'),
    proMap: document.getElementById('proMap'),
    proSelectedImage: document.getElementById('proSelectedImage'),
    proSelectedTitle: document.getElementById('proSelectedTitle'),
    proSelectedDesc: document.getElementById('proSelectedDesc'),
    proSelectedMeta: document.getElementById('proSelectedMeta'),
    proSelectedKind: document.getElementById('proSelectedKind'),
    proSelectedTags: document.getElementById('proSelectedTags'),
    proParticipants: document.getElementById('proParticipants'),
    proPendingSection: document.getElementById('proPendingSection'),
    proPendingRequests: document.getElementById('proPendingRequests'),
    proJoinBtn: document.getElementById('proJoinBtn'),
    proEditId: document.getElementById('proEditId'),
    proCreateForm: document.getElementById('proCreateForm'),
    proCreateKind: document.getElementById('proCreateKind'),
    proCreateTitle: document.getElementById('proCreateTitle'),
    proCreateDescription: document.getElementById('proCreateDescription'),
    proCreatePlace: document.getElementById('proCreatePlace'),
    proCreateDate: document.getElementById('proCreateDate'),
    proCreateTags: document.getElementById('proCreateTags'),
    proCreateVip: document.getElementById('proCreateVip'),
    proCreateApproval: document.getElementById('proCreateApproval'),
    proCreateSubmit: document.getElementById('proCreateSubmit'),
    proCreatedList: document.getElementById('proCreatedList'),
    proPostForm: document.getElementById('proPostForm'),
    proPostType: document.getElementById('proPostType'),
    proQuoteAuthor: document.getElementById('proQuoteAuthor'),
    proPostContent: document.getElementById('proPostContent'),
    proFeed: document.getElementById('proFeed'),
    proConversationList: document.getElementById('proConversationList'),
    proChatTitle: document.getElementById('proChatTitle'),
    proChatSubtitle: document.getElementById('proChatSubtitle'),
    proChatMessages: document.getElementById('proChatMessages'),
    proTyping: document.getElementById('proTyping'),
    proChatForm: document.getElementById('proChatForm'),
    proChatInput: document.getElementById('proChatInput'),
    memberProfileModal: document.getElementById('memberProfileModal'),
    memberProfileCard: document.getElementById('memberProfileCard'),
    memberProfileClose: document.getElementById('memberProfileClose'),
    memberProfileBadge: document.getElementById('memberProfileBadge'),
    memberProfileName: document.getElementById('memberProfileName'),
    memberProfileHeadline: document.getElementById('memberProfileHeadline'),
    memberProfileLocation: document.getElementById('memberProfileLocation'),
    memberProfileMedia: document.getElementById('memberProfileMedia'),
    memberProfileBio: document.getElementById('memberProfileBio'),
    memberProfilePrivate: document.getElementById('memberProfilePrivate'),
    memberProfileTags: document.getElementById('memberProfileTags'),
    memberProfileFacts: document.getElementById('memberProfileFacts'),
  };
}

function bindAppEvents(refs) {
  document.querySelectorAll('[data-main-space]').forEach((button) => {
    button.addEventListener('click', () => {
      const space = button.dataset.mainSpace;
      if (!canAccessSpace(space, true, refs)) return;
      state.ui.activeSpace = space;
      saveState();
      renderApp(refs);
      refreshMapSizes();
    });
  });

  document.querySelectorAll('.inner-tab').forEach((button) => {
    button.addEventListener('click', () => {
      const space = button.dataset.space;
      const view = button.dataset.view;
      if (!space || !view) return;
      setSpaceView(space, view);
      saveState();
      renderApp(refs);
      refreshMapSizes();
    });
  });

  refs.passBtn?.addEventListener('click', () => handleSwipe('PASS', refs));
  refs.likeBtn?.addEventListener('click', () => handleSwipe('LIKE', refs));
  refs.datingPrevPhotoBtn?.addEventListener('click', () => cycleDatingPhoto(-1, refs));
  refs.datingNextPhotoBtn?.addEventListener('click', () => cycleDatingPhoto(1, refs));

  refs.datingChatForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    submitChat('dating', state.ui.selectedMatchId, refs.datingChatInput.value, refs);
    refs.datingChatInput.value = '';
  });

  refs.amicalChatForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    submitChat('amical', state.ui.selectedActivityId, refs.amicalChatInput.value, refs);
    refs.amicalChatInput.value = '';
  });

  refs.sportChatForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    submitChat('sport', state.ui.selectedSportActivityId, refs.sportChatInput.value, refs);
    refs.sportChatInput.value = '';
  });

  refs.proChatForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    submitChat('pro', state.ui.selectedEventId, refs.proChatInput.value, refs);
    refs.proChatInput.value = '';
  });

  refs.amicalJoinBtn?.addEventListener('click', () => joinActivity(state.ui.selectedActivityId, refs));
  refs.sportJoinBtn?.addEventListener('click', () => joinSportActivity(state.ui.selectedSportActivityId, refs));
  refs.proJoinBtn?.addEventListener('click', () => joinEvent(state.ui.selectedEventId, refs));

  refs.amicalCreateForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    upsertActivityFromForm(refs);
  });

  refs.sportCreateForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    upsertSportActivityFromForm(refs);
  });

  refs.proCreateForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    upsertEventFromForm(refs);
  });

  refs.proPostForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const content = refs.proPostContent.value.trim();
    if (!content) return;

    state.posts.unshift({
      id: `post-${Date.now()}`,
      type: refs.proPostType.value,
      author: currentActorName(),
      authorPlan: state.plan,
      content,
      quoteAuthor: refs.proQuoteAuthor.value.trim(),
      likes: 0,
      comments: [],
      createdAt: new Date().toISOString(),
    });
    refs.proPostForm.reset();
    saveState();
    renderApp(refs);
    toast(t('toast.postPublished'));
  });

  document.querySelectorAll('[data-feed-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      state.feedFilter = button.dataset.feedFilter || 'ALL';
      saveState();
      renderFeed(refs);
    });
  });

  refs.memberProfileClose?.addEventListener('click', () => closeMemberProfile(refs));
  refs.memberProfileModal?.addEventListener('click', (event) => {
    if (event.target === refs.memberProfileModal) {
      closeMemberProfile(refs);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !refs.memberProfileModal?.classList.contains('hidden')) {
      closeMemberProfile(refs);
    }
  });
}

function initMaps(refs) {
  if (!window.L || !refs.amicalMap || !refs.sportMap || !refs.proMap) return;

  appContext.amicalMap = L.map(refs.amicalMap, { zoomControl: true, attributionControl: true }).setView(
    [MARSEILLE_CENTER.lat, MARSEILLE_CENTER.lng],
    12,
  );

  appContext.sportMap = L.map(refs.sportMap, { zoomControl: true, attributionControl: true }).setView(
    [MARSEILLE_CENTER.lat, MARSEILLE_CENTER.lng],
    12,
  );

  appContext.proMap = L.map(refs.proMap, { zoomControl: true, attributionControl: true }).setView(
    [MARSEILLE_CENTER.lat, MARSEILLE_CENTER.lng],
    12,
  );

  const tileOptions = {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors',
  };

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', tileOptions).addTo(appContext.amicalMap);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', tileOptions).addTo(appContext.sportMap);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', tileOptions).addTo(appContext.proMap);
}

function renderApp(refs) {
  ensureActiveSpaceAllowed();
  ensureSelectionIntegrity();
  renderAppChrome(refs);
  renderSpaceTabs();
  renderDating(refs);
  renderAmical(refs);
  renderSport(refs);
  renderPro(refs);
  syncLanguageUI();
}

function renderAppChrome(refs) {
  const plan = plans[state.plan];
  const planLabel = getPlanLabel(state.plan);
  refs.statusChip.textContent = state.subscriptionActive
    ? t('status.active', { plan: planLabel })
    : t('status.inactive', { plan: planLabel });
  refs.statusChip.style.background = state.subscriptionActive ? '#e9fff4' : '#fff0f0';
  refs.statusChip.style.color = state.subscriptionActive ? '#11834e' : '#b12f2f';
  refs.welcomeChip.textContent = state.loggedIn ? t('welcome.hello', { name: currentActorName() }) : t('welcome.guest');

  animateMetric(refs.liveProfilesCount, state.profiles.length + state.matches.length);
  animateMetric(refs.liveActivitiesCount, state.activities.length + state.sportActivities.length + state.events.length);
  animateMetric(
    refs.liveConvosCount,
    Object.keys(state.chats.dating).length +
      Object.keys(state.chats.amical).length +
      Object.keys(state.chats.sport).length +
      Object.keys(state.chats.pro).length,
  );

  const tickerItems = [
    ...state.activities.slice(0, 2).map((activity) => `${humanSpace('amical')} · ${activity.placeName}`),
    ...state.sportActivities.slice(0, 2).map((activity) => `${humanSpace('sport')} · ${activity.placeName}`),
    ...state.events.slice(0, 3).map((event) => `${event.kind} · ${event.placeName}`),
    `${t('ticker.plan')} · ${planLabel}`,
    `${t('ticker.referral')} · ${state.referrals}/5`,
  ];
  const line = tickerItems.map((item) => escapeHtml(item)).join(' • ');
  refs.liveTicker.innerHTML = `<div class="ticker-track">${line} • ${line}</div>`;

  refs.datingUsage.textContent = t('usage.swipes', { value: formatUsage(state.usage.swipeCount, plan.swipeLimit) });
  refs.amicalUsage.textContent = t('usage.registrations', { value: formatUsage(state.usage.activityCount, plan.activityLimit) });
  refs.sportUsage.textContent = t('usage.registrations', { value: formatUsage(state.usage.activityCount, plan.activityLimit) });
  refs.proUsage.textContent = t('usage.registrations', { value: formatUsage(state.usage.activityCount, plan.activityLimit) });

  hideUpsell(refs);
}

function renderSpaceTabs() {
  document.querySelectorAll('[data-main-space]').forEach((button) => {
    const space = button.dataset.mainSpace;
    button.classList.toggle('active', state.ui.activeSpace === space);
  });

  document.querySelectorAll('[data-space-panel]').forEach((panel) => {
    panel.classList.toggle('active', panel.dataset.spacePanel === state.ui.activeSpace);
  });

  document.querySelectorAll('.inner-tab').forEach((button) => {
    const space = button.dataset.space;
    const view = button.dataset.view;
    const currentView = getSpaceView(space);
    button.classList.toggle('active', currentView === view);
  });

  document.querySelectorAll('[data-view-panel]').forEach((panel) => {
    const space = panel.dataset.space;
    const view = panel.dataset.viewPanel;
    panel.classList.toggle('active', getSpaceView(space) === view);
  });
}

function renderDating(refs) {
  const profiles = getOrderedProfiles();
  const currentBase = profiles[state.ui.datingCursor % profiles.length];
  const nextBase = profiles[(state.ui.datingCursor + 1) % profiles.length];
  const current = getLocalizedProfile(currentBase);
  const next = getLocalizedProfile(nextBase);
  const photoIndex = Math.min(state.ui.datingPhotoIndex, current.photos.length - 1);
  const currentPhoto = current.photos[photoIndex];
  const hasMultiplePhotos = current.photos.length > 1;
  const plan = plans[state.plan];
  const remaining =
    plan.swipeLimit === Infinity
      ? t('dating.remainingUnlimited')
      : t('dating.remaining', { count: Math.max(0, plan.swipeLimit - state.usage.swipeCount) });
  const ratio = plan.swipeLimit === Infinity ? 1 : Math.min(1, state.usage.swipeCount / Math.max(plan.swipeLimit, 1));

  refs.datingProfileImage.src = currentPhoto;
  refs.datingProfileImage.alt = `Photos de ${current.name}`;
  applyPhotoFraming(refs.datingProfileImage, currentBase, false);
  refs.datingProfileName.textContent = `${current.name}, ${current.age}`;
  refs.datingProfileBio.textContent = current.bio;
  refs.datingProfileTags.innerHTML = current.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('');
  refs.datingDistanceBadge.textContent = `${current.distance} · Marseille`;
  refs.datingFeaturedBadge.classList.toggle('hidden', !plans[current.plan]?.featured);
  refs.datingSwipeRemaining.textContent = remaining;
  refs.datingSwipeProgress.style.width = `${Math.max(4, ratio * 100)}%`;
  refs.datingNextProfileImage.src = next.photos[0];
  applyPhotoFraming(refs.datingNextProfileImage, nextBase, true);
  refs.datingNextProfileName.textContent = `${next.name}, ${next.age}`;
  refs.datingSpotlightText.textContent = plans[current.plan]?.featured
    ? t('dating.spotlight.featured', { name: current.name })
    : t('dating.spotlight.next', { name: next.name, distance: next.distance });
  refs.datingPaceText.textContent = plan.swipeLimit === Infinity
    ? t('dating.pace.unlimited')
    : t('dating.pace.limited', { count: Math.max(0, plan.swipeLimit - state.usage.swipeCount) });
  refs.datingPrevPhotoBtn.disabled = !hasMultiplePhotos;
  refs.datingNextPhotoBtn.disabled = !hasMultiplePhotos;

  refs.datingPhotoDots.innerHTML = current.photos
    .map(
      (_, index) => `
        <button class="${index === photoIndex ? 'active' : ''}" data-dating-dot="${index}" type="button" aria-label="Photo ${index + 1}"></button>
      `,
    )
    .join('');
  refs.datingPhotoDots.querySelectorAll('[data-dating-dot]').forEach((button) => {
    button.addEventListener('click', () => {
      state.ui.datingPhotoIndex = Number(button.dataset.datingDot);
      saveState();
      renderDating(refs);
    });
  });

  renderDatingMatches(refs);
  renderDatingMessages(refs);
}

function renderDatingMatches(refs) {
  if (!state.matches.length) {
    refs.datingMatchesGrid.innerHTML = `<p class="meta">${escapeHtml(t('dating.emptyMatches'))}</p>`;
    return;
  }

  refs.datingMatchesGrid.innerHTML = state.matches
    .map((match) => {
      const featured = plans[match.plan]?.featured ? ' featured' : '';
      const badge = plans[match.plan]?.featured ? `<span class="badge badge-featured">${escapeHtml(t('dating.featured'))}</span>` : '';
      return `
        <article class="match-card${featured}" data-open-match="${match.id}">
          <img src="${match.photos[0]}" alt="${escapeHtml(match.name)}" style="${photoInlineStyle(match, true)}" />
          <div>
            <strong>${escapeHtml(match.name)}</strong>
            <p class="meta">${relativeDate(match.lastAt || new Date().toISOString())}</p>
          </div>
          ${badge}
        </article>
      `;
    })
    .join('');

  refs.datingMatchesGrid.querySelectorAll('[data-open-match]').forEach((card) => {
    card.addEventListener('click', () => {
      state.ui.selectedMatchId = card.dataset.openMatch;
      setSpaceView('dating', 'messages');
      saveState();
      renderApp(refs);
    });
  });
}

function renderDatingMessages(refs) {
  if (!state.matches.length) {
    refs.datingConversationList.innerHTML = `<p class="meta">${escapeHtml(t('dating.emptyConversations'))}</p>`;
    refs.datingChatTitle.textContent = t('dating.chat.emptyTitle');
    refs.datingChatSubtitle.textContent = t('dating.chat.emptySubtitle');
    refs.datingChatMessages.innerHTML = `<p class="meta">${escapeHtml(t('dating.chat.emptyBody'))}</p>`;
    refs.datingTyping.classList.add('hidden');
    return;
  }

  if (!state.ui.selectedMatchId || !state.matches.some((match) => match.id === state.ui.selectedMatchId)) {
    state.ui.selectedMatchId = state.matches[0].id;
  }

  refs.datingConversationList.innerHTML = state.matches
    .map((match) => {
      const active = match.id === state.ui.selectedMatchId ? ' active' : '';
      const featured = plans[match.plan]?.featured ? '<span class="badge badge-featured">⭐</span>' : '';
      return `
        <button class="conversation-item${active}" data-chat-match="${match.id}" type="button">
          <img src="${match.photos[0]}" alt="${escapeHtml(match.name)}" style="${photoInlineStyle(match, true)}" />
          <div>
            <strong>${escapeHtml(match.name)}</strong>
            <p class="meta">${match.distance || 'Marseille'}</p>
          </div>
          ${featured}
        </button>
      `;
    })
    .join('');

  refs.datingConversationList.querySelectorAll('[data-chat-match]').forEach((button) => {
    button.addEventListener('click', () => {
      state.ui.selectedMatchId = button.dataset.chatMatch;
      saveState();
      renderDatingMessages(refs);
    });
  });

  const match = state.matches.find((item) => item.id === state.ui.selectedMatchId);
  refs.datingChatTitle.textContent = t('dating.chat.with', { name: match.name });
  refs.datingChatSubtitle.textContent = plans[match.plan]?.featured
    ? t('dating.chat.platinum')
    : t('dating.chat.direct');
  renderChatList(refs.datingChatMessages, state.chats.dating[match.id] || []);
}

function renderAmical(refs) {
  renderAmicalMap(refs);
  renderAmicalSelected(refs);
  renderAmicalCreatedList(refs);
  renderAmicalMessages(refs);
}

function renderAmicalMap(refs) {
  refs.amicalMapJumps.innerHTML = state.activities
    .map((activity) => `<button class="map-jump" data-activity-jump="${activity.id}" type="button">${escapeHtml(activity.placeName)}</button>`)
    .join('');

  refs.amicalMapJumps.querySelectorAll('[data-activity-jump]').forEach((button) => {
    button.addEventListener('click', () => {
      state.ui.selectedActivityId = button.dataset.activityJump;
      saveState();
      renderAmical(refs);
      focusMapOn(appContext.amicalMap, state.activities, state.ui.selectedActivityId);
    });
  });

  if (!window.L || !appContext.amicalMap) return;
  appContext.amicalMarkers.forEach((marker) => marker.remove());
  appContext.amicalMarkers = [];

  state.activities.forEach((activity) => {
    const viewActivity = getLocalizedActivity(activity);
    const marker = L.marker([activity.lat, activity.lng], {
      icon: makeMarkerIcon({
        theme: 'amical',
        vip: activity.vip,
      }),
    }).addTo(appContext.amicalMap);
    marker.bindPopup(
      `<div><strong>${escapeHtml(viewActivity.title)}</strong><br>${escapeHtml(activity.placeName)}</div>`,
    );
    marker.on('click', () => {
      state.ui.selectedActivityId = activity.id;
      saveState();
      renderAmical(refs);
    });
    appContext.amicalMarkers.push(marker);
  });

  focusMapOn(appContext.amicalMap, state.activities, state.ui.selectedActivityId);
}

function resolveActivityVisual(scope, item) {
  if (scope === 'sport') {
    const haystack = normalizeText([item?.title, item?.description, ...(item?.tags || [])].join(' '));
    if (haystack.includes('padel') || haystack.includes('paddle') || haystack.includes('padel')) {
      return localSceneImages.sportPadel;
    }
    if (
      haystack.includes('foot') ||
      haystack.includes('five') ||
      haystack.includes('football') ||
      haystack.includes('futbol') ||
      haystack.includes('soccer') ||
      haystack.includes('calcio') ||
      haystack.includes('calcetto')
    ) {
      return localSceneImages.sportFoot;
    }
    return localSceneImages.sportRunning;
  }

  if (scope === 'pro') {
    return localSceneImages.pro;
  }

  return localSceneImages.amical;
}

function setCardImage(imageElement, primarySrc, fallbackSrc, altText) {
  if (!imageElement) return;
  imageElement.alt = altText;
  imageElement.onerror = () => {
    imageElement.onerror = null;
    imageElement.src = fallbackSrc;
  };
  imageElement.src = primarySrc || fallbackSrc;
}

function renderAmicalSelected(refs) {
  const activity = getSelectedActivity();
  if (!activity) return;
  const viewActivity = getLocalizedActivity(activity);

  setCardImage(
    refs.amicalSelectedImage,
    activity.imageUrl,
    resolveActivityVisual('amical', activity),
    `Lieu activité amicale ${viewActivity.title}`,
  );
  refs.amicalSelectedTitle.textContent = viewActivity.title;
  refs.amicalSelectedDesc.textContent = viewActivity.description;
  refs.amicalSelectedMeta.textContent =
    `${activity.placeName} · ${prettyDate(activity.date)} · ${activity.approvedParticipants.length}/${activity.max}`;
  refs.amicalSelectedTags.innerHTML = viewActivity.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('');
  refs.amicalSelectedStatus.textContent = activity.vip
    ? t('amical.status.vip')
    : activity.requiresApproval
      ? t('amical.status.manual')
      : t('amical.status.direct');
  refs.amicalSelectedStatus.className = activity.vip ? 'badge badge-featured' : 'badge badge-amical';
  renderParticipantChips(refs.amicalParticipants, activity.approvedParticipants, 'amical', refs);

  renderPendingPanel({
    container: refs.amicalPendingSection,
    list: refs.amicalPendingRequests,
    item: activity,
    scope: 'amical',
    refs,
  });

  const isCreator = isCurrentUserCreator(activity);
  const isJoined = state.joinedActivities.includes(activity.id) || isCreator;
  const isPending = state.pendingActivityRequests.includes(activity.id);

  refs.amicalJoinBtn.disabled = false;
  if (isCreator) {
    refs.amicalJoinBtn.textContent = t('amical.join.organizer');
  } else if (isJoined) {
    refs.amicalJoinBtn.textContent = t('amical.join.openChat');
  } else if (isPending) {
    refs.amicalJoinBtn.textContent = t('amical.join.pending');
  } else {
    refs.amicalJoinBtn.textContent = activity.requiresApproval ? t('amical.join.request') : t('amical.join.direct');
  }
}

function renderAmicalCreatedList(refs) {
  const mine = state.activities.filter(isCurrentUserCreator);
  if (!mine.length) {
    refs.amicalCreatedList.innerHTML = `<p class="meta">${escapeHtml(t('amical.emptyCreated'))}</p>`;
    return;
  }

  refs.amicalCreatedList.innerHTML = mine
    .map((activity) => {
      const viewActivity = getLocalizedActivity(activity);
      const requests = activity.pendingRequests.length
        ? `
            <div class="request-list">
              ${activity.pendingRequests
                .map(
                  (name) => `
                    <div class="request-item">
                      <strong>${escapeHtml(name)}</strong>
                      <div class="request-actions">
                        <button class="btn btn-amical" data-approve-activity="${activity.id}" data-request-name="${escapeHtml(name)}" type="button">${escapeHtml(t('request.accept'))}</button>
                        <button class="btn btn-ghost" data-reject-activity="${activity.id}" data-request-name="${escapeHtml(name)}" type="button">${escapeHtml(t('request.reject'))}</button>
                      </div>
                    </div>
                  `,
                )
                .join('')}
            </div>
          `
        : `<p class="meta">${escapeHtml(t('request.none'))}</p>`;

      return `
        <article class="created-item">
          <div>
            <strong>${escapeHtml(viewActivity.title)}</strong>
            <p class="meta">${prettyDate(activity.date)} · ${escapeHtml(activity.placeName)}</p>
          </div>
          <div class="created-actions">
            <button class="btn btn-soft" data-edit-activity="${activity.id}" type="button">${escapeHtml(t('common.edit'))}</button>
            <button class="btn btn-ghost" data-delete-activity="${activity.id}" type="button">${escapeHtml(t('common.delete'))}</button>
          </div>
          ${activity.requiresApproval ? requests : ''}
        </article>
      `;
    })
    .join('');

  refs.amicalCreatedList.querySelectorAll('[data-edit-activity]').forEach((button) => {
    button.addEventListener('click', () => loadActivityIntoForm(button.dataset.editActivity, refs));
  });

  refs.amicalCreatedList.querySelectorAll('[data-delete-activity]').forEach((button) => {
    button.addEventListener('click', () => deleteActivity(button.dataset.deleteActivity, refs));
  });

  refs.amicalCreatedList.querySelectorAll('[data-approve-activity]').forEach((button) => {
    button.addEventListener('click', () => processActivityRequest(button.dataset.approveActivity, button.dataset.requestName, true, refs));
  });

  refs.amicalCreatedList.querySelectorAll('[data-reject-activity]').forEach((button) => {
    button.addEventListener('click', () => processActivityRequest(button.dataset.rejectActivity, button.dataset.requestName, false, refs));
  });
}

function renderAmicalMessages(refs) {
  const accessible = state.activities.filter((activity) => isCurrentUserCreator(activity) || state.joinedActivities.includes(activity.id));
  if (!accessible.length) {
    refs.amicalConversationList.innerHTML = `<p class="meta">${escapeHtml(t('amical.emptyConversations'))}</p>`;
    refs.amicalChatTitle.textContent = t('amical.chat.emptyTitle');
    refs.amicalChatSubtitle.textContent = t('amical.chat.emptySubtitle');
    refs.amicalChatMessages.innerHTML = `<p class="meta">${escapeHtml(t('amical.chat.emptyBody'))}</p>`;
    refs.amicalTyping.classList.add('hidden');
    return;
  }

  if (!accessible.some((item) => item.id === state.ui.selectedActivityId)) {
    state.ui.selectedActivityId = accessible[0].id;
  }

  refs.amicalConversationList.innerHTML = accessible
    .map((activity) => {
      const viewActivity = getLocalizedActivity(activity);
      const active = state.ui.selectedActivityId === activity.id ? ' active' : '';
      return `
        <button class="conversation-item${active}" data-amical-chat="${activity.id}" type="button">
          <img src="${activity.imageUrl}" alt="${escapeHtml(viewActivity.title)}" />
          <div>
            <strong>${escapeHtml(viewActivity.title)}</strong>
            <p class="meta">${escapeHtml(activity.placeName)}</p>
          </div>
        </button>
      `;
    })
    .join('');

  refs.amicalConversationList.querySelectorAll('[data-amical-chat]').forEach((button) => {
    button.addEventListener('click', () => {
      state.ui.selectedActivityId = button.dataset.amicalChat;
      saveState();
      renderAmicalMessages(refs);
    });
  });

  const activity = getSelectedActivity();
  const viewActivity = getLocalizedActivity(activity);
  refs.amicalChatTitle.textContent = viewActivity.title;
  refs.amicalChatSubtitle.textContent = t('amical.chat.subtitle', {
    place: activity.placeName,
    count: activity.approvedParticipants.length,
  });
  ensureChatSeed('amical', activity.id, t('chat.seed.amical', { title: viewActivity.title }));
  renderChatList(refs.amicalChatMessages, state.chats.amical[activity.id] || []);
}

function renderSport(refs) {
  renderSportMap(refs);
  renderSportSelected(refs);
  renderSportCreatedList(refs);
  renderSportMessages(refs);
}

function renderSportMap(refs) {
  refs.sportMapJumps.innerHTML = state.sportActivities
    .map((activity) => `<button class="map-jump" data-sport-jump="${activity.id}" type="button">${escapeHtml(activity.placeName)}</button>`)
    .join('');

  refs.sportMapJumps.querySelectorAll('[data-sport-jump]').forEach((button) => {
    button.addEventListener('click', () => {
      state.ui.selectedSportActivityId = button.dataset.sportJump;
      saveState();
      renderSport(refs);
      focusMapOn(appContext.sportMap, state.sportActivities, state.ui.selectedSportActivityId);
    });
  });

  if (!window.L || !appContext.sportMap) return;
  appContext.sportMarkers.forEach((marker) => marker.remove());
  appContext.sportMarkers = [];

  state.sportActivities.forEach((activity) => {
    const viewActivity = getLocalizedSportActivity(activity);
    const marker = L.marker([activity.lat, activity.lng], {
      icon: makeMarkerIcon({
        theme: 'sport',
        vip: activity.vip,
      }),
    }).addTo(appContext.sportMap);
    marker.bindPopup(
      `<div><strong>${escapeHtml(viewActivity.title)}</strong><br>${escapeHtml(activity.placeName)}</div>`,
    );
    marker.on('click', () => {
      state.ui.selectedSportActivityId = activity.id;
      saveState();
      renderSport(refs);
    });
    appContext.sportMarkers.push(marker);
  });

  focusMapOn(appContext.sportMap, state.sportActivities, state.ui.selectedSportActivityId);
}

function renderSportSelected(refs) {
  const activity = getSelectedSportActivity();
  if (!activity) return;
  const viewActivity = getLocalizedSportActivity(activity);

  setCardImage(
    refs.sportSelectedImage,
    activity.imageUrl,
    resolveActivityVisual('sport', activity),
    `Lieu activité sportive ${viewActivity.title}`,
  );
  refs.sportSelectedTitle.textContent = viewActivity.title;
  refs.sportSelectedDesc.textContent = viewActivity.description;
  refs.sportSelectedMeta.textContent =
    `${activity.placeName} · ${prettyDate(activity.date)} · ${activity.approvedParticipants.length}/${activity.max}`;
  refs.sportSelectedTags.innerHTML = viewActivity.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('');
  refs.sportSelectedStatus.textContent = activity.vip
    ? t('sport.status.vip')
    : activity.requiresApproval
      ? t('sport.status.manual')
      : t('sport.status.direct');
  refs.sportSelectedStatus.className = activity.vip ? 'badge badge-featured' : 'badge badge-sport';
  renderParticipantChips(refs.sportParticipants, activity.approvedParticipants, 'sport', refs);

  renderPendingPanel({
    container: refs.sportPendingSection,
    list: refs.sportPendingRequests,
    item: activity,
    scope: 'sport',
    refs,
  });

  const isCreator = isCurrentUserCreator(activity);
  const isJoined = state.joinedSportActivities.includes(activity.id) || isCreator;
  const isPending = state.pendingSportActivityRequests.includes(activity.id);

  refs.sportJoinBtn.disabled = false;
  if (isCreator) {
    refs.sportJoinBtn.textContent = t('sport.join.organizer');
  } else if (isJoined) {
    refs.sportJoinBtn.textContent = t('sport.join.openChat');
  } else if (isPending) {
    refs.sportJoinBtn.textContent = t('sport.join.pending');
  } else {
    refs.sportJoinBtn.textContent = activity.requiresApproval ? t('sport.join.request') : t('sport.join.direct');
  }
}

function renderSportCreatedList(refs) {
  const mine = state.sportActivities.filter(isCurrentUserCreator);
  if (!mine.length) {
    refs.sportCreatedList.innerHTML = `<p class="meta">${escapeHtml(t('sport.emptyCreated'))}</p>`;
    return;
  }

  refs.sportCreatedList.innerHTML = mine
    .map((activity) => {
      const viewActivity = getLocalizedSportActivity(activity);
      const requests = activity.pendingRequests.length
        ? `
            <div class="request-list">
              ${activity.pendingRequests
                .map(
                  (name) => `
                    <div class="request-item">
                      <strong>${escapeHtml(name)}</strong>
                      <div class="request-actions">
                        <button class="btn btn-green" data-approve-sport="${activity.id}" data-request-name="${escapeHtml(name)}" type="button">${escapeHtml(t('request.accept'))}</button>
                        <button class="btn btn-ghost" data-reject-sport="${activity.id}" data-request-name="${escapeHtml(name)}" type="button">${escapeHtml(t('request.reject'))}</button>
                      </div>
                    </div>
                  `,
                )
                .join('')}
            </div>
          `
        : `<p class="meta">${escapeHtml(t('request.none'))}</p>`;

      return `
        <article class="created-item">
          <div>
            <strong>${escapeHtml(viewActivity.title)}</strong>
            <p class="meta">${prettyDate(activity.date)} · ${escapeHtml(activity.placeName)}</p>
          </div>
          <div class="created-actions">
            <button class="btn btn-soft" data-edit-sport="${activity.id}" type="button">${escapeHtml(t('common.edit'))}</button>
            <button class="btn btn-ghost" data-delete-sport="${activity.id}" type="button">${escapeHtml(t('common.delete'))}</button>
          </div>
          ${activity.requiresApproval ? requests : ''}
        </article>
      `;
    })
    .join('');

  refs.sportCreatedList.querySelectorAll('[data-edit-sport]').forEach((button) => {
    button.addEventListener('click', () => loadSportActivityIntoForm(button.dataset.editSport, refs));
  });

  refs.sportCreatedList.querySelectorAll('[data-delete-sport]').forEach((button) => {
    button.addEventListener('click', () => deleteSportActivity(button.dataset.deleteSport, refs));
  });

  refs.sportCreatedList.querySelectorAll('[data-approve-sport]').forEach((button) => {
    button.addEventListener('click', () => processSportRequest(button.dataset.approveSport, button.dataset.requestName, true, refs));
  });

  refs.sportCreatedList.querySelectorAll('[data-reject-sport]').forEach((button) => {
    button.addEventListener('click', () => processSportRequest(button.dataset.rejectSport, button.dataset.requestName, false, refs));
  });
}

function renderSportMessages(refs) {
  const accessible = state.sportActivities.filter(
    (activity) => isCurrentUserCreator(activity) || state.joinedSportActivities.includes(activity.id),
  );
  if (!accessible.length) {
    refs.sportConversationList.innerHTML = `<p class="meta">${escapeHtml(t('sport.emptyConversations'))}</p>`;
    refs.sportChatTitle.textContent = t('sport.chat.emptyTitle');
    refs.sportChatSubtitle.textContent = t('sport.chat.emptySubtitle');
    refs.sportChatMessages.innerHTML = `<p class="meta">${escapeHtml(t('sport.chat.emptyBody'))}</p>`;
    refs.sportTyping.classList.add('hidden');
    return;
  }

  if (!accessible.some((item) => item.id === state.ui.selectedSportActivityId)) {
    state.ui.selectedSportActivityId = accessible[0].id;
  }

  refs.sportConversationList.innerHTML = accessible
    .map((activity) => {
      const viewActivity = getLocalizedSportActivity(activity);
      const active = state.ui.selectedSportActivityId === activity.id ? ' active' : '';
      return `
        <button class="conversation-item${active}" data-sport-chat="${activity.id}" type="button">
          <img src="${resolveActivityVisual('sport', activity)}" alt="${escapeHtml(viewActivity.title)}" />
          <div>
            <strong>${escapeHtml(viewActivity.title)}</strong>
            <p class="meta">${escapeHtml(activity.placeName)}</p>
          </div>
        </button>
      `;
    })
    .join('');

  refs.sportConversationList.querySelectorAll('[data-sport-chat]').forEach((button) => {
    button.addEventListener('click', () => {
      state.ui.selectedSportActivityId = button.dataset.sportChat;
      saveState();
      renderSportMessages(refs);
    });
  });

  const activity = getSelectedSportActivity();
  const viewActivity = getLocalizedSportActivity(activity);
  refs.sportChatTitle.textContent = viewActivity.title;
  refs.sportChatSubtitle.textContent = t('sport.chat.subtitle', {
    place: activity.placeName,
    count: activity.approvedParticipants.length,
  });
  ensureChatSeed('sport', activity.id, t('chat.seed.sport', { title: viewActivity.title }));
  renderChatList(refs.sportChatMessages, state.chats.sport[activity.id] || []);
}

function renderPro(refs) {
  renderProMap(refs);
  renderProSelected(refs);
  renderProCreatedList(refs);
  renderFeed(refs);
  renderProMessages(refs);
}

function renderProMap(refs) {
  refs.proMapJumps.innerHTML = state.events
    .map((event) => `<button class="map-jump" data-event-jump="${event.id}" type="button">${escapeHtml(event.placeName)}</button>`)
    .join('');

  refs.proMapJumps.querySelectorAll('[data-event-jump]').forEach((button) => {
    button.addEventListener('click', () => {
      state.ui.selectedEventId = button.dataset.eventJump;
      saveState();
      renderPro(refs);
      focusMapOn(appContext.proMap, state.events, state.ui.selectedEventId);
    });
  });

  if (!window.L || !appContext.proMap) return;
  appContext.proMarkers.forEach((marker) => marker.remove());
  appContext.proMarkers = [];

  state.events.forEach((event) => {
    const viewEvent = getLocalizedEvent(event);
    const marker = L.marker([event.lat, event.lng], {
      icon: makeMarkerIcon({
        theme: 'pro',
        kind: event.kind,
      }),
    }).addTo(appContext.proMap);
    marker.bindPopup(
      `<div><strong>${escapeHtml(viewEvent.title)}</strong><br><span>${escapeHtml(getKindLabel(event.kind))}</span></div>`,
    );
    marker.on('click', () => {
      state.ui.selectedEventId = event.id;
      saveState();
      renderPro(refs);
    });
    appContext.proMarkers.push(marker);
  });

  focusMapOn(appContext.proMap, state.events, state.ui.selectedEventId);
}

function renderProSelected(refs) {
  const event = getSelectedEvent();
  if (!event) return;
  const viewEvent = getLocalizedEvent(event);

  setCardImage(
    refs.proSelectedImage,
    event.imageUrl,
    resolveActivityVisual('pro', event),
    `Lieu evenement pro ${viewEvent.title}`,
  );
  refs.proSelectedTitle.textContent = viewEvent.title;
  refs.proSelectedDesc.textContent = viewEvent.description;
  refs.proSelectedMeta.textContent =
    `${event.placeName} · ${prettyDate(event.date)} · ${event.approvedParticipants.length}/${event.max}`;
  refs.proSelectedKind.textContent = getKindLabel(event.kind);
  refs.proSelectedTags.innerHTML = viewEvent.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('');
  renderParticipantChips(refs.proParticipants, event.approvedParticipants, 'pro', refs);

  renderPendingPanel({
    container: refs.proPendingSection,
    list: refs.proPendingRequests,
    item: event,
    scope: 'pro',
    refs,
  });

  const isCreator = isCurrentUserCreator(event);
  const isJoined = state.joinedEvents.includes(event.id) || isCreator;
  const isPending = state.pendingEventRequests.includes(event.id);

  refs.proJoinBtn.disabled = false;
  if (isCreator) {
    refs.proJoinBtn.textContent = t('pro.join.organizer');
  } else if (isJoined) {
    refs.proJoinBtn.textContent = t('pro.join.openChat');
  } else if (isPending) {
    refs.proJoinBtn.textContent = t('pro.join.pending');
  } else {
    refs.proJoinBtn.textContent = event.requiresApproval ? t('pro.join.request') : t('pro.join.direct');
  }
}

function renderProCreatedList(refs) {
  const mine = state.events.filter(isCurrentUserCreator);
  if (!mine.length) {
    refs.proCreatedList.innerHTML = `<p class="meta">${escapeHtml(t('pro.emptyCreated'))}</p>`;
    return;
  }

  refs.proCreatedList.innerHTML = mine
    .map((event) => {
      const viewEvent = getLocalizedEvent(event);
      const requests = event.pendingRequests.length
        ? `
            <div class="request-list">
              ${event.pendingRequests
                .map(
                  (name) => `
                    <div class="request-item">
                      <strong>${escapeHtml(name)}</strong>
                      <div class="request-actions">
                        <button class="btn btn-blue" data-approve-event="${event.id}" data-request-name="${escapeHtml(name)}" type="button">${escapeHtml(t('request.accept'))}</button>
                        <button class="btn btn-ghost" data-reject-event="${event.id}" data-request-name="${escapeHtml(name)}" type="button">${escapeHtml(t('request.reject'))}</button>
                      </div>
                    </div>
                  `,
                )
                .join('')}
            </div>
          `
        : `<p class="meta">${escapeHtml(t('request.none'))}</p>`;

      return `
        <article class="created-item">
          <div>
            <strong>${escapeHtml(viewEvent.title)}</strong>
            <p class="meta">${escapeHtml(getKindLabel(event.kind))} · ${prettyDate(event.date)} · ${escapeHtml(event.placeName)}</p>
          </div>
          <div class="created-actions">
            <button class="btn btn-soft" data-edit-event="${event.id}" type="button">${escapeHtml(t('common.edit'))}</button>
            <button class="btn btn-ghost" data-delete-event="${event.id}" type="button">${escapeHtml(t('common.delete'))}</button>
          </div>
          ${event.requiresApproval ? requests : ''}
        </article>
      `;
    })
    .join('');

  refs.proCreatedList.querySelectorAll('[data-edit-event]').forEach((button) => {
    button.addEventListener('click', () => loadEventIntoForm(button.dataset.editEvent, refs));
  });

  refs.proCreatedList.querySelectorAll('[data-delete-event]').forEach((button) => {
    button.addEventListener('click', () => deleteEvent(button.dataset.deleteEvent, refs));
  });

  refs.proCreatedList.querySelectorAll('[data-approve-event]').forEach((button) => {
    button.addEventListener('click', () => processEventRequest(button.dataset.approveEvent, button.dataset.requestName, true, refs));
  });

  refs.proCreatedList.querySelectorAll('[data-reject-event]').forEach((button) => {
    button.addEventListener('click', () => processEventRequest(button.dataset.rejectEvent, button.dataset.requestName, false, refs));
  });
}

function renderFeed(refs) {
  document.querySelectorAll('[data-feed-filter]').forEach((button) => {
    button.classList.toggle('active', button.dataset.feedFilter === state.feedFilter);
  });

  const posts = state.posts.filter((post) => state.feedFilter === 'ALL' || post.type === state.feedFilter);
  if (!posts.length) {
    refs.proFeed.innerHTML = `<p class="meta">${escapeHtml(t('pro.emptyFeed'))}</p>`;
    return;
  }

  refs.proFeed.innerHTML = posts
    .map((post) => {
      const featured = plans[post.authorPlan]?.featured ? ' featured' : '';
      const badge = plans[post.authorPlan]?.featured ? `<span class="badge badge-featured">${escapeHtml(t('plan.platinum'))}</span>` : '';
      const authorProfile = getCommunityProfile(post.author);
      const authorPublic = authorProfile.visibility !== 'private';
      const authorAvatar =
        authorPublic && authorProfile.photoUrl
          ? `<img src="${authorProfile.photoUrl}" alt="${escapeHtml(post.author)}" style="${photoInlineStyle(authorProfile, true)}" />`
          : `<span>${escapeHtml(getInitials(post.author))}</span>`;
      const body =
        post.type === 'QUOTE'
          ? `<blockquote>“${escapeHtml(post.content)}” ${post.quoteAuthor ? `<span class="meta">— ${escapeHtml(post.quoteAuthor)}</span>` : ''}</blockquote>`
          : `<p>${escapeHtml(post.content)}</p>`;

      return `
        <article class="feed-item${featured}">
          <div class="section-head">
            <button
              class="member-trigger ${authorPublic ? 'public' : 'private'}"
              data-open-member-profile="${encodeURIComponent(post.author)}"
              data-member-scope="pro"
              type="button"
              aria-label="${escapeHtml(t('member.aria', { name: post.author }))}"
            >
              <span class="member-trigger-avatar ${authorPublic && authorProfile.photoUrl ? 'photo' : ''}">${authorAvatar}</span>
              <span class="member-trigger-copy">
                <strong>${escapeHtml(post.author)}</strong>
                <small>${authorPublic ? escapeHtml(t('member.view')) : escapeHtml(t('member.private'))} · ${escapeHtml(post.type)} · ${escapeHtml(relativeDate(post.createdAt))}</small>
              </span>
            </button>
            ${badge}
          </div>
          ${body}
          <div class="feed-actions">
            <button class="btn btn-soft" data-like-post="${post.id}" type="button">${escapeHtml(t('feed.like', { count: post.likes }))}</button>
          </div>
          <div class="comment-list">
            ${post.comments.length ? post.comments.map((comment) => `<div class="comment-item">${escapeHtml(comment)}</div>`).join('') : `<p class="meta">${escapeHtml(t('feed.emptyComments'))}</p>`}
          </div>
          <form class="inline-form" data-comment-form="${post.id}">
            <input type="text" name="comment" placeholder="${escapeHtml(t('feed.comment.placeholder'))}" />
            <button class="btn btn-soft" type="submit">${escapeHtml(t('feed.comment.send'))}</button>
          </form>
        </article>
      `;
    })
    .join('');

  refs.proFeed.querySelectorAll('[data-like-post]').forEach((button) => {
    button.addEventListener('click', () => {
      const post = state.posts.find((item) => item.id === button.dataset.likePost);
      if (!post) return;
      post.likes += 1;
      saveState();
      renderFeed(refs);
    });
  });

  refs.proFeed.querySelectorAll('[data-comment-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const post = state.posts.find((item) => item.id === form.dataset.commentForm);
      const input = form.querySelector('input[name="comment"]');
      const value = input?.value.trim();
      if (!post || !value) return;
      post.comments.push(value);
      saveState();
      renderFeed(refs);
      toast(t('feed.comment.added'));
    });
  });

  bindMemberProfileTriggers(refs.proFeed, refs, 'pro');
}

function renderProMessages(refs) {
  const accessible = state.events.filter((event) => isCurrentUserCreator(event) || state.joinedEvents.includes(event.id));
  if (!accessible.length) {
    refs.proConversationList.innerHTML = `<p class="meta">${escapeHtml(t('pro.emptyConversations'))}</p>`;
    refs.proChatTitle.textContent = t('pro.chat.emptyTitle');
    refs.proChatSubtitle.textContent = t('pro.chat.emptySubtitle');
    refs.proChatMessages.innerHTML = `<p class="meta">${escapeHtml(t('pro.chat.emptyBody'))}</p>`;
    refs.proTyping.classList.add('hidden');
    return;
  }

  if (!accessible.some((item) => item.id === state.ui.selectedEventId)) {
    state.ui.selectedEventId = accessible[0].id;
  }

  refs.proConversationList.innerHTML = accessible
    .map((event) => {
      const viewEvent = getLocalizedEvent(event);
      const active = state.ui.selectedEventId === event.id ? ' active' : '';
      const kindBadge = `<span class="badge badge-pro">${escapeHtml(getKindLabel(event.kind))}</span>`;
      return `
        <button class="conversation-item${active}" data-pro-chat="${event.id}" type="button">
          <img src="${event.imageUrl}" alt="${escapeHtml(viewEvent.title)}" />
          <div>
            <strong>${escapeHtml(viewEvent.title)}</strong>
            <p class="meta">${escapeHtml(event.placeName)}</p>
          </div>
          ${kindBadge}
        </button>
      `;
    })
    .join('');

  refs.proConversationList.querySelectorAll('[data-pro-chat]').forEach((button) => {
    button.addEventListener('click', () => {
      state.ui.selectedEventId = button.dataset.proChat;
      saveState();
      renderProMessages(refs);
    });
  });

  const event = getSelectedEvent();
  const viewEvent = getLocalizedEvent(event);
  refs.proChatTitle.textContent = viewEvent.title;
  refs.proChatSubtitle.textContent = t('pro.chat.subtitle', {
    kind: getKindLabel(event.kind),
    place: event.placeName,
  });
  ensureChatSeed(
    'pro',
    event.id,
    t('chat.seed.pro', { title: viewEvent.title }),
  );
  renderChatList(refs.proChatMessages, state.chats.pro[event.id] || []);
}

function submitChat(scope, contextId, value, refs) {
  const text = (value || '').trim();
  if (!text) return;

  if (scope === 'dating' && !state.ui.selectedMatchId) return;
  if (scope === 'amical' && !state.joinedActivities.includes(contextId) && !isCurrentUserCreator(getSelectedActivity())) return;
  if (scope === 'sport' && !state.joinedSportActivities.includes(contextId) && !isCurrentUserCreator(getSelectedSportActivity())) return;
  if (scope === 'pro' && !state.joinedEvents.includes(contextId) && !isCurrentUserCreator(getSelectedEvent())) return;

  pushChat(scope, contextId, { from: 'me', text });
  renderScopeChat(scope, refs);
  setTypingIndicator(scope, true, refs);

  clearTimeout(typingTimers[scope]);
  typingTimers[scope] = setTimeout(() => {
    pushChat(scope, contextId, { from: 'them', text: botReply(scope, text, contextId) });
    setTypingIndicator(scope, false, refs);
    renderScopeChat(scope, refs);
  }, 420 + Math.floor(Math.random() * 360));
}

function renderScopeChat(scope, refs) {
  if (scope === 'dating') {
    renderDatingMessages(refs);
    return;
  }
  if (scope === 'amical') {
    renderAmicalMessages(refs);
    return;
  }
  if (scope === 'sport') {
    renderSportMessages(refs);
    return;
  }
  renderProMessages(refs);
}

function getDatingSeedMessage(name) {
  if (currentLanguage() === 'en') {
    return `Hey, it’s ${name}. If you want, we can talk about a good spot around the Vieux-Port.`;
  }
  if (currentLanguage() === 'es') {
    return `Hola, soy ${name}. Si quieres, podemos hablar de un buen sitio por el Vieux-Port.`;
  }
  if (currentLanguage() === 'it') {
    return `Ciao, sono ${name}. Se vuoi, possiamo parlare di un posto carino verso il Vieux-Port.`;
  }
  return `Salut, c’est ${name}. Si tu veux, on peut parler d’un spot cool vers le Vieux-Port.`;
}

function handleSwipe(direction, refs) {
  if (!canAccessSpace('dating', true, refs)) return;
  normalizeCounters();
  if (!consumeSwipeQuota()) {
    showUpsell(t('upsell.swipeLimit'), refs);
    toast(t('toast.swipeLimit'));
    return;
  }

  const current = getOrderedProfiles()[state.ui.datingCursor % getOrderedProfiles().length];
  playSwipeFlash(direction, refs.swipeFlash);

  if (direction === 'LIKE') {
    if (current.likedYou && !state.matches.some((match) => match.profileId === current.id)) {
      const matchId = `m-${current.id}`;
      state.matches.unshift({
        id: matchId,
        profileId: current.id,
        name: current.name,
        age: current.age,
        photos: current.photos,
        photoPosition: current.photoPosition,
        photoScale: current.photoScale,
        plan: current.plan,
        distance: current.distance,
        lastAt: new Date().toISOString(),
      });
      state.ui.selectedMatchId = matchId;
      ensureChatSeed('dating', matchId, getDatingSeedMessage(current.name));
      toast(t('toast.match', { name: current.name }));
    } else {
      toast(t('toast.likeSent', { name: current.name }));
    }
  }

  state.ui.datingCursor += 1;
  state.ui.datingPhotoIndex = 0;
  saveState();
  renderApp(refs);
}

function cycleDatingPhoto(step, refs) {
  const profile = getOrderedProfiles()[state.ui.datingCursor % getOrderedProfiles().length];
  const total = profile.photos.length;
  if (total <= 1) return;
  state.ui.datingPhotoIndex = (state.ui.datingPhotoIndex + step + total) % total;
  saveState();
  renderDating(refs);
}

function joinActivity(activityId, refs) {
  const activity = state.activities.find((item) => item.id === activityId);
  if (!activity) return;
  if (!canAccessSpace('amical', true, refs)) return;

  if (isCurrentUserCreator(activity)) {
    setSpaceView('amical', 'messages');
    renderApp(refs);
    return;
  }

  if (activity.vip && state.plan !== 'PLATINUM') {
    showUpsell(t('upsell.vipActivity'), refs);
    toast(t('toast.platinumRequired'));
    return;
  }

  if (state.joinedActivities.includes(activity.id)) {
    setSpaceView('amical', 'messages');
    renderApp(refs);
    return;
  }

  if (state.pendingActivityRequests.includes(activity.id)) {
    toast(t('toast.requestAlreadyPending'));
    return;
  }

  if (activity.requiresApproval) {
    state.pendingActivityRequests.push(activity.id);
    if (!activity.pendingRequests.includes(currentActorName())) {
      activity.pendingRequests.push(currentActorName());
    }
    saveState();
    renderApp(refs);
    toast(t('toast.requestSent'));
    return;
  }

  if (!consumeActivityQuota()) {
    showUpsell(t('upsell.activityLimit'), refs);
    toast(t('toast.activityLimit'));
    return;
  }

  if (activity.approvedParticipants.length >= activity.max) {
    toast(t('toast.activityFull'));
    return;
  }

  state.joinedActivities.push(activity.id);
  syncApprovedParticipant(activity, currentActorName());
  ensureChatSeed('amical', activity.id, t('chat.seed.amical', { title: getLocalizedActivity(activity).title }));
  saveState();
  renderApp(refs);
  toast(t('toast.joinConfirmed'));
}

function joinSportActivity(activityId, refs) {
  const activity = state.sportActivities.find((item) => item.id === activityId);
  if (!activity) return;
  if (!canAccessSpace('sport', true, refs)) return;

  if (isCurrentUserCreator(activity)) {
    setSpaceView('sport', 'messages');
    renderApp(refs);
    return;
  }

  if (activity.vip && state.plan !== 'PLATINUM') {
    showUpsell(t('upsell.vipSport'), refs);
    toast(t('toast.platinumRequired'));
    return;
  }

  if (state.joinedSportActivities.includes(activity.id)) {
    setSpaceView('sport', 'messages');
    renderApp(refs);
    return;
  }

  if (state.pendingSportActivityRequests.includes(activity.id)) {
    toast(t('toast.requestAlreadyPending'));
    return;
  }

  if (activity.requiresApproval) {
    state.pendingSportActivityRequests.push(activity.id);
    if (!activity.pendingRequests.includes(currentActorName())) {
      activity.pendingRequests.push(currentActorName());
    }
    saveState();
    renderApp(refs);
    toast(t('toast.requestSent'));
    return;
  }

  if (!consumeActivityQuota()) {
    showUpsell(t('upsell.activityLimit'), refs);
    toast(t('toast.activityLimit'));
    return;
  }

  if (activity.approvedParticipants.length >= activity.max) {
    toast(t('toast.sportFull'));
    return;
  }

  state.joinedSportActivities.push(activity.id);
  syncApprovedParticipant(activity, currentActorName());
  ensureChatSeed('sport', activity.id, t('chat.seed.sport', { title: getLocalizedSportActivity(activity).title }));
  saveState();
  renderApp(refs);
  toast(t('toast.joinConfirmed'));
}

function joinEvent(eventId, refs) {
  const event = state.events.find((item) => item.id === eventId);
  if (!event) return;
  if (!canAccessSpace('pro', true, refs)) return;

  if (isCurrentUserCreator(event)) {
    setSpaceView('pro', 'messages');
    renderApp(refs);
    return;
  }

  if (event.vip && state.plan !== 'PLATINUM') {
    showUpsell(t('upsell.vipEvent'), refs);
    toast(t('toast.platinumRequired'));
    return;
  }

  if (state.joinedEvents.includes(event.id)) {
    setSpaceView('pro', 'messages');
    renderApp(refs);
    return;
  }

  if (state.pendingEventRequests.includes(event.id)) {
    toast(t('toast.requestAlreadyPending'));
    return;
  }

  if (event.requiresApproval) {
    state.pendingEventRequests.push(event.id);
    if (!event.pendingRequests.includes(currentActorName())) {
      event.pendingRequests.push(currentActorName());
    }
    saveState();
    renderApp(refs);
    toast(t('toast.requestSent'));
    return;
  }

  if (!consumeActivityQuota()) {
    showUpsell(t('upsell.activityLimit'), refs);
    toast(t('toast.activityLimit'));
    return;
  }

  if (event.approvedParticipants.length >= event.max) {
    toast(t('toast.eventFull'));
    return;
  }

  state.joinedEvents.push(event.id);
  syncApprovedParticipant(event, currentActorName());
  ensureChatSeed('pro', event.id, t('chat.seed.pro', { title: getLocalizedEvent(event).title }));
  saveState();
  renderApp(refs);
  toast(t('toast.joinConfirmed'));
}

function upsertActivityFromForm(refs) {
  const title = refs.amicalCreateTitle.value.trim();
  const description = refs.amicalCreateDescription.value.trim();
  const placeInput = refs.amicalCreatePlace.value.trim();
  const date = refs.amicalCreateDate.value;
  const tags = refs.amicalCreateTags.value
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);

  if (!title || !description || !date) {
    toast(t('toast.formRequired'));
    return;
  }

  const location = resolveMarseillePlace(placeInput);
  const existing = state.activities.find((item) => item.id === refs.amicalEditId.value);

  if (existing) {
    existing.title = title;
    existing.description = description;
    existing.placeName = location.name;
    existing.lat = location.lat;
    existing.lng = location.lng;
    existing.date = new Date(date).toISOString();
    existing.tags = tags.length ? tags : ['social'];
    existing.vip = refs.amicalCreateVip.checked;
    existing.requiresApproval = refs.amicalCreateApproval.checked;
    toast(t('toast.activityUpdated'));
  } else {
    const activity = {
      id: `a-${Date.now()}`,
      title,
      description,
      placeName: location.name,
      lat: location.lat,
      lng: location.lng,
      imageUrl: placePhotos.marseilleView,
      date: new Date(date).toISOString(),
      tags: tags.length ? tags : ['social'],
      vip: refs.amicalCreateVip.checked,
      requiresApproval: refs.amicalCreateApproval.checked,
      min: 2,
      max: refs.amicalCreateVip.checked ? 8 : 10,
      createdBy: currentActorName(),
      pendingRequests: [],
      approvedParticipants: [currentActorName()],
      participants: [currentActorName()],
    };
    state.activities.unshift(activity);
    if (!state.joinedActivities.includes(activity.id)) {
      state.joinedActivities.push(activity.id);
    }
    ensureChatSeed('amical', activity.id, t('chat.seed.amical', { title: getLocalizedActivity(activity).title }));
    state.ui.selectedActivityId = activity.id;
    toast(t('toast.activityCreated'));
  }

  refs.amicalCreateForm.reset();
  refs.amicalEditId.value = '';
  refs.amicalCreateSubmit.textContent = t('amical.create.submit');
  saveState();
  renderApp(refs);
}

function upsertSportActivityFromForm(refs) {
  const title = refs.sportCreateTitle.value.trim();
  const description = refs.sportCreateDescription.value.trim();
  const placeInput = refs.sportCreatePlace.value.trim();
  const date = refs.sportCreateDate.value;
  const tags = refs.sportCreateTags.value
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);

  if (!title || !description || !date) {
    toast(t('toast.formRequired'));
    return;
  }

  const location = resolveMarseillePlace(placeInput);
  const existing = state.sportActivities.find((item) => item.id === refs.sportEditId.value);

  if (existing) {
    existing.title = title;
    existing.description = description;
    existing.placeName = location.name;
    existing.lat = location.lat;
    existing.lng = location.lng;
    existing.date = new Date(date).toISOString();
    existing.tags = tags.length ? tags : ['sport'];
    existing.imageUrl = resolveActivityVisual('sport', { title, description, tags });
    existing.vip = refs.sportCreateVip.checked;
    existing.requiresApproval = refs.sportCreateApproval.checked;
    toast(t('toast.sportUpdated'));
  } else {
    const activity = {
      id: `s-${Date.now()}`,
      title,
      description,
      placeName: location.name,
      lat: location.lat,
      lng: location.lng,
      imageUrl: resolveActivityVisual('sport', { title, description, tags }),
      date: new Date(date).toISOString(),
      tags: tags.length ? tags : ['sport'],
      vip: refs.sportCreateVip.checked,
      requiresApproval: refs.sportCreateApproval.checked,
      min: 2,
      max: refs.sportCreateVip.checked ? 8 : 10,
      createdBy: currentActorName(),
      pendingRequests: [],
      approvedParticipants: [currentActorName()],
      participants: [currentActorName()],
    };
    state.sportActivities.unshift(activity);
    if (!state.joinedSportActivities.includes(activity.id)) {
      state.joinedSportActivities.push(activity.id);
    }
    ensureChatSeed('sport', activity.id, t('chat.seed.sport', { title: getLocalizedSportActivity(activity).title }));
    state.ui.selectedSportActivityId = activity.id;
    toast(t('toast.sportCreated'));
  }

  refs.sportCreateForm.reset();
  refs.sportEditId.value = '';
  refs.sportCreateSubmit.textContent = t('sport.create.submit');
  saveState();
  renderApp(refs);
}

function upsertEventFromForm(refs) {
  const kind = refs.proCreateKind.value;
  const title = refs.proCreateTitle.value.trim();
  const description = refs.proCreateDescription.value.trim();
  const placeInput = refs.proCreatePlace.value.trim();
  const date = refs.proCreateDate.value;
  const tags = refs.proCreateTags.value
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);

  if (!title || !description || !date) {
    toast(t('toast.formRequired'));
    return;
  }

  const location = resolveMarseillePlace(placeInput);
  const existing = state.events.find((item) => item.id === refs.proEditId.value);

  if (existing) {
    existing.kind = kind;
    existing.title = title;
    existing.description = description;
    existing.placeName = location.name;
    existing.lat = location.lat;
    existing.lng = location.lng;
    existing.date = new Date(date).toISOString();
    existing.tags = tags.length ? tags : ['networking'];
    existing.vip = refs.proCreateVip.checked;
    existing.requiresApproval = refs.proCreateApproval.checked;
    toast(t('toast.eventUpdated'));
  } else {
    const event = {
      id: `e-${Date.now()}`,
      kind,
      title,
      description,
      placeName: location.name,
      lat: location.lat,
      lng: location.lng,
      imageUrl: kind === 'AFTERWORK' ? placePhotos.rooftop : placePhotos.businessMeeting,
      date: new Date(date).toISOString(),
      tags: tags.length ? tags : ['networking'],
      vip: refs.proCreateVip.checked,
      max: kind === 'AFTERWORK' ? 30 : 20,
      requiresApproval: refs.proCreateApproval.checked,
      createdBy: currentActorName(),
      pendingRequests: [],
      approvedParticipants: [currentActorName()],
      participants: [currentActorName()],
    };
    state.events.unshift(event);
    if (!state.joinedEvents.includes(event.id)) {
      state.joinedEvents.push(event.id);
    }
    ensureChatSeed('pro', event.id, t('chat.seed.pro', { title: getLocalizedEvent(event).title }));
    state.ui.selectedEventId = event.id;
    toast(t('toast.eventCreated'));
  }

  refs.proCreateForm.reset();
  refs.proEditId.value = '';
  refs.proCreateSubmit.textContent = t('pro.create.submit');
  saveState();
  renderApp(refs);
}

function loadActivityIntoForm(activityId, refs) {
  const activity = state.activities.find((item) => item.id === activityId);
  if (!activity) return;
  setSpaceView('amical', 'create');
  refs.amicalEditId.value = activity.id;
  refs.amicalCreateTitle.value = activity.title;
  refs.amicalCreateDescription.value = activity.description;
  refs.amicalCreatePlace.value = activity.placeName;
  refs.amicalCreateDate.value = toDatetimeLocal(activity.date);
  refs.amicalCreateTags.value = activity.tags.join(', ');
  refs.amicalCreateVip.checked = activity.vip;
  refs.amicalCreateApproval.checked = activity.requiresApproval;
  refs.amicalCreateSubmit.textContent = t('amical.create.update');
}

function loadSportActivityIntoForm(activityId, refs) {
  const activity = state.sportActivities.find((item) => item.id === activityId);
  if (!activity) return;
  setSpaceView('sport', 'create');
  refs.sportEditId.value = activity.id;
  refs.sportCreateTitle.value = activity.title;
  refs.sportCreateDescription.value = activity.description;
  refs.sportCreatePlace.value = activity.placeName;
  refs.sportCreateDate.value = toDatetimeLocal(activity.date);
  refs.sportCreateTags.value = activity.tags.join(', ');
  refs.sportCreateVip.checked = activity.vip;
  refs.sportCreateApproval.checked = activity.requiresApproval;
  refs.sportCreateSubmit.textContent = t('sport.create.update');
}

function loadEventIntoForm(eventId, refs) {
  const event = state.events.find((item) => item.id === eventId);
  if (!event) return;
  setSpaceView('pro', 'create');
  refs.proEditId.value = event.id;
  refs.proCreateKind.value = event.kind;
  refs.proCreateTitle.value = event.title;
  refs.proCreateDescription.value = event.description;
  refs.proCreatePlace.value = event.placeName;
  refs.proCreateDate.value = toDatetimeLocal(event.date);
  refs.proCreateTags.value = event.tags.join(', ');
  refs.proCreateVip.checked = event.vip;
  refs.proCreateApproval.checked = event.requiresApproval;
  refs.proCreateSubmit.textContent = t('pro.create.update');
}

function deleteActivity(activityId, refs) {
  const activity = state.activities.find((item) => item.id === activityId);
  if (!activity) return;
  if (!window.confirm(t('confirm.delete', { title: activity.title }))) return;
  state.activities = state.activities.filter((item) => item.id !== activityId);
  state.joinedActivities = state.joinedActivities.filter((id) => id !== activityId);
  state.pendingActivityRequests = state.pendingActivityRequests.filter((id) => id !== activityId);
  if (state.ui.selectedActivityId === activityId) {
    state.ui.selectedActivityId = state.activities[0]?.id || null;
  }
  saveState();
  renderApp(refs);
}

function deleteSportActivity(activityId, refs) {
  const activity = state.sportActivities.find((item) => item.id === activityId);
  if (!activity) return;
  if (!window.confirm(t('confirm.delete', { title: activity.title }))) return;
  state.sportActivities = state.sportActivities.filter((item) => item.id !== activityId);
  state.joinedSportActivities = state.joinedSportActivities.filter((id) => id !== activityId);
  state.pendingSportActivityRequests = state.pendingSportActivityRequests.filter((id) => id !== activityId);
  if (state.ui.selectedSportActivityId === activityId) {
    state.ui.selectedSportActivityId = state.sportActivities[0]?.id || null;
  }
  saveState();
  renderApp(refs);
}

function deleteEvent(eventId, refs) {
  const event = state.events.find((item) => item.id === eventId);
  if (!event) return;
  if (!window.confirm(t('confirm.delete', { title: event.title }))) return;
  state.events = state.events.filter((item) => item.id !== eventId);
  state.joinedEvents = state.joinedEvents.filter((id) => id !== eventId);
  state.pendingEventRequests = state.pendingEventRequests.filter((id) => id !== eventId);
  if (state.ui.selectedEventId === eventId) {
    state.ui.selectedEventId = state.events[0]?.id || null;
  }
  saveState();
  renderApp(refs);
}

function processActivityRequest(activityId, name, approved, refs) {
  const activity = state.activities.find((item) => item.id === activityId);
  if (!activity) return;
  activity.pendingRequests = activity.pendingRequests.filter((requestName) => requestName !== name);
  if (approved) {
    if (!activity.approvedParticipants.includes(name) && activity.approvedParticipants.length >= activity.max) {
      saveState();
      renderApp(refs);
      toast(t('toast.activityApprovalFull'));
      return;
    }
    syncApprovedParticipant(activity, name);
    if (normalizeText(name) === normalizeText(currentActorName()) && !state.joinedActivities.includes(activityId)) {
      state.joinedActivities.push(activityId);
      state.pendingActivityRequests = state.pendingActivityRequests.filter((id) => id !== activityId);
    }
  } else if (normalizeText(name) === normalizeText(currentActorName())) {
    state.pendingActivityRequests = state.pendingActivityRequests.filter((id) => id !== activityId);
  }
  saveState();
  renderApp(refs);
  toast(approved ? t('toast.participantAccepted') : t('toast.requestRejected'));
}

function processSportRequest(activityId, name, approved, refs) {
  const activity = state.sportActivities.find((item) => item.id === activityId);
  if (!activity) return;
  activity.pendingRequests = activity.pendingRequests.filter((requestName) => requestName !== name);
  if (approved) {
    if (!activity.approvedParticipants.includes(name) && activity.approvedParticipants.length >= activity.max) {
      saveState();
      renderApp(refs);
      toast(t('toast.sportApprovalFull'));
      return;
    }
    syncApprovedParticipant(activity, name);
    if (normalizeText(name) === normalizeText(currentActorName()) && !state.joinedSportActivities.includes(activityId)) {
      state.joinedSportActivities.push(activityId);
      state.pendingSportActivityRequests = state.pendingSportActivityRequests.filter((id) => id !== activityId);
    }
  } else if (normalizeText(name) === normalizeText(currentActorName())) {
    state.pendingSportActivityRequests = state.pendingSportActivityRequests.filter((id) => id !== activityId);
  }
  saveState();
  renderApp(refs);
  toast(approved ? t('toast.participantAccepted') : t('toast.requestRejected'));
}

function processEventRequest(eventId, name, approved, refs) {
  const event = state.events.find((item) => item.id === eventId);
  if (!event) return;
  event.pendingRequests = event.pendingRequests.filter((requestName) => requestName !== name);
  if (approved) {
    if (!event.approvedParticipants.includes(name) && event.approvedParticipants.length >= event.max) {
      saveState();
      renderApp(refs);
      toast(t('toast.eventApprovalFull'));
      return;
    }
    syncApprovedParticipant(event, name);
    if (normalizeText(name) === normalizeText(currentActorName()) && !state.joinedEvents.includes(eventId)) {
      state.joinedEvents.push(eventId);
      state.pendingEventRequests = state.pendingEventRequests.filter((id) => id !== eventId);
    }
  } else if (normalizeText(name) === normalizeText(currentActorName())) {
    state.pendingEventRequests = state.pendingEventRequests.filter((id) => id !== eventId);
  }
  saveState();
  renderApp(refs);
  toast(approved ? t('toast.participantAccepted') : t('toast.requestRejected'));
}

function renderPendingPanel({ container, list, item, scope, refs }) {
  const visible = isCurrentUserCreator(item) && item.requiresApproval;
  container.classList.toggle('hidden', !visible);
  if (!visible) return;

  if (!item.pendingRequests.length) {
    list.innerHTML = `<p class="meta">${escapeHtml(t('request.none'))}</p>`;
    return;
  }

  list.innerHTML = item.pendingRequests
    .map((name) => {
      const profile = getCommunityProfile(name);
      const publicProfile = profile.visibility !== 'private';
      const avatar =
        publicProfile && profile.photoUrl
          ? `<img src="${profile.photoUrl}" alt="${escapeHtml(name)}" style="${photoInlineStyle(profile, true)}" />`
          : `<span>${escapeHtml(getInitials(name))}</span>`;

      return `
        <div class="request-item">
          <button
            class="member-trigger compact ${publicProfile ? 'public' : 'private'}"
            data-open-member-profile="${encodeURIComponent(name)}"
            data-member-scope="${scope}"
            type="button"
            aria-label="${escapeHtml(t('member.aria', { name }))}"
          >
            <span class="member-trigger-avatar ${publicProfile && profile.photoUrl ? 'photo' : ''}">${avatar}</span>
            <span class="member-trigger-copy">
              <strong>${escapeHtml(name)}</strong>
              <small>${publicProfile ? escapeHtml(t('member.view')) : escapeHtml(t('member.private'))}</small>
            </span>
          </button>
          <div class="request-actions">
            <button class="btn ${scope === 'amical' ? 'btn-amical' : scope === 'sport' ? 'btn-green' : 'btn-blue'}" data-inline-approve="${scope}:${item.id}:${escapeHtml(name)}" type="button">${escapeHtml(t('request.accept'))}</button>
            <button class="btn btn-ghost" data-inline-reject="${scope}:${item.id}:${escapeHtml(name)}" type="button">${escapeHtml(t('request.reject'))}</button>
          </div>
        </div>
      `;
    })
    .join('');

  list.querySelectorAll('[data-inline-approve]').forEach((button) => {
    button.addEventListener('click', () => {
      const [nextScope, id, name] = button.dataset.inlineApprove.split(':');
      if (nextScope === 'amical') {
        processActivityRequest(id, name, true, refs);
      } else if (nextScope === 'sport') {
        processSportRequest(id, name, true, refs);
      } else {
        processEventRequest(id, name, true, refs);
      }
    });
  });

  list.querySelectorAll('[data-inline-reject]').forEach((button) => {
    button.addEventListener('click', () => {
      const [nextScope, id, name] = button.dataset.inlineReject.split(':');
      if (nextScope === 'amical') {
        processActivityRequest(id, name, false, refs);
      } else if (nextScope === 'sport') {
        processSportRequest(id, name, false, refs);
      } else {
        processEventRequest(id, name, false, refs);
      }
    });
  });

  bindMemberProfileTriggers(list, refs, scope);
}

function renderChatList(container, messages) {
  if (!messages.length) {
    container.innerHTML = `<p class="meta">${escapeHtml(t('chat.empty'))}</p>`;
    return;
  }

  container.innerHTML = messages
    .map((message) => `<div class="chat-msg ${message.from === 'me' ? 'me' : 'them'}">${escapeHtml(message.text)}</div>`)
    .join('');
  container.scrollTop = container.scrollHeight;
}

function setTypingIndicator(scope, active, refs) {
  const map = {
    dating: refs.datingTyping,
    amical: refs.amicalTyping,
    sport: refs.sportTyping,
    pro: refs.proTyping,
  };
  const node = map[scope];
  node?.classList.toggle('hidden', !active);
}

function ensureChatSeed(scope, contextId, text) {
  if (!state.chats[scope][contextId]) {
    state.chats[scope][contextId] = [{ from: 'them', text, at: new Date().toISOString() }];
  }
}

function pushChat(scope, contextId, message) {
  if (!state.chats[scope][contextId]) {
    state.chats[scope][contextId] = [];
  }
  state.chats[scope][contextId].push({
    ...message,
    at: new Date().toISOString(),
  });
  saveState();
}

function botReply(scope, userText, contextId) {
  const text = normalizeText(userText);
  const lang = currentLanguage();
  const plan = plans[state.plan];
  const copy = {
    fr: {
      greeting: [
        'Salut. Demande-moi le lieu, la date, les places restantes ou le plan, et je te réponds net.',
        'Hello. Si tu veux du concret, je peux te donner les infos pratiques tout de suite.',
        'Salut toi. Pose une question précise et je te réponds sans détour.',
      ],
      fallback: [
        'Je suis surtout utile sur le lieu, la date, les places restantes, le VIP ou le plan.',
        'Pose-moi une question concrète et je te répondrai avec quelque chose d’exploitable.',
        'Je peux être très précis si tu me demandes la logistique, le quota ou le format.',
      ],
      date: (value) => [
        `C’est prévu pour le ${prettyDate(value)}, marque-le dans ton agenda 😉`,
        `Rendez-vous le ${prettyDate(value)} — oui, ça vaut le détour.`,
        `Le ${prettyDate(value)}, à ne pas rater.`,
      ],
      place: (placeName, lat, lng) => [
        `${placeName}, c’est iconique à Marseille ☀️ Coordonnées utiles : ${lat.toFixed(4)}, ${lng.toFixed(4)}.`,
        `${placeName}, très bon choix. Vise ${lat.toFixed(4)}, ${lng.toFixed(4)} pour te repérer facilement.`,
        `${placeName}, vraie vibe Marseille. Si tu veux être précis : ${lat.toFixed(4)}, ${lng.toFixed(4)}.`,
      ],
      vipLocked: [
        'Cet event est réservé aux membres Platinum — le graal ✨',
        'Ici on est sur du VIP pur, donc accès Platinum uniquement.',
        'Cette expérience est verrouillée pour Platinum. Zone premium.',
      ],
      vipOpen: 'Ici, pas de verrou VIP. Tout le monde peut rejoindre tant que le quota et la capacité le permettent.',
      approvalManual: 'Ici, il faut envoyer une demande puis attendre la validation de l’organisateur.',
      approvalDirect: 'Pas de validation manuelle ici, l’inscription est directe.',
      plan: ({ planLabel, price, swipe, activity }) => [
        `Tu es sur le plan ${planLabel} (${price}). Swipes ${swipe}, inscriptions ${activity}.`,
        `${planLabel}, ${price}. En pratique : swipes ${swipe} et activités ${activity}.`,
        `Plan actuel : ${planLabel}. Côté limites, on est sur ${swipe} pour les swipes et ${activity} pour les inscriptions.`,
      ],
      quota: ({ swipes, activities }) => [
        `Aujourd’hui tu es à ${swipes} en swipe et ${activities} en inscriptions.`,
        `Côté quota : swipes ${swipes} et activités ${activities}.`,
        `Ton compteur actuel : ${swipes} pour les swipes, ${activities} pour les inscriptions.`,
      ],
      spotsLow: (left) => `Plus que ${left} place${left > 1 ? 's' : ''}, dépêche-toi !`,
      spots: ({ approved, max, left }) => [
        `On est à ${approved}/${max}. Il reste ${left} places tranquilles.`,
        `${approved} inscrits pour l’instant, donc ${left} places encore ouvertes.`,
        `Bonne nouvelle : il reste ${left} places avant de fermer le groupe.`,
      ],
      datingWhere: [
        'Le Vieux-Port reste une valeur sûre : accessible, vivant et simple pour un premier verre.',
        'Si tu veux un spot qui marche, vise les abords du Mucem ou du Vieux-Port.',
        'Version Marseille : je miserais sur un café autour du Vieux-Port. C’est propre et sans friction.',
      ],
      datingWhen: [
        'Je te verrais bien proposer jeudi vers 19h30 au Vieux-Port, c’est simple et efficace.',
        'Option propre : vendredi à 19h autour du Mucem, ça fait une vraie première vibe.',
        'Le bon move ici : fin de journée au Vieux-Port vers 19h. Central, facile, sans pression.',
      ],
      datingGeneral: (name) => [
        `${name} réagirait bien à un message concret. Date, lieu ou style de sortie : choisis une direction.`,
        'Tu peux rester léger, mais précis. Un lieu et un créneau, ça marche mieux.',
        'Le bon ton ici : simple, direct, sans roman. Propose quelque chose de réel.',
      ],
      scopeHelp: (title) => [
        `Pour ${title}, je peux t’aider sur le lieu, l’heure, les places restantes, le VIP ou la validation.`,
        `Si tu veux une info utile sur ${title}, demande-moi la date, le spot ou la capacité.`,
        'Sur ce format, je suis surtout bon pour les détails logistiques.',
      ],
      sportLevel: (tags) => [
        `Le format ici est ${tags.join(', ')}. L’idée est de garder un niveau accessible et une ambiance propre.`,
        `On est sur ${tags.join(', ')}. Rien de trop brutal, l’objectif c’est jouer et rencontrer du monde.`,
        `Tu peux t’attendre à une vibe ${tags.join(', ')} avec un niveau plutôt gérable.`,
      ],
      proKind: (kind) => [
        `On est sur un format ${kind}. Clairement pensé pour de la valeur concrète et des rencontres utiles.`,
        `Type ${kind}. Donc oui, plus structuré qu’un simple café improvisé.`,
        `${kind} ici. L’idée c’est du contenu utile, puis des échanges qui servent vraiment.`,
      ],
    },
    en: {
      greeting: [
        'Hey. Ask me about the place, date, remaining spots or your plan and I’ll keep it sharp.',
        'Hello. If you want something useful, I can give you the practical details right away.',
        'Hi there. Ask a precise question and I’ll answer directly.',
      ],
      fallback: [
        'I’m most useful on the place, date, remaining spots, VIP access or your plan.',
        'Ask me something concrete and I’ll answer with something you can actually use.',
        'I’m strong on logistics, quotas and event format more than small talk.',
      ],
      date: (value) => [
        `It’s scheduled for ${prettyDate(value)} — put it in your calendar 😉`,
        `See you on ${prettyDate(value)}. Yes, it’s worth locking in.`,
        `${prettyDate(value)} — definitely not one to miss.`,
      ],
      place: (placeName, lat, lng) => [
        `${placeName} is iconic in Marseille ☀️ Useful coordinates: ${lat.toFixed(4)}, ${lng.toFixed(4)}.`,
        `${placeName} is a solid pick. Aim for ${lat.toFixed(4)}, ${lng.toFixed(4)} if you want to navigate easily.`,
        `${placeName} has real Marseille energy. If you want precision: ${lat.toFixed(4)}, ${lng.toFixed(4)}.`,
      ],
      vipLocked: [
        'This one is reserved for Platinum members — the full premium tier ✨',
        'Pure VIP territory here, so Platinum access only.',
        'This experience is locked to Platinum. Premium zone.',
      ],
      vipOpen: 'No VIP lock here. Anyone can join as long as quota and capacity still allow it.',
      approvalManual: 'This one works with manual approval: you send a request and the host validates it.',
      approvalDirect: 'No manual approval here, signup is instant.',
      plan: ({ planLabel, price, swipe, activity }) => [
        `You’re on ${planLabel} (${price}). Swipes: ${swipe}. Signups: ${activity}.`,
        `${planLabel}, ${price}. In practice: ${swipe} for swipes and ${activity} for signups.`,
        `Current plan: ${planLabel}. Limits-wise, you have ${swipe} for swipes and ${activity} for signups.`,
      ],
      quota: ({ swipes, activities }) => [
        `Today you’re at ${swipes} for swipes and ${activities} for signups.`,
        `Quota snapshot: ${swipes} for swipes and ${activities} for activities.`,
        `Your current counters are ${swipes} on swipes and ${activities} on signups.`,
      ],
      spotsLow: (left) => `Only ${left} spot${left > 1 ? 's' : ''} left — move fast!`,
      spots: ({ approved, max, left }) => [
        `We’re at ${approved}/${max}. ${left} spots are still open.`,
        `${approved} people are confirmed so far, so ${left} spots are still available.`,
        `Good news: there are still ${left} spots before it closes.`,
      ],
      datingWhere: [
        'The Vieux-Port stays a safe bet: easy, lively and low-risk for a first drink.',
        'If you want a spot that usually works, aim for the Mucem side or the Vieux-Port.',
        'Marseille-wise, I’d go for a café around the Vieux-Port. Clean and simple.',
      ],
      datingWhen: [
        'I’d suggest Thursday around 7:30 pm at the Vieux-Port — simple and effective.',
        'Clean option: Friday at 7 pm around the Mucem. Good first-date energy.',
        'Best move here: end of day at the Vieux-Port around 7 pm. Central and low pressure.',
      ],
      datingGeneral: (name) => [
        `${name} would probably react well to a concrete message. Date, place or outing style — pick a lane.`,
        'You can stay light, but be specific. A place and a time slot usually work better.',
        'The best tone here is simple and direct. Suggest something real.',
      ],
      scopeHelp: (title) => [
        `For ${title}, I can help with the place, time, remaining spots, VIP access or approval flow.`,
        `If you want something useful about ${title}, ask me for the date, the spot or the capacity.`,
        'On this one, I’m mainly here for the practical details.',
      ],
      sportLevel: (tags) => [
        `The format here is ${tags.join(', ')}. The idea is to keep it accessible with a clean vibe.`,
        `We’re on ${tags.join(', ')} here. Nothing too brutal — the point is to play and meet people.`,
        `Expect a ${tags.join(', ')} vibe with a level that stays manageable.`,
      ],
      proKind: (kind) => [
        `This is a ${kind} format. Very much built for concrete value and useful connections.`,
        `${kind} here, so yes, more structured than an improvised coffee catch-up.`,
        `It’s a ${kind}. The goal is useful content first, then conversations that genuinely matter.`,
      ],
    },
    es: {
      greeting: [
        'Hola. Pregúntame por el lugar, la fecha, las plazas o tu plan y voy directo.',
        'Buenas. Si quieres algo útil, te doy los detalles prácticos al instante.',
        'Hey. Haz una pregunta concreta y te respondo sin rodeos.',
      ],
      fallback: [
        'Soy especialmente útil con el lugar, la fecha, las plazas disponibles, el VIP o tu plan.',
        'Hazme una pregunta concreta y te respondo con algo que realmente puedas usar.',
        'Rindo mejor en logística, cuotas y formatos que en small talk.',
      ],
      date: (value) => [
        `Está previsto para el ${prettyDate(value)}, apúntalo en tu agenda 😉`,
        `La cita es el ${prettyDate(value)}. Sí, merece la pena.`,
        `El ${prettyDate(value)} — no te lo pierdas.`,
      ],
      place: (placeName, lat, lng) => [
        `${placeName} es icónico en Marsella ☀️ Coordenadas útiles: ${lat.toFixed(4)}, ${lng.toFixed(4)}.`,
        `${placeName} es una apuesta muy segura. Apunta ${lat.toFixed(4)}, ${lng.toFixed(4)} para ubicarte fácil.`,
        `${placeName} tiene vibra muy Marsella. Si quieres precisión: ${lat.toFixed(4)}, ${lng.toFixed(4)}.`,
      ],
      vipLocked: [
        'Este plan es solo para miembros Platinum — puro nivel premium ✨',
        'Aquí estamos en territorio VIP, así que solo con acceso Platinum.',
        'Esta experiencia está bloqueada para Platinum. Zona premium.',
      ],
      vipOpen: 'Aquí no hay bloqueo VIP. Puede entrar cualquiera mientras lo permitan el cupo y la capacidad.',
      approvalManual: 'Aquí hay validación manual: envías la solicitud y el organizador la aprueba.',
      approvalDirect: 'Aquí no hay validación manual, la inscripción es directa.',
      plan: ({ planLabel, price, swipe, activity }) => [
        `Estás en ${planLabel} (${price}). Swipes: ${swipe}. Inscripciones: ${activity}.`,
        `${planLabel}, ${price}. En la práctica: ${swipe} para swipes y ${activity} para inscripciones.`,
        `Plan actual: ${planLabel}. En límites, tienes ${swipe} para swipes y ${activity} para inscripciones.`,
      ],
      quota: ({ swipes, activities }) => [
        `Hoy vas por ${swipes} en swipes y ${activities} en inscripciones.`,
        `Resumen de cuota: ${swipes} en swipes y ${activities} en actividades.`,
        `Tus contadores actuales son ${swipes} para swipes y ${activities} para inscripciones.`,
      ],
      spotsLow: (left) => `Solo quedan ${left} plaza${left > 1 ? 's' : ''}, date prisa.`,
      spots: ({ approved, max, left }) => [
        `Estamos en ${approved}/${max}. Quedan ${left} plazas libres.`,
        `Hay ${approved} personas confirmadas, así que todavía quedan ${left} plazas.`,
        `Buenas noticias: aún quedan ${left} plazas antes de cerrar.`,
      ],
      datingWhere: [
        'El Vieux-Port sigue siendo un valor seguro: accesible, vivo y perfecto para una primera copa.',
        'Si quieres un sitio que suele funcionar, apunta a la zona del Mucem o del Vieux-Port.',
        'Versión Marsella: yo iría a un café por el Vieux-Port. Limpio y simple.',
      ],
      datingWhen: [
        'Yo propondría el jueves sobre las 19:30 en el Vieux-Port: simple y eficaz.',
        'Opción limpia: viernes a las 19:00 por el Mucem. Muy buena energía para primera cita.',
        'Buen movimiento aquí: final del día en el Vieux-Port sobre las 19:00. Céntrico y sin presión.',
      ],
      datingGeneral: (name) => [
        `${name} seguramente reaccionaría bien a un mensaje concreto. Fecha, lugar o plan: elige una dirección.`,
        'Puedes ir ligero, pero siendo preciso. Un lugar y una hora suelen funcionar mejor.',
        'El mejor tono aquí es simple y directo. Propón algo real.',
      ],
      scopeHelp: (title) => [
        `Para ${title}, te puedo ayudar con el lugar, la hora, las plazas, el acceso VIP o la validación.`,
        `Si quieres algo útil sobre ${title}, pregúntame por la fecha, el sitio o la capacidad.`,
        'Aquí estoy sobre todo para los detalles prácticos.',
      ],
      sportLevel: (tags) => [
        `El formato aquí es ${tags.join(', ')}. La idea es mantener un nivel accesible y buen ambiente.`,
        `Aquí vamos con ${tags.join(', ')}. Nada demasiado duro: la idea es jugar y conocer gente.`,
        `Puedes esperar una vibra ${tags.join(', ')} con un nivel bastante llevadero.`,
      ],
      proKind: (kind) => [
        `Aquí estamos ante un formato ${kind}. Pensado claramente para valor real y contactos útiles.`,
        `Tipo ${kind}. Sí, más estructurado que un café improvisado.`,
        `Esto es un ${kind}. Primero contenido útil y luego conversaciones que de verdad sirvan.`,
      ],
    },
    it: {
      greeting: [
        'Ciao. Chiedimi il luogo, la data, i posti rimasti o il piano e vado dritto al punto.',
        'Hey. Se vuoi qualcosa di utile, ti do subito i dettagli pratici.',
        'Ciao. Fai una domanda precisa e ti rispondo senza giri.',
      ],
      fallback: [
        'Sono molto più utile su luogo, data, posti disponibili, accesso VIP o piano.',
        'Fammi una domanda concreta e ti rispondo con qualcosa di davvero utile.',
        'Rendo meglio su logistica, quote e formato che sullo small talk.',
      ],
      date: (value) => [
        `È previsto per il ${prettyDate(value)}, segnalo in agenda 😉`,
        `Appuntamento il ${prettyDate(value)}. Sì, vale la pena.`,
        `Il ${prettyDate(value)} — da non perdere.`,
      ],
      place: (placeName, lat, lng) => [
        `${placeName} è iconico a Marsiglia ☀️ Coordinate utili: ${lat.toFixed(4)}, ${lng.toFixed(4)}.`,
        `${placeName} è una scelta molto solida. Punta a ${lat.toFixed(4)}, ${lng.toFixed(4)} per orientarti bene.`,
        `${placeName} ha una vera vibe marsigliese. Se vuoi precisione: ${lat.toFixed(4)}, ${lng.toFixed(4)}.`,
      ],
      vipLocked: [
        'Questo è riservato ai membri Platinum — il livello premium pieno ✨',
        'Qui siamo in piena zona VIP, quindi accesso solo Platinum.',
        'Questa esperienza è bloccata per Platinum. Zona premium.',
      ],
      vipOpen: 'Qui non c’è alcun blocco VIP. Può entrare chiunque finché quota e capienza lo permettono.',
      approvalManual: 'Qui c’è approvazione manuale: invii la richiesta e poi l’organizzatore decide.',
      approvalDirect: 'Qui non c’è approvazione manuale, l’iscrizione è diretta.',
      plan: ({ planLabel, price, swipe, activity }) => [
        `Sei sul piano ${planLabel} (${price}). Swipe: ${swipe}. Iscrizioni: ${activity}.`,
        `${planLabel}, ${price}. In pratica: ${swipe} per gli swipe e ${activity} per le iscrizioni.`,
        `Piano attuale: ${planLabel}. Come limiti hai ${swipe} per gli swipe e ${activity} per le iscrizioni.`,
      ],
      quota: ({ swipes, activities }) => [
        `Oggi sei a ${swipes} negli swipe e ${activities} nelle iscrizioni.`,
        `Snapshot quota: ${swipes} per gli swipe e ${activities} per le attività.`,
        `I tuoi contatori attuali sono ${swipes} sugli swipe e ${activities} sulle iscrizioni.`,
      ],
      spotsLow: (left) => `Restano solo ${left} post${left > 1 ? 'i' : 'o'}, muoviti.`,
      spots: ({ approved, max, left }) => [
        `Siamo a ${approved}/${max}. Restano ${left} posti disponibili.`,
        `${approved} persone confermate finora, quindi ci sono ancora ${left} posti.`,
        `Buona notizia: restano ancora ${left} posti prima della chiusura.`,
      ],
      datingWhere: [
        'Il Vieux-Port resta una scelta sicura: accessibile, vivo e semplice per un primo drink.',
        'Se vuoi un posto che funziona spesso, punta sulla zona del Mucem o del Vieux-Port.',
        'Versione Marsiglia: io sceglierei un caffè intorno al Vieux-Port. Pulito e semplice.',
      ],
      datingWhen: [
        'Io proporrei giovedì verso le 19:30 al Vieux-Port: semplice ed efficace.',
        'Opzione pulita: venerdì alle 19 intorno al Mucem. Bella energia da primo appuntamento.',
        'La mossa giusta qui: fine giornata al Vieux-Port verso le 19. Centrale e senza pressione.',
      ],
      datingGeneral: (name) => [
        `${name} probabilmente reagirebbe bene a un messaggio concreto. Data, luogo o tipo di uscita: scegli una direzione.`,
        'Puoi restare leggero, ma preciso. Un luogo e una fascia oraria funzionano meglio.',
        'Il tono giusto qui è semplice e diretto. Proponi qualcosa di reale.',
      ],
      scopeHelp: (title) => [
        `Per ${title}, posso aiutarti su luogo, orario, posti rimasti, accesso VIP o approvazione.`,
        `Se vuoi qualcosa di utile su ${title}, chiedimi la data, il posto o la capienza.`,
        'Qui sono soprattutto forte sui dettagli pratici.',
      ],
      sportLevel: (tags) => [
        `Il format qui è ${tags.join(', ')}. L’idea è tenere un livello accessibile e una bella atmosfera.`,
        `Qui siamo su ${tags.join(', ')}. Niente di troppo duro: l’obiettivo è giocare e conoscere gente.`,
        `Puoi aspettarti una vibe ${tags.join(', ')} con un livello abbastanza gestibile.`,
      ],
      proKind: (kind) => [
        `Qui siamo su un format ${kind}. Pensato chiaramente per valore concreto e connessioni utili.`,
        `Tipo ${kind}. Quindi sì, molto più strutturato di un caffè improvvisato.`,
        `Qui è un ${kind}. Prima contenuto utile, poi conversazioni che servono davvero.`,
      ],
    },
  }[lang];

  const matchesAny = (patterns) => patterns.some((pattern) => pattern.test(text));
  const intents = {
    greeting: [/\b(bonjour|salut|hello|hey|coucou|hola|buenas|ciao|buongiorno)\b/],
    plan: [/\b(plan|abonnement|subscription|suscripcion|abbonamento|price|prix|precio|prezzo|tarif|tarifa)\b/],
    quota: [/\b(limite|quota|swipe|swipes|restant|remaining|left|quedan|rimasti|inscription|signup)\b/],
    where: [/\b(ou|where|donde|dove|lieu|place|location|ubicacion|indirizzo|adresse|address|coordonnee|coordinate|coords)\b/],
    when: [/\b(quand|when|date|heure|time|hora|cuando|quando|demain|tomorrow|manana|domani|tonight|stasera)\b/],
    spots: [/\b(place|places|spot|spots|participant|participants|capacity|capacite|plazas|posti|dispo|available|complet|full|cupo)\b/],
    vip: [/\b(vip|platinum)\b/],
    approval: [/\b(validation|approbation|approval|approve|demande|request|pending|solicitud|richiesta|attesa)\b/],
    sport: [/\b(running|course|run|padel|paddle|foot|football|soccer|futbol|calcio|calcetto|niveau|level|nivel|livello)\b/],
    proKind: [/\b(afterwork|masterclass|formation|training|reunion|meeting|riunione|event|evento|networking|format)\b/],
  };

  const planUsage = {
    swipe:
      plan.swipeLimit === Infinity
        ? lang === 'fr'
          ? 'illimités'
          : lang === 'en'
            ? 'unlimited'
            : lang === 'es'
              ? 'ilimitados'
              : 'illimitati'
        : lang === 'fr'
          ? `${plan.swipeLimit} / jour`
          : lang === 'en'
            ? `${plan.swipeLimit} / day`
            : lang === 'es'
              ? `${plan.swipeLimit} / día`
              : `${plan.swipeLimit} / giorno`,
    activity:
      plan.activityLimit === Infinity
        ? lang === 'fr'
          ? 'illimitées'
          : lang === 'en'
            ? 'unlimited'
            : lang === 'es'
              ? 'ilimitadas'
              : 'illimitate'
        : lang === 'fr'
          ? `${plan.activityLimit} / mois`
          : lang === 'en'
            ? `${plan.activityLimit} / month`
            : lang === 'es'
              ? `${plan.activityLimit} / mes`
              : `${plan.activityLimit} / mese`,
  };

  if (matchesAny(intents.greeting)) {
    return pickRandom(copy.greeting);
  }

  if (matchesAny(intents.plan)) {
    return pickRandom(
      copy.plan({
        planLabel: getPlanLabel(state.plan),
        price: plan.price,
        swipe: planUsage.swipe,
        activity: planUsage.activity,
      }),
    );
  }

  if (matchesAny(intents.quota)) {
    return pickRandom(
      copy.quota({
        swipes: formatUsage(state.usage.swipeCount, plan.swipeLimit),
        activities: formatUsage(state.usage.activityCount, plan.activityLimit),
      }),
    );
  }

  if (scope === 'dating') {
    const match = state.matches.find((item) => item.id === contextId);
    if (!match) return pickRandom(copy.fallback);
    if (matchesAny(intents.when)) return pickRandom(copy.datingWhen);
    if (matchesAny(intents.where)) return pickRandom(copy.datingWhere);
    return pickRandom(copy.datingGeneral(match.name));
  }

  if (scope === 'amical') {
    const rawActivity = state.activities.find((item) => item.id === contextId);
    const activity = getLocalizedActivity(rawActivity);
    if (!rawActivity || !activity) return pickRandom(copy.fallback);
    if (matchesAny(intents.where)) return pickRandom(copy.place(rawActivity.placeName, rawActivity.lat, rawActivity.lng));
    if (matchesAny(intents.when)) return pickRandom(copy.date(rawActivity.date));
    if (matchesAny(intents.spots)) {
      const left = Math.max(0, rawActivity.max - rawActivity.approvedParticipants.length);
      return left <= 2
        ? copy.spotsLow(left)
        : pickRandom(
            copy.spots({
              approved: rawActivity.approvedParticipants.length,
              max: rawActivity.max,
              left,
            }),
          );
    }
    if (matchesAny(intents.vip)) return rawActivity.vip ? pickRandom(copy.vipLocked) : copy.vipOpen;
    if (matchesAny(intents.approval)) return rawActivity.requiresApproval ? copy.approvalManual : copy.approvalDirect;
    return pickRandom(copy.scopeHelp(activity.title));
  }

  if (scope === 'sport') {
    const rawActivity = state.sportActivities.find((item) => item.id === contextId);
    const activity = getLocalizedSportActivity(rawActivity);
    if (!rawActivity || !activity) return pickRandom(copy.fallback);
    if (matchesAny(intents.where)) return pickRandom(copy.place(rawActivity.placeName, rawActivity.lat, rawActivity.lng));
    if (matchesAny(intents.when)) return pickRandom(copy.date(rawActivity.date));
    if (matchesAny(intents.spots)) {
      const left = Math.max(0, rawActivity.max - rawActivity.approvedParticipants.length);
      return left <= 2
        ? copy.spotsLow(left)
        : pickRandom(
            copy.spots({
              approved: rawActivity.approvedParticipants.length,
              max: rawActivity.max,
              left,
            }),
          );
    }
    if (matchesAny(intents.sport)) return pickRandom(copy.sportLevel(activity.tags));
    if (matchesAny(intents.vip)) return rawActivity.vip ? pickRandom(copy.vipLocked) : copy.vipOpen;
    if (matchesAny(intents.approval)) return rawActivity.requiresApproval ? copy.approvalManual : copy.approvalDirect;
    return pickRandom(copy.scopeHelp(activity.title));
  }

  const rawEvent = state.events.find((item) => item.id === contextId);
  const event = getLocalizedEvent(rawEvent);
  if (!rawEvent || !event) return pickRandom(copy.fallback);
  if (matchesAny(intents.where)) return pickRandom(copy.place(rawEvent.placeName, rawEvent.lat, rawEvent.lng));
  if (matchesAny(intents.when)) return pickRandom(copy.date(rawEvent.date));
  if (matchesAny(intents.spots)) {
    const left = Math.max(0, rawEvent.max - rawEvent.approvedParticipants.length);
    return left <= 2
      ? copy.spotsLow(left)
      : pickRandom(
          copy.spots({
            approved: rawEvent.approvedParticipants.length,
            max: rawEvent.max,
            left,
          }),
        );
  }
  if (matchesAny(intents.vip)) return rawEvent.vip ? pickRandom(copy.vipLocked) : copy.vipOpen;
  if (matchesAny(intents.proKind)) return pickRandom(copy.proKind(getKindLabel(rawEvent.kind)));
  if (matchesAny(intents.approval)) return rawEvent.requiresApproval ? copy.approvalManual : copy.approvalDirect;
  return pickRandom(copy.scopeHelp(event.title));
}

function canAccessSpace(space, notify = false, refs = null) {
  if (!state.subscriptionActive) {
    if (notify) {
      showUpsell(t('upsell.subscriptionInactive'), refs);
      toast(t('toast.subscriptionInactive'));
    }
    return false;
  }

  if (state.plan === 'BASIC' && state.basicAllowedTab !== space) {
    if (notify) {
      showUpsell(t('upsell.basicBlocked', { space: humanSpace(state.basicAllowedTab) }), refs);
      toast(t('toast.basicBlockedTab'));
    }
    return false;
  }

  return true;
}

function consumeSwipeQuota() {
  normalizeCounters();
  const limit = plans[state.plan].swipeLimit;
  if (limit === Infinity) return true;
  if (state.usage.swipeCount >= limit) return false;
  state.usage.swipeCount += 1;
  return true;
}

function consumeActivityQuota() {
  normalizeCounters();
  const limit = plans[state.plan].activityLimit;
  if (limit === Infinity) return true;
  if (state.usage.activityCount >= limit) return false;
  state.usage.activityCount += 1;
  return true;
}

function normalizeCounters() {
  const day = getParisDayKey();
  const month = getParisMonthKey();

  if (state.usage.swipeDate !== day) {
    state.usage.swipeDate = day;
    state.usage.swipeCount = 0;
  }

  if (state.usage.activityMonth !== month) {
    state.usage.activityMonth = month;
    state.usage.activityCount = 0;
  }
}

function showUpsell(text, refs) {
  if (!refs?.upsellBanner || !refs?.upsellText) return;
  refs.upsellText.textContent = text;
  refs.upsellBanner.classList.remove('hidden');
}

function hideUpsell(refs) {
  refs?.upsellBanner?.classList.add('hidden');
}

function toast(text) {
  const node = document.getElementById('toast');
  if (!node) return;
  node.textContent = text;
  node.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => node.classList.add('hidden'), 2200);
}

function playSwipeFlash(direction, node) {
  if (!node) return;
  node.classList.remove('like', 'pass');
  void node.offsetWidth;
  node.classList.add(direction === 'LIKE' ? 'like' : 'pass');
  setTimeout(() => node.classList.remove('like', 'pass'), 420);
}

function animateMetric(node, target) {
  if (!node) return;
  const current = Number(node.dataset.current || 0);
  if (current === target) return;
  const step = current < target ? 1 : -1;
  let value = current;
  clearInterval(node._metricTimer);
  node._metricTimer = setInterval(() => {
    value += step;
    node.textContent = String(value);
    node.dataset.current = String(value);
    if (value === target) {
      clearInterval(node._metricTimer);
    }
  }, 22);
}

function initRevealObserver() {
  const nodes = document.querySelectorAll('[data-reveal]');
  if (!nodes.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
    },
  );
  nodes.forEach((node) => observer.observe(node));
}

function refreshMapSizes() {
  setTimeout(() => {
    appContext.amicalMap?.invalidateSize();
    appContext.sportMap?.invalidateSize();
    appContext.proMap?.invalidateSize();
  }, 80);
}

function focusMapOn(map, items, selectedId) {
  if (!map || !items.length || !window.L) return;
  const selected = items.find((item) => item.id === selectedId);
  if (selected) {
    map.setView([selected.lat, selected.lng], 13, { animate: true });
    return;
  }
  const bounds = L.latLngBounds(items.map((item) => [item.lat, item.lng]));
  map.fitBounds(bounds.pad(0.22));
}

function makeMarkerIcon({ theme, vip = false, kind = '' }) {
  let className = 'marker-bubble ';
  let inner = '';
  if (theme === 'amical' && vip) {
    className += 'vip';
  } else if (theme === 'sport' && vip) {
    className += 'vip';
  } else if (theme === 'pro' && kind === 'AFTERWORK') {
    className += 'afterwork';
    inner = '★';
  } else if (theme === 'sport') {
    className += 'sport';
  } else if (theme === 'amical') {
    className += 'amical';
  } else {
    className += 'pro';
  }

  return L.divIcon({
    className: '',
    html: `<div class="${className}">${inner}</div>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  });
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getCommunityPhotoFrame(photoUrl = '') {
  const repaired = repairLocalAssetPath(photoUrl);
  return communityPortraitFrames[repaired] || { photoPosition: '50% 42%', photoScale: 1.55, thumbnailScale: 1.72 };
}

function applyPhotoFraming(element, profile, thumbnail = false) {
  if (!element) return;
  element.style.setProperty('--photo-position', profile?.photoPosition || '50% 45%');
  element.style.setProperty('--photo-scale', String(thumbnail ? profile?.thumbnailScale || 1 : profile?.photoScale || 1));
}

function photoInlineStyle(profile, thumbnail = false) {
  const position = profile?.photoPosition || '50% 45%';
  const scale = thumbnail ? profile?.thumbnailScale || 1 : profile?.photoScale || 1;
  return `--photo-position:${position};--photo-scale:${scale};`;
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const initial = createDefaultState();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    return initial;
  }

  try {
    return migrateState(JSON.parse(raw));
  } catch {
    const initial = createDefaultState();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    return initial;
  }
}

function createDefaultState() {
  return {
    version: STATE_VERSION,
    language: 'fr',
    loggedIn: false,
    authEmail: '',
    referrals: 0,
    plan: 'INTERMEDIATE',
    subscriptionActive: true,
    basicAllowedTab: 'dating',
    basicTabChangedMonth: null,
    usage: {
      swipeDate: getParisDayKey(),
      swipeCount: 0,
      activityMonth: getParisMonthKey(),
      activityCount: 0,
    },
    ui: {
      activeSpace: 'dating',
      datingView: 'swipe',
      amicalView: 'activities',
      sportView: 'activities',
      proView: 'events',
      datingCursor: 0,
      datingPhotoIndex: 0,
      selectedMatchId: null,
      selectedActivityId: seedActivities[0].id,
      selectedSportActivityId: seedSportActivities[0].id,
      selectedEventId: seedEvents[0].id,
    },
    currentUser: {
      firstName: '',
      lastName: '',
      email: '',
      birthdate: '',
      gender: '',
      city: 'Marseille',
      bio: '',
      interests: [],
      customInterests: [],
      profileType: 'PERSONAL',
      jobTitle: '',
      company: '',
      sector: '',
      website: '',
      companyName: '',
      photos: Array(MAX_PROFILE_PHOTOS).fill(''),
      identityVerified: false,
      proVerified: false,
    },
    profiles: structuredClone(seedProfiles),
    matches: [],
    activities: structuredClone(seedActivities),
    sportActivities: structuredClone(seedSportActivities),
    events: structuredClone(seedEvents),
    joinedActivities: [],
    pendingActivityRequests: [],
    joinedSportActivities: [],
    pendingSportActivityRequests: [],
    joinedEvents: [],
    pendingEventRequests: [],
    posts: structuredClone(seedPosts),
    feedFilter: 'ALL',
    chats: {
      dating: {},
      amical: {},
      sport: {},
      pro: {},
    },
  };
}

function migrateState(parsed) {
  const base = createDefaultState();
  const refreshDatingSeeds = Number(parsed.version || 0) < STATE_VERSION;
  const merged = {
    ...base,
    ...parsed,
    version: STATE_VERSION,
    language: LANGUAGES[parsed.language] ? parsed.language : base.language,
    referrals: Number(parsed.referrals || 0),
    basicAllowedTab: parsed.basicAllowedTab || base.basicAllowedTab,
    basicTabChangedMonth: parsed.basicTabChangedMonth || null,
    feedFilter: parsed.feedFilter || 'ALL',
    loggedIn: parsed.loggedIn ?? base.loggedIn,
    authEmail: parsed.authEmail || parsed.email || base.authEmail,
    subscriptionActive: parsed.subscriptionActive ?? base.subscriptionActive,
    usage: {
      ...base.usage,
      ...(parsed.usage || {}),
    },
    ui: {
      ...base.ui,
      ...(parsed.ui || {}),
      activeSpace: parsed.ui?.activeSpace || parsed.activeTab || base.ui.activeSpace,
      datingCursor: refreshDatingSeeds ? base.ui.datingCursor : parsed.ui?.datingCursor ?? parsed.datingCursor ?? base.ui.datingCursor,
      selectedMatchId: parsed.ui?.selectedMatchId ?? parsed.selectedMatchId ?? base.ui.selectedMatchId,
      selectedActivityId: parsed.ui?.selectedActivityId ?? base.ui.selectedActivityId,
      selectedSportActivityId: parsed.ui?.selectedSportActivityId ?? base.ui.selectedSportActivityId,
      selectedEventId: parsed.ui?.selectedEventId ?? base.ui.selectedEventId,
      datingView: parsed.ui?.datingView || 'swipe',
      amicalView: parsed.ui?.amicalView || 'activities',
      sportView: parsed.ui?.sportView || 'activities',
      proView: parsed.ui?.proView || 'events',
      datingPhotoIndex: refreshDatingSeeds ? base.ui.datingPhotoIndex : parsed.ui?.datingPhotoIndex || 0,
    },
    currentUser: {
      ...base.currentUser,
      ...(parsed.currentUser || {}),
      photos: normalizePhotoSlots(parsed.currentUser?.photos || base.currentUser.photos),
      interests: Array.isArray(parsed.currentUser?.interests) ? parsed.currentUser.interests : [],
      customInterests: Array.isArray(parsed.currentUser?.customInterests) ? parsed.currentUser.customInterests : [],
    },
    profiles: refreshDatingSeeds ? normalizeProfiles(base.profiles) : normalizeProfiles(parsed.profiles || base.profiles),
    activities: normalizeActivities(parsed.activities || base.activities),
    sportActivities: normalizeActivities(parsed.sportActivities || base.sportActivities),
    events: normalizeEvents(parsed.events || base.events),
    posts: normalizePosts(parsed.posts || base.posts),
    matches: refreshDatingSeeds ? normalizeMatches(base.matches) : normalizeMatches(parsed.matches || base.matches),
    joinedActivities: Array.isArray(parsed.joinedActivities) ? parsed.joinedActivities : [],
    pendingActivityRequests: Array.isArray(parsed.pendingActivityRequests) ? parsed.pendingActivityRequests : [],
    joinedSportActivities: Array.isArray(parsed.joinedSportActivities) ? parsed.joinedSportActivities : [],
    pendingSportActivityRequests: Array.isArray(parsed.pendingSportActivityRequests)
      ? parsed.pendingSportActivityRequests
      : [],
    joinedEvents: Array.isArray(parsed.joinedEvents) ? parsed.joinedEvents : [],
    pendingEventRequests: Array.isArray(parsed.pendingEventRequests) ? parsed.pendingEventRequests : [],
    chats: {
      dating: parsed.chats?.dating || {},
      amical: parsed.chats?.amical || {},
      sport: parsed.chats?.sport || {},
      pro: parsed.chats?.pro || {},
    },
  };

  return merged;
}

function normalizeProfiles(profiles) {
  return profiles
    .map((profile, index) => ({
      id: profile.id || `profile-${index}`,
      name: profile.name || 'Profil',
      age: profile.age || 28,
      bio: profile.bio || 'Profil L1VE a Marseille.',
      tags: Array.isArray(profile.tags) ? profile.tags : ['Marseille'],
      likedYou: Boolean(profile.likedYou),
      plan: profile.plan || 'INTERMEDIATE',
      distance: profile.distance || '3 km',
      photoPosition: profile.photoPosition || '50% 45%',
      photoScale: Number(profile.photoScale || 1.75),
      photos: Array.isArray(profile.photos) && profile.photos.length
        ? profile.photos.map(repairLocalAssetPath)
        : profile.imageUrl
          ? [repairLocalAssetPath(profile.imageUrl)]
          : portraitSets.romane,
    }))
    .filter((profile) => !removedDatingProfileIds.has(profile.id) && !removedDatingProfileNames.has(profile.name));
}

function normalizeActivities(activities) {
  return activities.map((activity, index) => ({
    id: activity.id || `a-${index}`,
    title: activity.title || 'Activite',
    description: activity.description || '',
    placeName: activity.placeName || 'Marseille',
    lat: activity.lat || MARSEILLE_CENTER.lat,
    lng: activity.lng || MARSEILLE_CENTER.lng,
    imageUrl: activity.imageUrl || placePhotos.marseilleView,
    date: activity.date || plusDays(index + 1),
    tags: Array.isArray(activity.tags) ? activity.tags : ['social'],
    vip: Boolean(activity.vip),
    requiresApproval: Boolean(activity.requiresApproval),
    min: activity.min || 2,
    max: activity.max || 10,
    createdBy: activity.createdBy || 'Nora',
    pendingRequests: Array.isArray(activity.pendingRequests) ? activity.pendingRequests : [],
    approvedParticipants: Array.isArray(activity.approvedParticipants)
      ? activity.approvedParticipants
      : Array.isArray(activity.participants)
        ? activity.participants
        : [],
    participants: Array.isArray(activity.participants)
      ? activity.participants
      : Array.isArray(activity.approvedParticipants)
        ? activity.approvedParticipants
        : [],
  }));
}

function normalizeEvents(events) {
  return events.map((event, index) => ({
    id: event.id || `e-${index}`,
    kind: event.kind || 'MASTERCLASS',
    title: event.title || 'Evenement',
    description: event.description || '',
    placeName: event.placeName || 'Marseille',
    lat: event.lat || MARSEILLE_CENTER.lat,
    lng: event.lng || MARSEILLE_CENTER.lng,
    imageUrl: event.imageUrl || placePhotos.businessMeeting,
    date: event.date || plusDays(index + 1),
    tags: Array.isArray(event.tags) ? event.tags : ['networking'],
    vip: Boolean(event.vip),
    max: event.max || 20,
    requiresApproval: Boolean(event.requiresApproval),
    createdBy: event.createdBy || 'Alice',
    pendingRequests: Array.isArray(event.pendingRequests) ? event.pendingRequests : [],
    approvedParticipants: Array.isArray(event.approvedParticipants)
      ? event.approvedParticipants
      : Array.isArray(event.participants)
        ? event.participants
        : [],
    participants: Array.isArray(event.participants)
      ? event.participants
      : Array.isArray(event.approvedParticipants)
        ? event.approvedParticipants
        : [],
  }));
}

function normalizePosts(posts) {
  return posts.map((post, index) => ({
    id: post.id || `post-${index}`,
    type: post.type || 'POST',
    author: post.author || 'Auteur',
    authorPlan: post.authorPlan || 'INTERMEDIATE',
    content: post.content || post.contentText || '',
    quoteAuthor: post.quoteAuthor || '',
    likes: Number(post.likes || 0),
    comments: Array.isArray(post.comments) ? post.comments : [],
    createdAt: post.createdAt || new Date().toISOString(),
  }));
}

function normalizeMatches(matches) {
  return matches
    .map((match, index) => ({
      id: match.id || `match-${index}`,
      profileId: match.profileId || `profile-${index}`,
      name: match.name || 'Match',
      age: match.age || 28,
      photoPosition: match.photoPosition || '50% 45%',
      photoScale: Number(match.photoScale || 1.75),
      photos: Array.isArray(match.photos)
        ? match.photos.map(repairLocalAssetPath)
        : match.imageUrl
          ? [repairLocalAssetPath(match.imageUrl)]
          : portraitSets.romane,
      plan: match.plan || 'INTERMEDIATE',
      distance: match.distance || 'Marseille',
      lastAt: match.lastAt || new Date().toISOString(),
    }))
    .filter((match) => !removedDatingProfileIds.has(match.profileId) && !removedDatingProfileNames.has(match.name));
}

function ensureActiveSpaceAllowed() {
  if (state.plan === 'BASIC' && state.ui.activeSpace !== state.basicAllowedTab) {
    state.ui.activeSpace = state.basicAllowedTab;
  }
}

function ensureSelectionIntegrity() {
  if (!state.activities.some((item) => item.id === state.ui.selectedActivityId)) {
    state.ui.selectedActivityId = state.activities[0]?.id || null;
  }
  if (!state.sportActivities.some((item) => item.id === state.ui.selectedSportActivityId)) {
    state.ui.selectedSportActivityId = state.sportActivities[0]?.id || null;
  }
  if (!state.events.some((item) => item.id === state.ui.selectedEventId)) {
    state.ui.selectedEventId = state.events[0]?.id || null;
  }
  if (state.matches.length && !state.matches.some((item) => item.id === state.ui.selectedMatchId)) {
    state.ui.selectedMatchId = state.matches[0].id;
  }
}

function getOrderedProfiles() {
  return [...state.profiles].sort((left, right) => {
    const leftFeatured = plans[left.plan]?.featured ? 1 : 0;
    const rightFeatured = plans[right.plan]?.featured ? 1 : 0;
    if (leftFeatured !== rightFeatured) return rightFeatured - leftFeatured;
    if (left.likedYou !== right.likedYou) return Number(right.likedYou) - Number(left.likedYou);
    return left.name.localeCompare(right.name);
  });
}

function getSelectedActivity() {
  return state.activities.find((item) => item.id === state.ui.selectedActivityId) || state.activities[0];
}

function getSelectedSportActivity() {
  return state.sportActivities.find((item) => item.id === state.ui.selectedSportActivityId) || state.sportActivities[0];
}

function getSelectedEvent() {
  return state.events.find((item) => item.id === state.ui.selectedEventId) || state.events[0];
}

function getSpaceView(space) {
  if (space === 'dating') return state.ui.datingView;
  if (space === 'amical') return state.ui.amicalView;
  if (space === 'sport') return state.ui.sportView;
  return state.ui.proView;
}

function setSpaceView(space, view) {
  if (space === 'dating') state.ui.datingView = view;
  if (space === 'amical') state.ui.amicalView = view;
  if (space === 'sport') state.ui.sportView = view;
  if (space === 'pro') state.ui.proView = view;
}

function currentActorName() {
  const user = state.currentUser;
  if ((user.profileType || 'PERSONAL') === 'COMPANY' && user.companyName) {
    return user.companyName;
  }
  const fullName = [user.firstName, user.lastName].filter(Boolean).join(' ').trim();
  if (fullName) return fullName;
  if (state.authEmail) return state.authEmail.split('@')[0];
  return 'You';
}

function isCurrentUserCreator(item) {
  return normalizeText(item.createdBy) === normalizeText(currentActorName()) || normalizeText(item.createdBy) === 'you';
}

function syncApprovedParticipant(item, name) {
  if (!item.approvedParticipants.includes(name)) {
    item.approvedParticipants.push(name);
  }
  item.participants = [...item.approvedParticipants];
}

function getCommunityProfile(name) {
  if (normalizeText(name) === normalizeText(currentActorName())) {
    const photo = normalizePhotoSlots(state.currentUser.photos).find(Boolean);
    return {
      name: currentActorName(),
      visibility: 'public',
      photoUrl: photo || '',
      photoPosition: '50% 42%',
      photoScale: 1.08,
      thumbnailScale: 1.16,
      age: state.currentUser.birthdate ? calculateAge(state.currentUser.birthdate) : null,
      city: state.currentUser.city || 'Marseille',
      headline:
        state.currentUser.profileType === 'COMPANY'
          ? state.currentUser.companyName || 'Profil entreprise'
          : state.currentUser.jobTitle || 'Profil L1VE',
      bio: state.currentUser.bio || 'Profil personnel synchronisé depuis ton compte L1VE.',
      tags: uniqueArray([...(state.currentUser.interests || []), ...(state.currentUser.customInterests || [])]).slice(0, 5),
    };
  }

  const directMatch = communityProfiles.find((profile) => normalizeText(profile.name) === normalizeText(name));
  if (directMatch) {
    const photoUrl = repairLocalAssetPath(directMatch.photoUrl || '');
    return {
      ...directMatch,
      photoUrl,
      ...getCommunityPhotoFrame(photoUrl),
    };
  }

  return {
    name,
    visibility: 'private',
    photoUrl: '',
    age: null,
    city: 'Marseille',
    headline: 'Profil privé',
    bio: '',
    tags: [],
  };
}

function renderParticipantChips(container, names, scope, refs) {
  if (!container) return;
  container.innerHTML = names
    .map((name) => {
      const profile = getCommunityProfile(name);
      const publicProfile = profile.visibility !== 'private';
      const initials = getInitials(name);
      const meta = publicProfile ? t('member.view') : t('member.private');
      const avatar = publicProfile && profile.photoUrl
        ? `<img src="${profile.photoUrl}" alt="${escapeHtml(name)}" style="${photoInlineStyle(profile, true)}" />`
        : `<span>${escapeHtml(initials)}</span>`;

      return `
        <button
          class="participant-chip ${publicProfile ? 'public' : 'private'}"
          data-open-member-profile="${encodeURIComponent(name)}"
          data-member-scope="${scope}"
          type="button"
          aria-label="${escapeHtml(t('member.aria', { name }))}"
        >
          <span class="participant-avatar ${publicProfile && profile.photoUrl ? 'photo' : ''}">${avatar}</span>
          <span class="participant-copy">
            <strong>${escapeHtml(name)}</strong>
            <small>${escapeHtml(meta)}</small>
          </span>
        </button>
      `;
    })
    .join('');

  bindMemberProfileTriggers(container, refs, scope);
}

function openMemberProfile(name, scope, refs) {
  if (
    !refs?.memberProfileModal ||
    !refs.memberProfileBadge ||
    !refs.memberProfileName ||
    !refs.memberProfileHeadline ||
    !refs.memberProfileLocation ||
    !refs.memberProfileMedia ||
    !refs.memberProfileBio ||
    !refs.memberProfilePrivate ||
    !refs.memberProfileTags ||
    !refs.memberProfileFacts
  ) {
    return;
  }

  const profile = getCommunityProfile(name);
  const publicProfile = profile.visibility !== 'private';
  const badgeClass = scope === 'amical' ? 'badge-amical' : scope === 'sport' ? 'badge-sport' : 'badge-pro';

  refs.memberProfileBadge.className = `badge ${publicProfile ? badgeClass : 'badge-muted'}`;
  refs.memberProfileBadge.textContent = publicProfile ? `${humanSpace(scope)} · ${t('member.visible')}` : t('member.private');
  refs.memberProfileName.textContent = profile.name;
  refs.memberProfileHeadline.textContent = publicProfile ? profile.headline || 'Membre L1VE' : t('member.private');
  refs.memberProfileLocation.textContent = profile.city ? `${profile.city} · ${humanSpace(scope)}` : humanSpace(scope);

  if (publicProfile) {
    refs.memberProfileMedia.innerHTML = profile.photoUrl
      ? `<img src="${profile.photoUrl}" alt="${escapeHtml(profile.name)}" class="member-profile-image" style="${photoInlineStyle(profile, false)}" />`
      : `<div class="member-profile-fallback">${escapeHtml(getInitials(profile.name))}</div>`;
    refs.memberProfileBio.textContent = profile.bio || t('member.noBio');
    refs.memberProfilePrivate.classList.add('hidden');
    refs.memberProfileTags.innerHTML = (profile.tags || []).length
      ? profile.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')
      : `<span>${escapeHtml(t('member.noTags'))}</span>`;

    const facts = [];
    if (profile.age) facts.push([t('member.age'), `${profile.age} ans`]);
    if (profile.city) facts.push([t('member.city'), profile.city]);
    if (profile.headline) facts.push([t('member.info'), profile.headline]);
    refs.memberProfileFacts.innerHTML = facts
      .map(
        ([label, value]) => `
          <div class="member-fact">
            <span>${escapeHtml(label)}</span>
            <strong>${escapeHtml(value)}</strong>
          </div>
        `,
      )
      .join('');
  } else {
    refs.memberProfileMedia.innerHTML = `<div class="member-profile-lock">🔒</div>`;
    refs.memberProfileBio.textContent = t('member.privateBio');
    refs.memberProfilePrivate.classList.remove('hidden');
    refs.memberProfileTags.innerHTML = `<span>${escapeHtml(t('member.limited'))}</span>`;
    refs.memberProfileFacts.innerHTML = `
      <div class="member-fact">
        <span>${escapeHtml(t('member.status'))}</span>
        <strong>${escapeHtml(t('member.private'))}</strong>
      </div>
      <div class="member-fact">
        <span>${escapeHtml(t('member.city'))}</span>
        <strong>${escapeHtml(profile.city || 'Marseille')}</strong>
      </div>
    `;
  }

  refs.memberProfileModal.classList.remove('hidden');
  refs.memberProfileModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeMemberProfile(refs) {
  refs.memberProfileModal?.classList.add('hidden');
  refs.memberProfileModal?.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function bindMemberProfileTriggers(container, refs, fallbackScope) {
  if (!container) return;
  container.querySelectorAll('[data-open-member-profile]').forEach((button) => {
    button.addEventListener('click', () => {
      const name = decodeURIComponent(button.dataset.openMemberProfile || '');
      const nextScope = button.dataset.memberScope || fallbackScope || 'amical';
      openMemberProfile(name, nextScope, refs);
    });
  });
}

function repairLocalAssetPath(path) {
  if (typeof path !== 'string') return path;
  return localAssetPathFixes[path] || path;
}

function resolveMarseillePlace(input) {
  const cleaned = normalizeText(input);
  const match = marseilleStrategicPlaces.find((place) => normalizeText(place.name).includes(cleaned));
  if (match) return match;

  const fallback = marseilleStrategicPlaces[Math.floor(Math.random() * marseilleStrategicPlaces.length)];
  return {
    name: input || fallback.name,
    lat: fallback.lat + (Math.random() - 0.5) * 0.01,
    lng: fallback.lng + (Math.random() - 0.5) * 0.01,
  };
}

function formatUsage(count, limit) {
  return limit === Infinity ? t('common.unlimited') : `${count}/${limit}`;
}

function getSelectedProfileType() {
  return document.querySelector('input[name="profileType"]:checked')?.value || state.currentUser.profileType || 'PERSONAL';
}

function normalizePhotoSlots(photos) {
  const next = Array(MAX_PROFILE_PHOTOS).fill('');
  (photos || []).slice(0, MAX_PROFILE_PHOTOS).forEach((photo, index) => {
    next[index] = photo || '';
  });
  return next;
}

function toggleArrayValue(list, value) {
  const index = list.indexOf(value);
  if (index === -1) {
    list.push(value);
  } else {
    list.splice(index, 1);
  }
}

function uniqueArray(values) {
  return [...new Set(values.filter(Boolean))];
}

function getInitials(name) {
  return (name || '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || '')
    .join('');
}

function calculateAge(birthdate) {
  const now = new Date();
  const birth = new Date(birthdate);
  let age = now.getFullYear() - birth.getFullYear();
  const monthDiff = now.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
    age -= 1;
  }
  return age;
}

function humanSpace(space) {
  if (space === 'dating') return t('space.dating');
  if (space === 'amical') return t('space.amical');
  if (space === 'sport') return t('space.sport');
  if (space === 'pro') return t('space.pro');
  return t('space.dating');
}

function getParisDayKey() {
  const date = new Date();
  const year = new Intl.DateTimeFormat('fr-FR', { year: 'numeric', timeZone: PARIS_TZ }).format(date);
  const month = new Intl.DateTimeFormat('fr-FR', { month: '2-digit', timeZone: PARIS_TZ }).format(date);
  const day = new Intl.DateTimeFormat('fr-FR', { day: '2-digit', timeZone: PARIS_TZ }).format(date);
  return `${year}-${month}-${day}`;
}

function getParisMonthKey() {
  const date = new Date();
  const year = new Intl.DateTimeFormat('fr-FR', { year: 'numeric', timeZone: PARIS_TZ }).format(date);
  const month = new Intl.DateTimeFormat('fr-FR', { month: '2-digit', timeZone: PARIS_TZ }).format(date);
  return `${year}-${month}`;
}

function plusDays(days) {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();
}

function prettyDate(isoDate) {
  return new Date(isoDate).toLocaleString(currentLocale(), {
    dateStyle: 'short',
    timeStyle: 'short',
  });
}

function relativeDate(isoDate) {
  const formatter = new Intl.RelativeTimeFormat(currentLocale(), { numeric: 'auto' });
  const diffMs = Date.now() - new Date(isoDate).getTime();
  const diffMin = Math.max(1, Math.floor(diffMs / 60000));
  if (diffMin < 60) return formatter.format(-diffMin, 'minute');
  const diffHours = Math.floor(diffMin / 60);
  if (diffHours < 24) return formatter.format(-diffHours, 'hour');
  const diffDays = Math.floor(diffHours / 24);
  return formatter.format(-diffDays, 'day');
}

function toDatetimeLocal(isoDate) {
  const date = new Date(isoDate);
  const pad = (value) => String(value).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function pickRandom(values) {
  return values[Math.floor(Math.random() * values.length)];
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function escapeHtml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
