@fragment
fn fragmentMain(input: VertexOutput) -> @location(0) vec4f {
    return vec4f(input.cell.x/grid.x, input.cell.y/grid.y, 0.4-input.cell.x/grid.x, 1);
}
