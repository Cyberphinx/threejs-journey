import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Position
mesh.position.set(0.7, -0.6, 1)

// Scale
mesh.scale.set(2, 0.5, 3)

// Rotation
// The order of rotation matters a lot
mesh.rotation.reorder('YXZ')
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI / 2

// Quaternion
// A more complicated way to do rotation

// Objects
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(2, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'blue' })
)

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'green' })
)
cube2.position.x = 2

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 2, 1),
  new THREE.MeshBasicMaterial({ color: 'yellow' })
)
cube2.position.x = 2

group.add(cube1)
group.add(cube2)
group.add(cube3)
group.position.y = -0.5

// Axes helper
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.x = 0.5
camera.position.y = 0.5
camera.position.z = 5
scene.add(camera)

camera.lookAt(mesh.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)