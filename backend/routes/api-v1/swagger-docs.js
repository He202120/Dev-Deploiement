/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin operations
 */

/**
 * @swagger
 * paths:
 *   /api/v1/admin:
 *     post:
 *       summary: Register a new admin
 *       tags: [Admin]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *
 *   /api/v1/admin/auth:
 *     post:
 *       summary: Authenticate admin
 *       tags: [Admin]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *               example:
 *                 email: admin@example.com
 *                 password: adminPassword123
 *
 *   /api/v1/admin/logout:
 *     post:
 *       summary: Logout admin
 *       tags: [Admin]
 *
 *   /api/v1/admin/profile:
 *     get:
 *       summary: Get admin profile
 *       tags: [Admin]
 *       security:
 *         - cookieAuth: []
 *     put:
 *       summary: Update admin profile
 *       tags: [Admin]
 *       security:
 *         - cookieAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *               example:
 *                 name: Updated John Doe
 *                 email: updatedadmin@example.com
 *                 password: newPassword123
 *
 *   /api/v1/admin/get-users:
 *     post:
 *       summary: Get all users
 *       tags: [Admin]
 *       security:
 *         - cookieAuth: []
 *
 *   /api/v1/admin/block-user:
 *     patch:
 *       summary: Block a user
 *       tags: [Admin]
 *       security:
 *         - cookieAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *               example:
 *                 userId: 1234567890
 *
 *   /api/v1/admin/unblock-user:
 *     patch:
 *       summary: Unblock a user
 *       tags: [Admin]
 *       security:
 *         - cookieAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *               example:
 *                 userId: 1234567890
 *
 *   /api/v1/admin/update-user:
 *     put:
 *       summary: Update user data
 *       tags: [Admin]
 *       security:
 *         - cookieAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *               example:
 *                 userId: 1234567890
 *                 name: Updated John Doe
 *                 email: updateduser@example.com
 *
 * components:
 *   schemas:
 *     Errors Model:
 *       type: object
 *       properties:
 *         errors:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: Error message.
 *             example:
 *               message: Admin already exists
 */
