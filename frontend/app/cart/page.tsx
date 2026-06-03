'use client';

import React, { useState } from 'react';
import { useStore, OrderAddress } from '../../src/context/StoreContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  FiTrash2, 
  FiPlus, 
  FiMinus, 
  FiArrowLeft, 
  FiFileText, 
  FiCheckCircle, 
  FiShoppingCart 
} from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';

export default function CartPage() {
  const router = useRouter();
  const { cart, updateCartQty, removeFromCart, placeOrder } = useStore();

  // 1. React States for address form
  const [address, setAddress] = useState<OrderAddress>({
    fullName: '',
    phone: '',
    addressLine: '',
    city: 'Delhi', // Default Indian city selection
    state: 'Delhi',
    pinCode: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('UPI'); // UPI, Cash on Delivery, NetBanking
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);
  const [placedOrderId, setPlacedOrderId] = useState('');

  // 2. Compute Invoice Metrics
  const subtotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const gst = Math.round(subtotal * 0.18); // 18% standard India GST
  const deliveryCharge = subtotal > 999 ? 0 : 99; // Free above ₹999
  const grandTotal = subtotal + gst + deliveryCharge;

  // 3. Indian Cities & States mapper
  const indianCities = [
    { city: 'Delhi', state: 'Delhi' },
    { city: 'Mumbai', state: 'Maharashtra' },
    { city: 'Bengaluru', state: 'Karnataka' },
    { city: 'Hyderabad', state: 'Telangana' },
    { city: 'Jaipur', state: 'Rajasthan' },
    { city: 'Chandigarh', state: 'Punjab' },
    { city: 'Gurugram', state: 'Haryana' }
  ];

  const handleCityChange = (cityName: string) => {
    const matched = indianCities.find(c => c.city === cityName);
    setAddress(prev => ({
      ...prev,
      city: cityName,
      state: matched ? matched.state : prev.state
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 4. Form validation and checkout place order
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();

    // Indian Mobile validation (exactly 10 digits)
    const phoneDigits = address.phone.replace(/\D/g, '');
    if (phoneDigits.length !== 10) {
      toast.error('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    // Indian PIN Code validation (exactly 6 digits)
    const pinDigits = address.pinCode.replace(/\D/g, '');
    if (pinDigits.length !== 6) {
      toast.error('Please enter a valid 6-digit Indian PIN Code.');
      return;
    }

    try {
      // Place order and trigger context state updates
      const order = placeOrder(
        {
          ...address,
          phone: '+91 ' + phoneDigits,
          pinCode: pinDigits
        }, 
        paymentMethod
      );

      setPlacedOrderId(order.id);
      setIsOrderSuccess(true);
      toast.success('Order placed successfully!', { icon: '🎉' });
      
      // Auto navigate to Orders tracking dashboard after 2.5 seconds
      setTimeout(() => {
        router.push('/orders');
      }, 2500);

    } catch (err) {
      toast.error('Failed to process order checkout. Please try again.');
    }
  };

  // If order was successfully completed, show checkout victory modal
  if (isOrderSuccess) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center p-8 space-y-6">
        <div className="rounded-full bg-green-500/10 p-6 text-green-500 animate-bounce">
          <FiCheckCircle className="text-6xl" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-black text-text">Order Placed Successfully!</h2>
          <p className="text-zinc-500 max-w-sm mx-auto">
            Thank you for shopping with NexCart. Your Order ID is <span className="font-extrabold text-primary">{placedOrderId}</span>.
          </p>
          <p className="text-xs text-zinc-400">Navigating to your Orders Dashboard in 2 seconds...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-text py-12 transition-colors duration-200">
      <Toaster position="bottom-right" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb */}
        <div className="flex items-center justify-between mb-10">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Checkout</span>
            <h1 className="text-3xl font-extrabold tracking-tight">Shopping Cart</h1>
          </div>
          <Link href="/" className="inline-flex items-center gap-1 text-xs font-bold text-zinc-400 hover:text-primary transition-colors">
            <FiArrowLeft /> Back to Store
          </Link>
        </div>

        {cart.length === 0 ? (
          // Empty Cart View
          <div className="rounded-3xl border border-border bg-card p-12 text-center max-w-lg mx-auto space-y-6">
            <div className="inline-flex rounded-full bg-background p-6 text-zinc-400">
              <FiShoppingCart className="text-5xl" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-lg">Your cart is empty</h3>
              <p className="text-sm text-zinc-400 max-w-xs mx-auto">
                Looks like you haven't added any Indian premium items yet. Let's explore the collections!
              </p>
            </div>
            <Link href="/" className="inline-block rounded-full bg-primary px-6 py-3 text-xs font-bold text-white shadow-md">
              Browse Products
            </Link>
          </div>
        ) : (
          // Active Checkout Layout: Left list, Right summary sheets
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left side: Cart Items list (7 Columns) */}
            <div className="lg:col-span-7 space-y-4">
              {cart.map((item) => (
                <div 
                  key={item.product.id} 
                  className="rounded-2xl border border-border bg-card p-4 flex gap-4 hover:shadow-xs transition-shadow"
                >
                  {/* Thumbnail */}
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-xl overflow-hidden bg-background flex-shrink-0">
                    <img src={item.product.images[0]} alt={item.product.name} className="h-full w-full object-cover" />
                  </div>

                  {/* Metadata */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between gap-2">
                      <div>
                        <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{item.product.category}</span>
                        <Link href={`/products/${item.product.id}`} className="font-bold text-xs sm:text-sm text-text line-clamp-1 hover:text-primary transition-colors mt-0.5 block">
                          {item.product.name}
                        </Link>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-red-500 p-1.5 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer self-start"
                      >
                        <FiTrash2 className="text-sm" />
                      </button>
                    </div>

                    {/* Qty and Individual Subtotal */}
                    <div className="flex items-center justify-between mt-3">
                      {/* Qty buttons */}
                      <div className="flex items-center gap-2 rounded-lg border border-border bg-background p-1">
                        <button 
                          onClick={() => updateCartQty(item.product.id, item.quantity - 1)}
                          className="p-1 rounded-md hover:bg-card text-zinc-400 hover:text-text cursor-pointer"
                        >
                          <FiMinus className="text-xs" />
                        </button>
                        <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateCartQty(item.product.id, item.quantity + 1)}
                          className="p-1 rounded-md hover:bg-card text-zinc-400 hover:text-text cursor-pointer"
                        >
                          <FiPlus className="text-xs" />
                        </button>
                      </div>

                      {/* Line subtotal formatted in INR */}
                      <span className="font-extrabold text-sm text-primary">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Right side: Invoice pricing sheet and Address Checkout forms (5 Columns) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Invoice breakdown card */}
              <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
                <h3 className="font-extrabold text-sm uppercase tracking-wider text-zinc-400 flex items-center gap-1.5 pb-3 border-b border-border/50">
                  <FiFileText /> Invoice Summary
                </h3>

                <div className="space-y-2.5 text-xs sm:text-sm font-semibold text-zinc-500">
                  <div className="flex justify-between">
                    <span>Items Subtotal</span>
                    <span className="text-text">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  
                  {/* India Tax GST breakdown */}
                  <div className="flex justify-between">
                    <span>GST (18% Integrated standard)</span>
                    <span className="text-text">₹{gst.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Delivery Charges</span>
                    {deliveryCharge === 0 ? (
                      <span className="text-green-500 uppercase font-bold text-[10px]">Free Delivery</span>
                    ) : (
                      <span className="text-text">₹{deliveryCharge}</span>
                    )}
                  </div>
                  
                  {subtotal <= 999 && (
                    <p className="text-[10px] text-amber-500 font-bold bg-amber-500/10 p-2 rounded-lg">
                      * Add items worth ₹{(1000 - subtotal).toLocaleString('en-IN')} more to unlock FREE Delivery!
                    </p>
                  )}

                  <div className="flex justify-between font-black text-sm sm:text-base text-text border-t border-border/50 pt-3">
                    <span>Grand Total</span>
                    <span className="text-primary">₹{grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Indian Localization Address form */}
              <form onSubmit={handleCheckout} className="rounded-2xl border border-border bg-card p-6 space-y-4">
                <h3 className="font-extrabold text-sm uppercase tracking-wider text-zinc-400 pb-3 border-b border-border/50">
                  Delivery Address & Payment
                </h3>

                <div className="space-y-3.5">
                  
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={address.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs outline-none focus:border-primary text-text font-semibold"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Indian Mobile (+91)</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-400">+91</span>
                      <input 
                        type="tel" 
                        name="phone"
                        value={address.phone}
                        onChange={handleInputChange}
                        required
                        maxLength={10}
                        placeholder="9876543210"
                        className="w-full rounded-xl border border-border bg-background pl-11 pr-3 py-2 text-xs outline-none focus:border-primary text-text font-semibold"
                      />
                    </div>
                  </div>

                  {/* Address line */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Delivery Address</label>
                    <input 
                      type="text" 
                      name="addressLine"
                      value={address.addressLine}
                      onChange={handleInputChange}
                      required
                      placeholder="Flat No, Street details, Landmark"
                      className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs outline-none focus:border-primary text-text font-semibold"
                    />
                  </div>

                  {/* City & State Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* City Select */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">City</label>
                      <select 
                        value={address.city}
                        onChange={(e) => handleCityChange(e.target.value)}
                        className="w-full rounded-xl border border-border bg-background px-2.5 py-2 text-xs outline-none focus:border-primary text-text font-semibold"
                      >
                        {indianCities.map(item => (
                          <option key={item.city} value={item.city}>{item.city}</option>
                        ))}
                      </select>
                    </div>

                    {/* State Input (Auto set from City select) */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">State</label>
                      <input 
                        type="text" 
                        name="state"
                        value={address.state}
                        readOnly
                        className="w-full rounded-xl border border-border bg-zinc-100 dark:bg-zinc-800 px-3 py-2 text-xs outline-none text-zinc-400 font-semibold cursor-not-allowed"
                      />
                    </div>
                  </div>

                  {/* Indian 6-digit PIN Code */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Indian 6-digit PIN Code</label>
                    <input 
                      type="text" 
                      name="pinCode"
                      value={address.pinCode}
                      onChange={handleInputChange}
                      required
                      maxLength={6}
                      placeholder="e.g. 110001"
                      className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs outline-none focus:border-primary text-text font-semibold"
                    />
                  </div>

                  {/* Payment Method Select */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Payment Option</label>
                    <select 
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-2.5 py-2 text-xs outline-none focus:border-primary text-text font-semibold"
                    >
                      <option value="UPI">GooglePay / PhonePe (UPI)</option>
                      <option value="Cash on Delivery">Cash on Delivery (COD)</option>
                      <option value="NetBanking">Indian NetBanking</option>
                    </select>
                  </div>

                </div>

                <button 
                  type="submit"
                  className="w-full rounded-full bg-primary py-3 font-bold text-xs text-white shadow-lg hover:scale-103 active:scale-97 transition-all mt-4 cursor-pointer"
                >
                  Place Order (₹{grandTotal.toLocaleString('en-IN')})
                </button>

              </form>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
