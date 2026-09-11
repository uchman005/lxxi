CREATE TABLE `contact_messages` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`subject` text DEFAULT '' NOT NULL,
	`message` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `engagement_mandates` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`full_name` text NOT NULL,
	`rc_number` text DEFAULT '' NOT NULL,
	`registered_address` text DEFAULT '' NOT NULL,
	`contact_person` text DEFAULT '' NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`business_profile` text DEFAULT '' NOT NULL,
	`engagement_types` text NOT NULL,
	`other_engagement_type` text DEFAULT '' NOT NULL,
	`transaction_description` text DEFAULT '' NOT NULL,
	`services_required` text NOT NULL,
	`excluded_services` text DEFAULT '' NOT NULL,
	`capacity_documents` text NOT NULL,
	`capacity_timeframe` text DEFAULT '' NOT NULL,
	`escrow_agreeable` text DEFAULT 'yes' NOT NULL,
	`collateral_description` text DEFAULT '' NOT NULL,
	`security_documents_note` text DEFAULT '' NOT NULL,
	`authorized_signatory_name` text NOT NULL,
	`solvency_agree` integer NOT NULL,
	`exclusivity_period` text NOT NULL,
	`non_circumvention_agree` integer NOT NULL,
	`confidentiality_agree` integer NOT NULL,
	`validity_period` text NOT NULL,
	`validity_other` text DEFAULT '' NOT NULL,
	`additional_instructions` text DEFAULT '' NOT NULL,
	`designation` text NOT NULL,
	`declaration_date` text DEFAULT '' NOT NULL,
	`declaration_agree` integer NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `inquiries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`full_name` text NOT NULL,
	`email` text NOT NULL,
	`organization` text NOT NULL,
	`sector` text DEFAULT '' NOT NULL,
	`message` text NOT NULL,
	`source` text DEFAULT 'sectors' NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `subscribers` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`status` text DEFAULT 'active' NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `subscribers_email_unique` ON `subscribers` (`email`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`full_name` text NOT NULL,
	`email` text NOT NULL,
	`password_hash` text NOT NULL,
	`role` text DEFAULT 'investor' NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);