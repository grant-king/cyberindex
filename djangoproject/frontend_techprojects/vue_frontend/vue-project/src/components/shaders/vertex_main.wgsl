@group(0) @binding(0) var<uniform> grid: vec2f;

@vertex
fn vertexMain(
    @location(0) pos: vec2f, @builtin(instance_index) instance: u32
    ) -> @builtin(position) vec4f {
    // cast to float as shader operating on floats
    let idx = f32(instance); 
    // compute cell coordinate from instance_index
    let cell = vec2f(idx % grid.x, floor(idx / grid.x));
    let cell_offset = cell / grid * 2;
    // very dense: 
    // pos / grid => centered square
    // pos + 1 / grid => corner-centered square
    // grid_pos = (pos + 1) / grid - 1 => aligned with grid location
    let grid_pos = (pos + 1) / grid - 1 + cell_offset; // aligned with grid at cell location
    return vec4f(grid_pos.x, grid_pos.y, 0, 1);
}