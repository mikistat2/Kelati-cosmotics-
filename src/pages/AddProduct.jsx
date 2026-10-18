// AdminAddProduct.jsx
import React, { useState } from 'react';
import Navbar from '../layout/NavBar';
import Footer from '../layout/Fiiter';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    price: '',
    comparePrice: '',
    description: '',
    shortDescription: '',
    inStock: true,
    stockQuantity: 100,
    isBestseller: false,
    isNew: false,
    tags: '',
    weight: '',
    dimensions: '',
    ingredients: '',
    howToUse: '',
    benefits: ''
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [formStatus, setFormStatus] = useState(null);
  const [activeTab, setActiveTab] = useState('basic');

  const categories = [
    'Serums',
    'Moisturizers',
    'Cleansers',
    'Toners',
    'Night Care',
    'Eye Care',
    'Masks',
    'Bundles'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('saving');
    
    // Simulate API call
    setTimeout(() => {
      console.log('Product Data:', { ...formData, image: selectedImage });
      setFormStatus('success');
      // Reset form after success (optional)
      setTimeout(() => setFormStatus(null), 3000);
    }, 1500);
  };

  return (
    <div className="bg-[#fdf6ee] text-[#1a1210] font-sans overflow-x-hidden [&_p]:text-lg [&_input]:text-lg [&_textarea]:text-lg [&_select]:text-lg [&_.live-preview]:text-lg [&_.product-badge]:text-lg">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-[#e8621a] mb-4">
                <span className="w-7 h-px bg-[#e8621a]"></span>
                Admin Dashboard
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light">
                Add New <em className="text-[#e8621a] not-italic">Product</em>
              </h1>
              <p className="text-sm text-[#8a7570] mt-3 max-w-2xl">
                Fill in the details below to add a new product to your Luminelle collection.
              </p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => window.history.back()}
                className="px-6 py-2.5 border border-[#1a1210]/20 rounded-full text-sm font-medium hover:bg-[#1a1210]/5 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleSubmit}
                disabled={formStatus === 'saving'}
                className="bg-[#e8621a] text-white px-8 py-2.5 rounded-full text-sm font-medium tracking-wide uppercase transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70"
              >
                {formStatus === 'saving' ? 'Saving...' : 'Publish Product →'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form */}
      <section className="py-8 pb-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Form Fields */}
            <div className="lg:col-span-2 space-y-6">
              {/* Tab Navigation */}
              <div className="flex gap-1 bg-white p-1 rounded-xl border border-[#1a1210]/10">
                {['basic', 'details', 'media'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all capitalize ${
                      activeTab === tab 
                        ? 'bg-[#e8621a] text-white shadow-md' 
                        : 'text-[#8a7570] hover:text-[#1a1210]'
                    }`}
                  >
                    {tab === 'basic' && 'Basic Info'}
                    {tab === 'details' && 'Product Details'}
                    {tab === 'media' && 'Media & SEO'}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info Tab */}
                {activeTab === 'basic' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#1a1210]/10">
                      <h3 className="font-serif text-xl font-semibold mb-6">Product Information</h3>
                      
                      <div className="space-y-5">
                        <div>
                          <label className="block text-xs font-medium uppercase tracking-wider text-[#1a1210] mb-2">
                            Product Name <span className="text-[#e8621a]">*</span>
                          </label>
                          <input
                            type="text"
                            name="productName"
                            value={formData.productName}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-3 bg-[#fdf6ee] border border-[#1a1210]/10 rounded-xl focus:outline-none focus:border-[#e8621a] focus:ring-2 focus:ring-[#e8621a]/20 transition-all text-sm"
                            placeholder="e.g., Radiance Vitamin C Serum"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-medium uppercase tracking-wider text-[#1a1210] mb-2">
                              Category <span className="text-[#e8621a]">*</span>
                            </label>
                            <select
                              name="category"
                              value={formData.category}
                              onChange={handleChange}
                              required
                              className="w-full px-5 py-3 bg-[#fdf6ee] border border-[#1a1210]/10 rounded-xl focus:outline-none focus:border-[#e8621a] focus:ring-2 focus:ring-[#e8621a]/20 transition-all text-sm appearance-none"
                            >
                              <option value="">Select category</option>
                              {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium uppercase tracking-wider text-[#1a1210] mb-2">
                              Price <span className="text-[#e8621a]">*</span>
                            </label>
                            <input
                              type="text"
                              name="price"
                              value={formData.price}
                              onChange={handleChange}
                              required
                              className="w-full px-5 py-3 bg-[#fdf6ee] border border-[#1a1210]/10 rounded-xl focus:outline-none focus:border-[#e8621a] focus:ring-2 focus:ring-[#e8621a]/20 transition-all text-sm"
                              placeholder="$68"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-medium uppercase tracking-wider text-[#1a1210] mb-2">
                              Compare at Price (Optional)
                            </label>
                            <input
                              type="text"
                              name="comparePrice"
                              value={formData.comparePrice}
                              onChange={handleChange}
                              className="w-full px-5 py-3 bg-[#fdf6ee] border border-[#1a1210]/10 rounded-xl focus:outline-none focus:border-[#e8621a] focus:ring-2 focus:ring-[#e8621a]/20 transition-all text-sm"
                              placeholder="$86"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium uppercase tracking-wider text-[#1a1210] mb-2">
                              Stock Quantity
                            </label>
                            <input
                              type="number"
                              name="stockQuantity"
                              value={formData.stockQuantity}
                              onChange={handleChange}
                              className="w-full px-5 py-3 bg-[#fdf6ee] border border-[#1a1210]/10 rounded-xl focus:outline-none focus:border-[#e8621a] focus:ring-2 focus:ring-[#e8621a]/20 transition-all text-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-medium uppercase tracking-wider text-[#1a1210] mb-2">
                            Short Description
                          </label>
                          <textarea
                            name="shortDescription"
                            value={formData.shortDescription}
                            onChange={handleChange}
                            rows="2"
                            className="w-full px-5 py-3 bg-[#fdf6ee] border border-[#1a1210]/10 rounded-xl focus:outline-none focus:border-[#e8621a] focus:ring-2 focus:ring-[#e8621a]/20 transition-all text-sm resize-none"
                            placeholder="Brief description that appears on product cards..."
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium uppercase tracking-wider text-[#1a1210] mb-2">
                            Full Description
                          </label>
                          <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-5 py-3 bg-[#fdf6ee] border border-[#1a1210]/10 rounded-xl focus:outline-none focus:border-[#e8621a] focus:ring-2 focus:ring-[#e8621a]/20 transition-all text-sm resize-none"
                            placeholder="Detailed product description..."
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#1a1210]/10">
                      <h3 className="font-serif text-xl font-semibold mb-6">Product Badges</h3>
                      <div className="flex flex-wrap gap-6">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="isBestseller"
                            checked={formData.isBestseller}
                            onChange={handleChange}
                            className="w-5 h-5 accent-[#e8621a]"
                          />
                          <span className="text-sm">Mark as Bestseller</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="isNew"
                            checked={formData.isNew}
                            onChange={handleChange}
                            className="w-5 h-5 accent-[#e8621a]"
                          />
                          <span className="text-sm">Mark as New Arrival</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="inStock"
                            checked={formData.inStock}
                            onChange={handleChange}
                            className="w-5 h-5 accent-[#e8621a]"
                          />
                          <span className="text-sm">In Stock</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Product Details Tab */}
                {activeTab === 'details' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#1a1210]/10">
                      <h3 className="font-serif text-xl font-semibold mb-6">Ingredients & Formula</h3>
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-[#1a1210] mb-2">
                          Key Ingredients
                        </label>
                        <textarea
                          name="ingredients"
                          value={formData.ingredients}
                          onChange={handleChange}
                          rows="4"
                          className="w-full px-5 py-3 bg-[#fdf6ee] border border-[#1a1210]/10 rounded-xl focus:outline-none focus:border-[#e8621a] focus:ring-2 focus:ring-[#e8621a]/20 transition-all text-sm"
                          placeholder="List key ingredients and their benefits..."
                        />
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#1a1210]/10">
                      <h3 className="font-serif text-xl font-semibold mb-6">How to Use</h3>
                      <textarea
                        name="howToUse"
                        value={formData.howToUse}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-5 py-3 bg-[#fdf6ee] border border-[#1a1210]/10 rounded-xl focus:outline-none focus:border-[#e8621a] focus:ring-2 focus:ring-[#e8621a]/20 transition-all text-sm"
                        placeholder="Step-by-step instructions for using this product..."
                      />
                    </div>

                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#1a1210]/10">
                      <h3 className="font-serif text-xl font-semibold mb-6">Key Benefits</h3>
                      <textarea
                        name="benefits"
                        value={formData.benefits}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-5 py-3 bg-[#fdf6ee] border border-[#1a1210]/10 rounded-xl focus:outline-none focus:border-[#e8621a] focus:ring-2 focus:ring-[#e8621a]/20 transition-all text-sm"
                        placeholder="List the main benefits (one per line)..."
                      />
                    </div>

                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#1a1210]/10">
                      <h3 className="font-serif text-xl font-semibold mb-6">Shipping & Dimensions</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-medium uppercase tracking-wider text-[#1a1210] mb-2">
                            Weight
                          </label>
                          <input
                            type="text"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            className="w-full px-5 py-3 bg-[#fdf6ee] border border-[#1a1210]/10 rounded-xl focus:outline-none focus:border-[#e8621a] focus:ring-2 focus:ring-[#e8621a]/20 transition-all text-sm"
                            placeholder="e.g., 50ml / 1.7 fl oz"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium uppercase tracking-wider text-[#1a1210] mb-2">
                            Dimensions
                          </label>
                          <input
                            type="text"
                            name="dimensions"
                            value={formData.dimensions}
                            onChange={handleChange}
                            className="w-full px-5 py-3 bg-[#fdf6ee] border border-[#1a1210]/10 rounded-xl focus:outline-none focus:border-[#e8621a] focus:ring-2 focus:ring-[#e8621a]/20 transition-all text-sm"
                            placeholder="e.g., 4.5 x 2 x 2 inches"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Media & SEO Tab */}
                {activeTab === 'media' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#1a1210]/10">
                      <h3 className="font-serif text-xl font-semibold mb-6">Product Images</h3>
                      
                      <div className="border-2 border-dashed border-[#1a1210]/20 rounded-2xl p-8 text-center hover:border-[#e8621a] transition-colors">
                        {imagePreview ? (
                          <div className="space-y-4">
                            <img 
                              src={imagePreview} 
                              alt="Preview" 
                              className="w-48 h-48 object-cover rounded-xl mx-auto shadow-lg"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedImage(null);
                                setImagePreview(null);
                              }}
                              className="text-sm text-[#e8621a] hover:underline"
                            >
                              Remove Image
                            </button>
                          </div>
                        ) : (
                          <div>
                            <div className="w-16 h-16 rounded-full bg-[#fde8d8] flex items-center justify-center text-3xl mx-auto mb-4">
                              📷
                            </div>
                            <p className="text-sm text-[#8a7570] mb-3">
                              Drag and drop or click to upload product image
                            </p>
                            <label className="inline-block bg-[#1a1210] text-white px-6 py-2.5 rounded-full text-sm cursor-pointer hover:bg-[#e8621a] transition-colors">
                              Browse Files
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                              />
                            </label>
                            <p className="text-xs text-[#8a7570] mt-3">
                              Recommended: 1000x1000px, JPG or PNG, max 5MB
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#1a1210]/10">
                      <h3 className="font-serif text-xl font-semibold mb-6">Tags & SEO</h3>
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-[#1a1210] mb-2">
                          Product Tags
                        </label>
                        <input
                          type="text"
                          name="tags"
                          value={formData.tags}
                          onChange={handleChange}
                          className="w-full px-5 py-3 bg-[#fdf6ee] border border-[#1a1210]/10 rounded-xl focus:outline-none focus:border-[#e8621a] focus:ring-2 focus:ring-[#e8621a]/20 transition-all text-sm"
                          placeholder="vitamin c, brightening, anti-aging (comma separated)"
                        />
                        <p className="text-xs text-[#8a7570] mt-2">
                          Tags help customers find your product in search results
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Right Column - Preview Panel */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-white rounded-2xl p-6 border border-[#1a1210]/10 shadow-lg live-preview">
                  <h3 className="font-serif text-lg font-semibold mb-4">Live Preview</h3>
                  
                  <div className="rounded-xl overflow-hidden border border-[#1a1210]/10">
                    <div className="h-48 bg-gradient-to-br from-[#fde8d8] to-[#f9c0a0] flex items-center justify-center relative">
                      {imagePreview ? (
                        <img src={imagePreview} alt="Product preview" className="h-36 w-36 object-cover rounded-xl shadow-md" />
                      ) : (
                        <div className="w-20 h-36 rounded-full bg-white/50 shadow-md"></div>
                      )}
                      {(formData.isBestseller || formData.isNew) && (
                        <span className={`absolute top-3 right-3 text-white text-lg font-medium tracking-wider uppercase py-1 px-3 rounded-full product-badge ${
                          formData.isBestseller ? 'bg-[#e8621a]' : 'bg-[#1a1210]'
                        }`}>
                          {formData.isBestseller ? 'Bestseller' : 'New'}
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="text-[10px] font-normal tracking-wider uppercase text-[#e8621a] mb-1">
                        {formData.category || 'Category'}
                      </div>
                      <div className="font-serif text-lg font-semibold mb-1">
                        {formData.productName || 'Product Name'}
                      </div>
                      <div className="text-xs text-[#8a7570] leading-relaxed mb-3">
                        {formData.shortDescription || 'Product description will appear here...'}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="font-serif text-2xl font-semibold">
                          {formData.price || '$0'}
                        </div>
                        <div className="w-9 h-9 rounded-full bg-[#1a1210] text-white flex items-center justify-center">
                          +
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-[#fdf6ee] rounded-lg">
                    <p className="text-xs text-[#8a7570] text-center">
                      {formData.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                    </p>
                  </div>
                </div>

                {formStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm text-center">
                    ✓ Product published successfully!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AddProduct;