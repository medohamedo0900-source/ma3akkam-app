import React, { useState } from 'react';
import { 
  Search, ShoppingCart, TrendingUp, ShieldCheck, Zap, Calculator, 
  Car, HeartPulse, Building2, Smartphone, DollarSign, BookOpen, 
  Sparkles, CheckCircle2, ArrowRight, Menu, X, Phone, MapPin, ExternalLink 
} from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('prices');

  const categories = [
    { id: 'all', name: 'الكل', icon: Sparkles },
    { id: 'prices', name: 'أسعار السلع والتموين', icon: ShoppingCart },
    { id: 'services', name: 'الخدمات الحكومية', icon: Building2 },
    { id: 'transport', name: 'المواصلات والمترو', icon: Car },
    { id: 'finance', name: 'حاسبة الرواتب والذهب', icon: Calculator },
    { id: 'health', name: 'الصحة والأدوية', icon: HeartPulse },
  ];

  const items = [
    { id: 1, title: 'السكر التمويني (كجم)', category: 'prices', price: '12.60 ج.م', change: '-5%', desc: 'السعر الرسمي بمنظومة التموين', verified: true },
    { id: 2, title: 'الأرز الأبيض المعبأ (كجم)', category: 'prices', price: '28.00 ج.م', change: 'استقرار', desc: 'متوسط السعر بالأسواق الكبرى', verified: true },
    { id: 3, title: 'زيت الخليط (800 مل)', category: 'prices', price: '30.00 ج.م', change: 'متوفر', desc: 'منافذ التموين والمجمعات الاستهلاكية', verified: true },
    { id: 4, title: 'استخراج بطاقة الرقم القومي', category: 'services', price: '68 ج.م', change: 'فوري', desc: 'السجل المدني والمنصة الرقمية', verified: true },
    { id: 5, title: 'تجديد رخصة القيادة', category: 'services', price: '1100 ج.م', change: '3 سنوات', desc: 'وحدة المرور المختصة', verified: true },
    { id: 6, title: 'تذاكر مترو الأنفاق (أكثر من 9 محطات)', category: 'transport', price: '15.00 ج.م', change: 'ثابت', desc: 'الخطوط الأول والثاني والثالث', verified: true },
    { id: 7, title: 'جرام الذهب عيار 21', category: 'finance', price: '3,450 ج.م', change: '+12 ج.م', desc: 'بدون مصنعية (أسواق الصاغة)', verified: true },
    { id: 8, title: 'مضاد حيوي واسع المجال (أوجمنتين 1جم)', category: 'health', price: '89.00 ج.م', change: 'مسعر جبرياً', desc: 'متوفر بالصيدليات المعتمدة', verified: true },
  ];

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-['Cairo',sans-serif]" dir="rtl">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium shadow-inner">
        <span>🇪🇬 السوبر-آب الشامل والبديل الذكي لكافة الخدمات والأسعار في مصر | تحديث لحظي مباشر</span>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-600/30">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                معاك كام <span className="text-emerald-600">.كوم</span>
              </h1>
              <p className="text-xs text-slate-500 font-medium">دليلك الشامل لأسعار السلع والخدمات في مصر</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <a href="#features" className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition">المميزات</a>
            <a href="#directory" className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition">الدليل الخدمي</a>
            <a href="#calculators" className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition">الحاسبات الذكية</a>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-emerald-600/20 transition flex items-center gap-2">
              <Zap className="w-4 h-4" /> حمّل التطبيق
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">المميزات</a>
            <a href="#directory" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">الدليل الخدمي</a>
            <a href="#calculators" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">الحاسبات الذكية</a>
            <button className="w-full mt-2 bg-emerald-600 text-white py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2">
              <Zap className="w-4 h-4" /> حمّل التطبيق
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50 via-white to-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> موثق ومحدث لحظياً بأسواق المحافظات المصرية
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            كل ما يحتاجه المواطن المصري في <span className="text-emerald-600">تطبيق واحد خارق</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            تتبع أسعار السلع، التموين، الذهب، الرواتب، خدمات المرور، المواصلات، والأدوية بكل سهولة ودقة فائقة.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mt-8">
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن سلعة، خدمة حكومية، دواء، أو وسيلة مواصلات..."
              className="w-full pr-12 pl-4 py-4 bg-white border border-slate-300 rounded-2xl shadow-lg shadow-slate-200/50 text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 text-sm sm:text-base font-medium"
            />
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      <section className="py-6 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto space-x-3 space-x-reverse pb-2 scrollbar-none">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm whitespace-nowrap transition-all shadow-sm ${
                  isSelected 
                    ? 'bg-emerald-600 text-white shadow-emerald-600/30 scale-105' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {cat.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Content Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full" id="directory">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-600" /> الأسعار والخدمات المحدثة
          </h3>
          <span className="text-xs sm:text-sm text-slate-500 font-medium">
            عرض {filteredItems.length} نتيجة مطابقة
          </span>
        </div>

        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm space-y-4">
            <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              🔍
            </div>
            <h4 className="text-lg font-bold text-slate-800">لم يتم العثور على نتائج مطابقة</h4>
            <p className="text-sm text-slate-500">جرب البحث بكلمات أخرى أو تصفح قسم مختلف.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4 group">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-xl">
                      {item.category === 'prices' && 'أسعار السلع'}
                      {item.category === 'services' && 'خدمات حكومية'}
                      {item.category === 'transport' && 'مواصلات'}
                      {item.category === 'finance' && 'مالية وذهب'}
                      {item.category === 'health' && 'صحة وأدوية'}
                    </span>
                    {item.verified && (
                      <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> موثق
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg group-hover:text-emerald-600 transition">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xl font-black text-slate-900">{item.price}</span>
                  <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg">
                    {item.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Features / Calculators Section */}
      <section className="bg-white border-t border-slate-200 py-16 px-4 sm:px-6 lg:px-8" id="calculators">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">أدوات الحاسبة الذكية للمواطن</h3>
            <p className="text-slate-600 text-sm sm:text-base">احسب مستحقاتك، رواتبك، ومصروفاتك اليومية بدقة تامة.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-4 hover:border-emerald-600 transition">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center font-bold">
                💰
              </div>
              <h4 className="text-lg font-bold text-slate-900">حاسبة الرواتب والضرائب</h4>
              <p className="text-slate-600 text-sm">احسب صافي دخلك الشهري والسنوي بعد خصم الضرائب والتأمينات الاجتماعية.</p>
              <button className="text-emerald-600 font-bold text-sm inline-flex items-center gap-1 hover:underline">
                جرب الحاسبة الآن <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-4 hover:border-emerald-600 transition">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center font-bold">
                🚇
              </div>
              <h4 className="text-lg font-bold text-slate-900">مخطط مسارات المترو</h4>
              <p className="text-slate-600 text-sm">حدد محطة الانطلاق والوصول لمعرفة عدد المحطات، وقت الرحلة، وسعر التذكرة بدقة.</p>
              <button className="text-emerald-600 font-bold text-sm inline-flex items-center gap-1 hover:underline">
                خطط رحلتك <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-4 hover:border-emerald-600 transition">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center font-bold">
                💊
              </div>
              <h4 className="text-lg font-bold text-slate-900">دليل الأدوية والبدائل</h4>
              <p className="text-slate-600 text-sm">ابحث عن أي دواء واعرف البديل الاقتصادي المتوفر بالصيدليات المصرية.</p>
              <button className="text-emerald-600 font-bold text-sm inline-flex items-center gap-1 hover:underline">
                ابحث عن بديل <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold">معاك كام.كوم | Ma3akKam.com</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 text-center md:text-right">
            جميع الحقوق محفوظة © 2026 - السوبر-آب الشامل للمواطن المصري.
          </p>
        </div>
      </footer>
    </div>
  );
}
