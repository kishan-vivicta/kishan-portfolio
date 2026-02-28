import React, { useState } from "react";
import { profile } from "../data/profileData";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:${profile.contacts.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setFormStatus('Opening your email client...');
    setTimeout(() => {
      setFormStatus('');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
  <section id="contact" className="section fade-in-up">
    {/* Highlights Section */}
    <div style={{
      maxWidth: "800px",
      margin: "0 auto 32px",
      padding: "24px",
      background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
      borderRadius: "16px",
      border: "1px solid rgba(59, 130, 246, 0.2)"
    }}>
      <h3 style={{
        fontSize: "1.3rem",
        fontWeight: "700",
        color: "#1e293b",
        marginBottom: "12px",
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }}>
        <span style={{ fontSize: "1.5rem" }}>📬</span>
        Let's Connect
      </h3>
      <div style={{
        color: "#475569",
        fontSize: "0.95rem",
        lineHeight: "1.7"
      }}>
        <p style={{ margin: 0 }}>
          I'm always interested in discussing <strong style={{ color: "#3b82f6" }}>cloud architecture</strong>, <strong style={{ color: "#3b82f6" }}>DevOps transformations</strong>, and <strong style={{ color: "#3b82f6" }}>AI platform opportunities</strong>. Feel free to reach out through any of the channels below.
        </p>
      </div>
    </div>

    {/* Contact Form and Info Grid */}
    <div style={{
      maxWidth: "900px",
      margin: "0 auto 32px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "32px"
    }}
    className="contact-form-grid">
      {/* Contact Form */}
      <div className="card">
        <h3 style={{
          fontSize: "1.2rem",
          fontWeight: "700",
          color: "#1e293b",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <span style={{ fontSize: "1.4rem" }}>✉️</span>
          Send a Message
        </h3>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label style={{
              display: "block",
              fontSize: "0.9rem",
              fontWeight: "600",
              color: "#475569",
              marginBottom: "8px"
            }}>
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid rgba(148, 163, 184, 0.3)",
                fontSize: "0.95rem",
                color: "#1e293b",
                background: "white",
                transition: "border-color 0.2s",
                outline: "none"
              }}
              onFocus={(e) => e.target.style.borderColor = "#3b82f6"}
              onBlur={(e) => e.target.style.borderColor = "rgba(148, 163, 184, 0.3)"}
              placeholder="John Doe"
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label style={{
              display: "block",
              fontSize: "0.9rem",
              fontWeight: "600",
              color: "#475569",
              marginBottom: "8px"
            }}>
              Your Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid rgba(148, 163, 184, 0.3)",
                fontSize: "0.95rem",
                color: "#1e293b",
                background: "white",
                transition: "border-color 0.2s",
                outline: "none"
              }}
              onFocus={(e) => e.target.style.borderColor = "#3b82f6"}
              onBlur={(e) => e.target.style.borderColor = "rgba(148, 163, 184, 0.3)"}
              placeholder="john@example.com"
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label style={{
              display: "block",
              fontSize: "0.9rem",
              fontWeight: "600",
              color: "#475569",
              marginBottom: "8px"
            }}>
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid rgba(148, 163, 184, 0.3)",
                fontSize: "0.95rem",
                color: "#1e293b",
                background: "white",
                transition: "border-color 0.2s",
                outline: "none"
              }}
              onFocus={(e) => e.target.style.borderColor = "#3b82f6"}
              onBlur={(e) => e.target.style.borderColor = "rgba(148, 163, 184, 0.3)"}
              placeholder="Project Discussion"
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{
              display: "block",
              fontSize: "0.9rem",
              fontWeight: "600",
              color: "#475569",
              marginBottom: "8px"
            }}>
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid rgba(148, 163, 184, 0.3)",
                fontSize: "0.95rem",
                color: "#1e293b",
                background: "white",
                transition: "border-color 0.2s",
                outline: "none",
                resize: "vertical",
                fontFamily: "inherit"
              }}
              onFocus={(e) => e.target.style.borderColor = "#3b82f6"}
              onBlur={(e) => e.target.style.borderColor = "rgba(148, 163, 184, 0.3)"}
              placeholder="Tell me about your project or opportunity..."
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px 24px",
              borderRadius: "8px",
              border: "none",
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              color: "white",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(59, 130, 246, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.3)";
            }}
          >
            Send Message
          </button>

          {formStatus && (
            <div style={{
              marginTop: "12px",
              padding: "12px",
              borderRadius: "8px",
              background: "rgba(34, 197, 94, 0.1)",
              border: "1px solid rgba(34, 197, 94, 0.2)",
              color: "#059669",
              fontSize: "0.9rem",
              textAlign: "center"
            }}>
              {formStatus}
            </div>
          )}
        </form>
      </div>

      {/* Quick Contact Info */}
      <div>
        <div className="card" style={{ marginBottom: "20px" }}>
          <h3 style={{
            fontSize: "1.2rem",
            fontWeight: "700",
            color: "#1e293b",
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}>
            <span style={{ fontSize: "1.4rem" }}>📞</span>
            Quick Contact
          </h3>
          
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}>
            <a
              href={`mailto:${profile.contacts.email}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px",
                background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                borderRadius: "8px",
                border: "1px solid rgba(59, 130, 246, 0.15)",
                textDecoration: "none",
                color: "inherit",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "#3b82f6"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.15)"}
            >
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem"
              }}>
                📧
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.75rem", color: "#64748b", marginBottom: "2px" }}>Email</div>
                <div style={{ fontSize: "0.9rem", fontWeight: "600", color: "#1e293b", wordBreak: "break-all" }}>
                  {profile.contacts.email}
                </div>
              </div>
            </a>

            <a
              href={`tel:${profile.contacts.phone}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px",
                background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                borderRadius: "8px",
                border: "1px solid rgba(59, 130, 246, 0.15)",
                textDecoration: "none",
                color: "inherit",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "#8b5cf6"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.15)"}
            >
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem"
              }}>
                📱
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.75rem", color: "#64748b", marginBottom: "2px" }}>Phone</div>
                <div style={{ fontSize: "0.9rem", fontWeight: "600", color: "#1e293b" }}>
                  {profile.contacts.phone}
                </div>
              </div>
            </a>

            <a
              href={`https://wa.me/${profile.contacts.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px",
                background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                borderRadius: "8px",
                border: "1px solid rgba(59, 130, 246, 0.15)",
                textDecoration: "none",
                color: "inherit",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "#25D366"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.15)"}
            >
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem"
              }}>
                💬
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.75rem", color: "#64748b", marginBottom: "2px" }}>WhatsApp</div>
                <div style={{ fontSize: "0.9rem", fontWeight: "600", color: "#1e293b" }}>
                  {profile.contacts.phone}
                </div>
              </div>
            </a>

            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px",
              background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
              borderRadius: "8px",
              border: "1px solid rgba(59, 130, 246, 0.15)"
            }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem"
              }}>
                📍
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.75rem", color: "#64748b", marginBottom: "2px" }}>Location</div>
                <div style={{ fontSize: "0.9rem", fontWeight: "600", color: "#1e293b" }}>
                  {profile.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="card" style={{
          background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
          border: "1px solid rgba(59, 130, 246, 0.2)"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}>
            <div style={{
              fontSize: "2rem"
            }}>
              ⚡
            </div>
            <div>
              <div style={{
                fontSize: "0.9rem",
                fontWeight: "600",
                color: "#1e293b",
                marginBottom: "4px"
              }}>
                Quick Response Time
              </div>
              <div style={{
                fontSize: "0.85rem",
                color: "#64748b"
              }}>
                I typically respond within 24 hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Social Links */}
    <div className="card" style={{
      maxWidth: "800px",
      margin: "0 auto 32px"
    }}>
      <h3 style={{
        fontSize: "1.1rem",
        fontWeight: "700",
        color: "#1e293b",
        marginBottom: "20px",
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }}>
        <span style={{ fontSize: "1.3rem" }}>🌐</span>
        Professional Profiles
      </h3>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px"
      }}>
        <a
          href={profile.contacts.linkedin}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "16px",
            background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
            borderRadius: "10px",
            border: "1px solid rgba(59, 130, 246, 0.2)",
            textDecoration: "none",
            color: "inherit",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        >
          <div style={{
            width: "40px",
            height: "40px",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #0077b5 0%, #005885 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "700",
            fontSize: "1.2rem",
            flexShrink: 0
          }}>
            in
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: "0.85rem",
              color: "#64748b",
              marginBottom: "2px"
            }}>
              LinkedIn
            </div>
            <div style={{
              fontSize: "0.9rem",
              fontWeight: "600",
              color: "#1e293b"
            }}>
              {profile.socialHandles.linkedin}
            </div>
          </div>
        </a>

        <a
          href={profile.contacts.github}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "16px",
            background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
            borderRadius: "10px",
            border: "1px solid rgba(59, 130, 246, 0.2)",
            textDecoration: "none",
            color: "inherit",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        >
          <div style={{
            width: "40px",
            height: "40px",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            flexShrink: 0
          }}>
            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: "0.85rem",
              color: "#64748b",
              marginBottom: "2px"
            }}>
              GitHub
            </div>
            <div style={{
              fontSize: "0.9rem",
              fontWeight: "600",
              color: "#1e293b"
            }}>
              {profile.socialHandles.github}
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
);
}