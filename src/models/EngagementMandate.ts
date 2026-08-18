import mongoose, { Schema, model, models } from 'mongoose';

export interface IEngagementMandate {
    // Client information
    fullName: string;
    rcNumber: string;
    registeredAddress: string;
    contactPerson: string;
    email: string;
    phone: string;
    businessProfile: string;

    // Type of engagement
    engagementTypes: string[];
    otherEngagementType: string;
    transactionDescription: string;

    // Scope of services
    servicesRequired: string[];
    excludedServices: string;

    // Transaction capacity & protocol
    capacityDocuments: string[];
    capacityTimeframe: string;
    escrowAgreeable: 'yes' | 'no';

    // Security details
    collateralDescription: string;
    securityDocumentsNote: string;

    // Declarations
    authorizedSignatoryName: string;
    solvencyAgree: boolean;
    exclusivityPeriod: '30' | '60' | '90';
    nonCircumventionAgree: boolean;
    confidentialityAgree: boolean;
    validityPeriod: '30' | '60' | '90' | 'other';
    validityOther: string;
    additionalInstructions: string;

    // Client declaration
    designation: string;
    declarationDate: string;
    declarationAgree: boolean;

    createdAt: Date;
    updatedAt: Date;
}

const EngagementMandateSchema = new Schema<IEngagementMandate>(
    {
        fullName: { type: String, required: true, trim: true },
        rcNumber: { type: String, trim: true, default: '' },
        registeredAddress: { type: String, trim: true, default: '' },
        contactPerson: { type: String, trim: true, default: '' },
        email: { type: String, required: true, trim: true, lowercase: true },
        phone: { type: String, required: true, trim: true },
        businessProfile: { type: String, trim: true, default: '' },

        engagementTypes: { type: [String], default: [] },
        otherEngagementType: { type: String, trim: true, default: '' },
        transactionDescription: { type: String, trim: true, default: '' },

        servicesRequired: { type: [String], default: [] },
        excludedServices: { type: String, trim: true, default: '' },

        capacityDocuments: { type: [String], default: [] },
        capacityTimeframe: { type: String, trim: true, default: '' },
        escrowAgreeable: { type: String, enum: ['yes', 'no'], default: 'yes' },

        collateralDescription: { type: String, trim: true, default: '' },
        securityDocumentsNote: { type: String, trim: true, default: '' },

        authorizedSignatoryName: { type: String, required: true, trim: true },
        solvencyAgree: { type: Boolean, required: true },
        exclusivityPeriod: { type: String, enum: ['30', '60', '90'], required: true },
        nonCircumventionAgree: { type: Boolean, required: true },
        confidentialityAgree: { type: Boolean, required: true },
        validityPeriod: { type: String, enum: ['30', '60', '90', 'other'], required: true },
        validityOther: { type: String, trim: true, default: '' },
        additionalInstructions: { type: String, trim: true, default: '' },

        designation: { type: String, required: true, trim: true },
        declarationDate: { type: String, trim: true, default: '' },
        declarationAgree: { type: Boolean, required: true },
    },
    { timestamps: true },
);

const EngagementMandate =
    models.EngagementMandate || model<IEngagementMandate>('EngagementMandate', EngagementMandateSchema);
export default EngagementMandate as mongoose.Model<IEngagementMandate>;
