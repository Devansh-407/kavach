// ==========================================
// MOCK AUTH SERVICE FOR DEMO PRESENTATION
// ==========================================
// Provides authentication without Firebase

export interface MockUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  createdAt: Date;
}

// Pre-populated demo users
const MOCK_USERS: MockUser[] = [
  {
    id: "demo_user_001",
    firstName: "Rahul",
    lastName: "Kumar",
    email: "demo@kavachpay.com",
    phone: "9876543210",
    password: "demo123",
    createdAt: new Date("2024-01-15"),
  },
];

// In-memory storage for newly registered users
let mockUsers: MockUser[] = [...MOCK_USERS];

/**
 * Mock Auth Service
 */
export const MockAuthService = {
  /**
   * Register a new user
   */
  async register(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phone: string
  ) {
    // Check if user exists
    const existing = mockUsers.find((u) => u.email === email);
    if (existing) {
      return {
        success: false,
        error: "An account with this email already exists. Please sign in.",
      };
    }

    // Create new user
    const newUser: MockUser = {
      id: `user_${Date.now()}`,
      firstName: firstName || email.split("@")[0],
      lastName: lastName || "",
      email,
      phone: phone || "",
      password,
      createdAt: new Date(),
    };

    mockUsers.push(newUser);
    console.log("[MOCK AUTH] User registered:", newUser.email);

    return {
      success: true,
      userId: newUser.id,
      user: {
        id: newUser.id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        phone: newUser.phone,
      },
      message: "Account created successfully!",
    };
  },

  /**
   * Login user
   */
  async login(email: string, password: string) {
    const user = mockUsers.find((u) => u.email === email);

    if (!user) {
      return {
        success: false,
        error: "No account found with this email. Please sign up first.",
      };
    }

    // For demo, accept any password or check if matches
    if (password !== user.password && password !== "demo") {
      return {
        success: false,
        error: "Invalid password. Try 'demo123' for demo@kavachpay.com",
      };
    }

    console.log("[MOCK AUTH] User logged in:", user.email);

    return {
      success: true,
      userId: user.id,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
      },
      message: `Welcome back, ${user.firstName}!`,
    };
  },

  /**
   * Get user by ID
   */
  async getUser(userId: string) {
    const user = mockUsers.find((u) => u.id === userId);
    if (!user) return null;

    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
    };
  },

  /**
   * List all users (for debugging)
   */
  getAllUsers() {
    return mockUsers.map((u) => ({
      id: u.id,
      email: u.email,
      firstName: u.firstName,
    }));
  },
};

// Demo credentials helper
export const DEMO_CREDENTIALS = {
  email: "demo@kavachpay.com",
  password: "demo123",
};
