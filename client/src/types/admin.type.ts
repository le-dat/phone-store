export type Role = 'User' | 'Admin'

export interface Admin {
  _id: string
  roles: Role[]
  // roles: 'Admin'
  email: string
  name?: string
  date_of_birth?: string // ISO 8610
  avatar?: string
  address?: string
  phone?: string
  createdAt: string
  updatedAt: string
}
