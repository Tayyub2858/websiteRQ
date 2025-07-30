
// Email Service Configuration
// This file contains configuration for multiple email services to ensure reliable delivery

export const EMAIL_CONFIG = {
  // Primary email address to receive form submissions
  TO_EMAIL: 'onlinerehmatquran@gmail.com',
  
  // FormSubmit.co configuration (No API key required)
  FORMSUBMIT: {
    endpoint: 'https://formsubmit.co/onlinerehmatquran@gmail.com',
    features: {
      captcha: false,
      template: 'table',
      next: window.location.origin + '/contact?success=true'
    }
  },
  
  // Web3Forms configuration (Requires free API key from web3forms.com)
  WEB3FORMS: {
    endpoint: 'https://api.web3forms.com/submit',
    // Get your free access key from https://web3forms.com/
    access_key: 'YOUR_WEB3FORMS_ACCESS_KEY' // Replace with actual key
  },
  
  // EmailJS configuration (Requires setup at emailjs.com)
  EMAILJS: {
    endpoint: 'https://api.emailjs.com/api/v1.0/email/send',
    service_id: 'YOUR_EMAILJS_SERVICE_ID', // Replace with actual service ID
    template_id: 'YOUR_EMAILJS_TEMPLATE_ID', // Replace with actual template ID
    user_id: 'YOUR_EMAILJS_USER_ID' // Replace with actual user ID
  },
  
  // Getform.io configuration (Alternative service)
  GETFORM: {
    endpoint: 'https://getform.io/f/YOUR_GETFORM_ID', // Replace with actual form ID
  }
};

// Email template for consistent formatting
export const formatEmailContent = (formData: any) => {
  return {
    subject: `🌟 New Spiritual Healing Request - ${formData.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #047857; font-size: 24px; margin-bottom: 10px;">🌟 New Spiritual Healing Request</h1>
            <p style="color: #666; font-size: 16px;">From: Rehmat E Quran Website</p>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #1e40af; margin-top: 0;">📋 Personal Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #374151; font-weight: bold;">👤 Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #374151; font-weight: bold;">📧 Email:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #374151; font-weight: bold;">📱 Phone:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #374151; font-weight: bold;">🌍 Country:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.country}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #374151; font-weight: bold;">🏙️ City:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.city}</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #166534; margin-top: 0;">🔮 Service Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #374151; font-weight: bold;">🎯 Service:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.service}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #374151; font-weight: bold;">⚡ Priority:</td>
                <td style="padding: 8px 0; color: #1f2937;">
                  <span style="background-color: ${formData.priority === 'emergency' ? '#fee2e2' : formData.priority === 'urgent' ? '#fef3c7' : '#dbeafe'}; 
                               color: ${formData.priority === 'emergency' ? '#dc2626' : formData.priority === 'urgent' ? '#d97706' : '#2563eb'}; 
                               padding: 4px 8px; border-radius: 4px; font-weight: bold;">
                    ${formData.priority.toUpperCase()}
                  </span>
                </td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #fef7ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #7c3aed; margin-top: 0;">❓ Problem Description</h2>
            <p style="color: #1f2937; line-height: 1.6; margin: 0; white-space: pre-wrap;">${formData.problem}</p>
          </div>
          
          ${formData.message ? `
          <div style="background-color: #fffbeb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #d97706; margin-top: 0;">💬 Additional Message</h2>
            <p style="color: #1f2937; line-height: 1.6; margin: 0; white-space: pre-wrap;">${formData.message}</p>
          </div>
          ` : ''}
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; text-align: center;">
            <p style="color: #6b7280; margin: 0; font-size: 14px;">
              📅 Submitted: ${new Date().toLocaleString()}<br>
              🌐 Source: Rehmat E Quran Website Contact Form
            </p>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; border-top: 2px solid #e5e7eb;">
            <p style="color: #047857; font-weight: bold; margin-bottom: 10px;">📞 Quick Response Options:</p>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <a href="mailto:${formData.email}" style="background-color: #3b82f6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">📧 Reply via Email</a>
              <a href="https://wa.me/${formData.phone.replace(/\D/g, '')}" style="background-color: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">📱 WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    `,
    text: `
SPIRITUAL HEALING CONSULTATION REQUEST
=====================================

PERSONAL INFORMATION:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Country: ${formData.country}
City: ${formData.city}

SERVICE DETAILS:
Service: ${formData.service}
Priority: ${formData.priority.toUpperCase()}

PROBLEM DESCRIPTION:
${formData.problem}

ADDITIONAL MESSAGE:
${formData.message || 'No additional message'}

Submitted: ${new Date().toLocaleString()}
Source: Rehmat E Quran Website Contact Form

Please respond to this spiritual healing consultation request as soon as possible.
    `
  };
};

// Validation helper
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};
