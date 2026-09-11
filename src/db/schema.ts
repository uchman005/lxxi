import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

const timestamps = {
    createdAt: integer('created_at', { mode: 'timestamp' })
        .notNull()
        .default(sql`(unixepoch())`),
    updatedAt: integer('updated_at', { mode: 'timestamp' })
        .notNull()
        .default(sql`(unixepoch())`),
};

export const users = sqliteTable('users', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    fullName: text('full_name').notNull(),
    email: text('email').notNull().unique(),
    passwordHash: text('password_hash').notNull(),
    role: text('role', { enum: ['investor', 'admin'] }).notNull().default('investor'),
    ...timestamps,
});

export const contactMessages = sqliteTable('contact_messages', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    email: text('email').notNull(),
    subject: text('subject').notNull().default(''),
    message: text('message').notNull(),
    ...timestamps,
});

export const inquiries = sqliteTable('inquiries', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    fullName: text('full_name').notNull(),
    email: text('email').notNull(),
    organization: text('organization').notNull(),
    sector: text('sector').notNull().default(''),
    message: text('message').notNull(),
    source: text('source').notNull().default('sectors'),
    ...timestamps,
});

export const subscribers = sqliteTable('subscribers', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    email: text('email').notNull().unique(),
    status: text('status', { enum: ['active', 'unsubscribed'] }).notNull().default('active'),
    ...timestamps,
});

export const engagementMandates = sqliteTable('engagement_mandates', {
    id: integer('id').primaryKey({ autoIncrement: true }),

    // Client information
    fullName: text('full_name').notNull(),
    rcNumber: text('rc_number').notNull().default(''),
    registeredAddress: text('registered_address').notNull().default(''),
    contactPerson: text('contact_person').notNull().default(''),
    email: text('email').notNull(),
    phone: text('phone').notNull(),
    businessProfile: text('business_profile').notNull().default(''),

    // Type of engagement
    engagementTypes: text('engagement_types', { mode: 'json' }).notNull().$type<string[]>(),
    otherEngagementType: text('other_engagement_type').notNull().default(''),
    transactionDescription: text('transaction_description').notNull().default(''),

    // Scope of services
    servicesRequired: text('services_required', { mode: 'json' }).notNull().$type<string[]>(),
    excludedServices: text('excluded_services').notNull().default(''),

    // Transaction capacity & protocol
    capacityDocuments: text('capacity_documents', { mode: 'json' }).notNull().$type<string[]>(),
    capacityTimeframe: text('capacity_timeframe').notNull().default(''),
    escrowAgreeable: text('escrow_agreeable', { enum: ['yes', 'no'] }).notNull().default('yes'),

    // Security details
    collateralDescription: text('collateral_description').notNull().default(''),
    securityDocumentsNote: text('security_documents_note').notNull().default(''),

    // Declarations
    authorizedSignatoryName: text('authorized_signatory_name').notNull(),
    solvencyAgree: integer('solvency_agree', { mode: 'boolean' }).notNull(),
    exclusivityPeriod: text('exclusivity_period', { enum: ['30', '60', '90'] }).notNull(),
    nonCircumventionAgree: integer('non_circumvention_agree', { mode: 'boolean' }).notNull(),
    confidentialityAgree: integer('confidentiality_agree', { mode: 'boolean' }).notNull(),
    validityPeriod: text('validity_period', { enum: ['30', '60', '90', 'other'] }).notNull(),
    validityOther: text('validity_other').notNull().default(''),
    additionalInstructions: text('additional_instructions').notNull().default(''),

    // Client declaration
    designation: text('designation').notNull(),
    declarationDate: text('declaration_date').notNull().default(''),
    declarationAgree: integer('declaration_agree', { mode: 'boolean' }).notNull(),

    ...timestamps,
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type NewContactMessage = typeof contactMessages.$inferInsert;
export type Inquiry = typeof inquiries.$inferSelect;
export type NewInquiry = typeof inquiries.$inferInsert;
export type Subscriber = typeof subscribers.$inferSelect;
export type NewSubscriber = typeof subscribers.$inferInsert;
export type EngagementMandate = typeof engagementMandates.$inferSelect;
export type NewEngagementMandate = typeof engagementMandates.$inferInsert;
