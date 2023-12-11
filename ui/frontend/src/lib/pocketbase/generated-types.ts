/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Companies = "companies",
	Consumptions = "consumptions",
	Discounts = "discounts",
	ManagedServices = "managed_services",
	Pricings = "pricings",
	Reports = "reports",
	Users = "users",
	VirtualMachines = "virtual_machines",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type CompaniesRecord = {
	address?: string
	hlq: string
	logo?: string
	name: string
}

export type ConsumptionsRecord = {
	backup_storage?: number
	cpu?: number
	day?: IsoDateString
	kubernetes_storage?: number
	memory?: number
	report?: RecordIdString
	storage?: number
}

export type DiscountsRecord = {
	companies?: RecordIdString[]
	end_date?: IsoDateString
	managed_services?: RecordIdString[]
	percentage?: number
	pricings?: RecordIdString[]
	start_date?: IsoDateString
}

export type ManagedServicesRecord = {
	code?: string
	description?: string
	name?: string
	price?: number
}

export type PricingsRecord = {
	price?: number
	resource?: string
}

export type ReportsRecord = {
	company: RecordIdString
	month: number
	year: number
}

export enum UsersRoleOptions {
	"admin" = "admin",
	"user" = "user",
}
export type UsersRecord = {
	avatar?: string
	companies?: RecordIdString[]
	name?: string
	role?: UsersRoleOptions
}

export type VirtualMachinesRecord = {
	backup_storage?: number
	cpu?: number
	memory?: number
	name: string
	report: RecordIdString
	storage?: number
	vm_id: number
}

// Response types include system fields and match responses from the PocketBase API
export type CompaniesResponse<Texpand = unknown> = Required<CompaniesRecord> & BaseSystemFields<Texpand>
export type ConsumptionsResponse<Texpand = unknown> = Required<ConsumptionsRecord> & BaseSystemFields<Texpand>
export type DiscountsResponse<Texpand = unknown> = Required<DiscountsRecord> & BaseSystemFields<Texpand>
export type ManagedServicesResponse<Texpand = unknown> = Required<ManagedServicesRecord> & BaseSystemFields<Texpand>
export type PricingsResponse<Texpand = unknown> = Required<PricingsRecord> & BaseSystemFields<Texpand>
export type ReportsResponse<Texpand = unknown> = Required<ReportsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>
export type VirtualMachinesResponse<Texpand = unknown> = Required<VirtualMachinesRecord> & BaseSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	companies: CompaniesRecord
	consumptions: ConsumptionsRecord
	discounts: DiscountsRecord
	managed_services: ManagedServicesRecord
	pricings: PricingsRecord
	reports: ReportsRecord
	users: UsersRecord
	virtual_machines: VirtualMachinesRecord
}

export type CollectionResponses = {
	companies: CompaniesResponse
	consumptions: ConsumptionsResponse
	discounts: DiscountsResponse
	managed_services: ManagedServicesResponse
	pricings: PricingsResponse
	reports: ReportsResponse
	users: UsersResponse
	virtual_machines: VirtualMachinesResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'companies'): RecordService<CompaniesResponse>
	collection(idOrName: 'consumptions'): RecordService<ConsumptionsResponse>
	collection(idOrName: 'discounts'): RecordService<DiscountsResponse>
	collection(idOrName: 'managed_services'): RecordService<ManagedServicesResponse>
	collection(idOrName: 'pricings'): RecordService<PricingsResponse>
	collection(idOrName: 'reports'): RecordService<ReportsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
	collection(idOrName: 'virtual_machines'): RecordService<VirtualMachinesResponse>
}
